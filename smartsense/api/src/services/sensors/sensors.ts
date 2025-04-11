import type {
  QueryResolvers,
  MutationResolvers,
  SensorRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { buildValidObject } from 'src/utils/utils';

export const sensors: QueryResolvers['sensors'] = async ({ input, filter, fields }) => {
  const inputsNotNulls = buildValidObject(input);
  const fieldsNotNulls = buildValidObject(fields);
  let oderBy = {};

  switch(filter.orderBy) {
    case "HIGHEST_WATER":
      oderBy = {
          waterVolumeSensor: "asc"
      }
      break

    case "LOWEST_WATER":
      oderBy = {
        waterVolumeSensor: "desc"
      }
      break
    
    case "HIGHEST_GRAIN":
      oderBy = {
        grainQuantitySensor: "asc"
      }

    case "LOWEST_GRAIN":
      oderBy = {
        grainQuantitySensor: "asc"
      }
      break
    
    default:
      oderBy = {
        waterVolumeSensor: "asc"
    }

  }

  return await db.sensor.findMany({
    where: inputsNotNulls, 
    orderBy : oderBy,
    select: fieldsNotNulls

  });

}
 
export const sensor: QueryResolvers['sensor'] = async ({ input, fields }) => {
  const inputsNotNulls = buildValidObject(input);
  const fieldsNotNulls = buildValidObject(fields);

  return await db.sensor.findFirst({
    where: inputsNotNulls,
    select: fieldsNotNulls
  })
}

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
