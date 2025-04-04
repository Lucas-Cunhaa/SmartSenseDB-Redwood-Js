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

export const user: QueryResolvers['user'] = async ({ publicId }) => {
  return await db.user.findUnique({
    where: { publicId },
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

export const updateUser: MutationResolvers['updateUser'] = ({publicId, input}) => {

  if(isEmpty(input.name) && isEmpty(input.email) && isEmpty(input.name)) throw new Error("User updating: INVALID FIELDS FOR USER");

  return db.user.update({
    data: input,
    where: { publicId },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ publicId }) => {
  return db.user.delete({
    where: { publicId },
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
