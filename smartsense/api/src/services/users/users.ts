import type {
  QueryResolvers,
  MutationResolvers,
  UserRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const users: QueryResolvers['users'] = async () => {
  return await db.user.findMany()
}

export const user: QueryResolvers['user'] = async ({ publicId }) => {
  return await db.user.findUnique({
    where: {  },
  })
}

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  if(!input.name.trim()|| !input.email.trim() || !input.password.trim()) throw new Error("User creation: INVALID FIELDS FOR USER");

  return db.user.create({
    data: input,
  })
}

export const updateUser: MutationResolvers['updateUser'] = ({ publicId, input }) => {
  if(!input.name.trim() && !input.email.trim() && !input.password.trim()) throw new Error("User updating: INVALID FIELDS FOR USER");
  
  return db.user.update({
    data: input,
    where: { publicId },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User: UserRelationResolvers = {
  Sensor: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).Sensor()
  },
}

export const getUserByEmail: QueryResolvers['getUserByEmail'] = async ({ email }) => {
  return await db.user.findFirstOrThrow({ where: {email} }) 
}