import type {
  QueryResolvers,
  MutationResolvers,
  SensorRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const sensors: QueryResolvers['sensors'] = ( idUsuario ) => {
  return db.sensor.findMany({
    where: { userId: idUsuario }
  })
}

export const sensor: QueryResolvers['sensor'] = ({ id }) => {
  return db.sensor.findUnique({
    where: { id },
  })
}

export const createSensor: MutationResolvers['createSensor'] = ({ input }) => {
  return db.sensor.create({
    data: input,
  })
}

export const updateSensor: MutationResolvers['updateSensor'] = ({
  id,
  idUsuario,
  input,
}) => {
  return db.sensor.update({
    data: input,
    where: {
      id: id,
      userId: idUsuario
     },
  })
}

export const deleteSensor: MutationResolvers['deleteSensor'] = ({ id, idUsuario }) => {
  return db.sensor.delete({
    where: {
      id: id,
      userId: idUsuario
    },
  })
}

export const Sensor: SensorRelationResolvers = {
  owner: (_obj, { root }) => {
    return db.sensor.findUnique({ where: { id: root?.id } }).owner()
  },
}
