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
    sensors: [Sensor!]! @skipAuth
    sensor(id: Int!): Sensor @skipAuth
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
    createSensor(input: CreateSensorInput!): Sensor! @skipAuth
    updateSensor(id: Int!, idUsuario: Int!, input: UpdateSensorInput!): Sensor! @skipAuth
    deleteSensor(id: Int!, idUsuario: Int!): Sensor! @skipAuth
  }
`
