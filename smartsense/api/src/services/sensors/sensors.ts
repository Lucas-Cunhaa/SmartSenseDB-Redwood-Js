import type {
  QueryResolvers,
  MutationResolvers,
  SensorRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { buildValidObject } from 'src/utils/utils'

export const sensors: QueryResolvers['sensors'] = async ({ input, filter }) => {
  const inputsNotNulls = buildValidObject(input)

  let orderBy = {}

  switch (filter.orderBy) {
    case 'HIGHEST_WATER':
      orderBy = { waterVolumeSensor: 'desc' }
      break
    case 'LOWEST_WATER':
      orderBy = { waterVolumeSensor: 'asc' }
      break
    case 'HIGHEST_GRAIN':
      orderBy = { grainQuantitySensor: 'desc' }
      break
    case 'LOWEST_GRAIN':
      orderBy = { grainQuantitySensor: 'asc' }
      break
    default:
      orderBy = { waterVolumeSensor: 'asc' }
  }

  const where = {
    ...(input?.name && {
      OR: [{ name: { contains: input.name, mode: 'insensitive' } }],
    }),

    ...(input?.userId && {
      OR: [{ userId: input.userId }],
    }),
    ...(input?.grainQuantitySensor && {
      OR: [
        {
          grainQuantitySensor:
            filter.selectMode === undefined
              ? input.grainQuantitySensor
              : {
                  [filter.selectMode === 'LOWER_THAN' ? 'lte' : 'gte']:
                    input.grainQuantitySensor,
                },
        },
      ],
    }),
    ...(input?.waterVolumeSensor && {
      OR: [
        {
          waterVolumeSensor:
            filter.selectMode === undefined
              ? input.grainQuantitySensor
              : {
                  [filter.selectMode === 'LOWER_THAN' ? 'lte' : 'gte']:
                    input.grainQuantitySensor,
                },
        },
      ],
    }),
  }

  return await db.sensor.findMany({
    where: where,
    orderBy: orderBy,
  })
}

// export const sensor: QueryResolvers['sensor'] = async ({ input, fields }) => {
//   const inputsNotNulls = buildValidObject(input);
//   const fieldsNotNulls = buildValidObject(fields);

//   return await db.sensor.findFirst({
//     where: inputsNotNulls,
//     select: fieldsNotNulls
//   })
// }

export const createSensor: MutationResolvers['createSensor'] = async ({
  input,
}) => {
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
      userId: userId,
    },
  })
}

export const deleteSensor: MutationResolvers['deleteSensor'] = async ({
  id,
  userId,
}) => {
  return db.sensor.delete({
    where: {
      id: id,
      userId: userId,
    },
  })
}

export const Sensor: SensorRelationResolvers = {
  owner: (_obj, { root }) => {
    return db.sensor.findUnique({ where: { id: root?.id } }).owner()
  },
}
