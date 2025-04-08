import type {
  QueryResolvers,
  MutationResolvers,
  SensorRelationResolvers,
} from 'types/graphql'



import { db } from 'src/lib/db'

import { buildWhere } from 'src/utils/utils';


export const sensors: QueryResolvers['sensors'] = async ({ userId, filter, fields}) => {
  const fieldsWhere = buildWhere(fields);

  let sensors = await db.sensor.findMany(where: {fieldsWhere});

  swith(filter) {
    case filter.HIGHEST_GRAIN 
  }
}
 
export const sensor: QueryResolvers['sensor'] = async ({ userId, id }) => {

  return await db.sensor.findUnique({
    where: {
      id : id, 
      userId: userId 
    },
  })
}



// export const waterSensors: QueryResolvers['waterSensors'] = async () => {
  
//   return await db.sensor.findMany({
//     where: {
//       waterVolumeSensor: {
//         not: null
//       }
//     }
//   })
// }

// export const waterUserSensors: QueryResolvers['waterUserSensors'] = async ({ userId }) => {

//   return await db.sensor.findMany({
//     where: {
//       userId: userId,
//       waterVolumeSensor: {
//         not: null
//       }
//     }
//   })
// }


export const createSensor: MutationResolvers['createSensor'] = async ({ input }) => {
  
  return db.sensor.create({
    data: input,
  })
}

export const updateSensor: MutationResolvers['updateSensor'] = async ({
  id,
  userId,
  input,
}) => {

  return db.sensor.update({
    data: input,
    where: {
      id: id,
      userId: userId
     },
  })
}

export const deleteSensor: MutationResolvers['deleteSensor'] = async ({ id, userId }) => {

  return db.sensor.delete({
    where: {
      id: id,
      userId: userId
    },
  })
}

export const Sensor: SensorRelationResolvers = {
  
  owner: (_obj, { root }) => {
    return db.sensor.findUnique({ where: { id: root?.id } }).owner()
  },
}
