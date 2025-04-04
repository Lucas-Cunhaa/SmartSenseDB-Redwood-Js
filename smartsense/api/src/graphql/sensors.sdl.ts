export const schema = gql`
  type Sensor {
    id: Int!
    name: String!
    owner: User!
    userId: Int!
    waterVolumeSensor: Float
    grainQuantitySensor: Float
  }

  type Query {
    sensors: [Sensor!]! @requireAuth
    sensor(id: Int!): Sensor @requireAuth
  }

  input CreateSensorInput {
    name: String!
    userId: Int!
    waterVolumeSensor: Float
    grainQuantitySensor: Float
  }

  input UpdateSensorInput {
    name: String
    userId: Int
    waterVolumeSensor: Float
    grainQuantitySensor: Float
  }

  type Mutation {
    createSensor(input: CreateSensorInput!): Sensor! @requireAuth
    updateSensor(id: Int!, idUsuario: Int!, input: UpdateSensorInput!): Sensor! @requireAuth
    deleteSensor(id: Int!, idUsuario: Int!): Sensor! @requireAuth
  }
`
