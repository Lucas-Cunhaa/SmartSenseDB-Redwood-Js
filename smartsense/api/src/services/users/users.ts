import type {
  QueryResolvers,
  MutationResolvers,
  UserRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { isEmpty } from 'src/utils/utils'

export const users: QueryResolvers['users'] = async () => {
  return await db.user.findMany()
}

export const user: QueryResolvers['user'] = async ({ id }) => {
  return await db.user.findUnique({
    where: { id },
  })
}

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  try {
    if(!input.name.trim()|| !input.email.trim() || !input.password.trim()) throw new Error("User creation: INVALID FIELDS FOR USER");

    return db.user.create({
      data: input,
    })
    
  } catch (error) {
    console.error(error.message)
  }
}

export const updateUser: MutationResolvers['updateUser'] = ({id, input}) => {

  if(isEmpty(input.name) && isEmpty(input.email) && isEmpty(input.name)) throw new Error("User updating: INVALID FIELDS FOR USER");

  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User: UserRelationResolvers = {
  Sensor: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).Sensors()
  },
}

export const getUserByEmail: QueryResolvers['getUserByEmail'] = async ({ email }) => {
  return await db.user.findFirstOrThrow({ where: {email} })
}
