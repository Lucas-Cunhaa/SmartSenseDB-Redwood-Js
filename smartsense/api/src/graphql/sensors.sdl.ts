export const schema = gql`
  type Sensor {
    id: Int!
    name: String!
    userId: Int!
    waterVolumeSensor: Float
    grainQuantitySensor: Float
  }

  type Query {
    sensors: [Sensor!]!
    sensor(id: Int!): Sensor
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
    createSensor(input: CreateSensorInput!): Sensor!
    updateSensor(id: Int!, input: UpdateSensorInput!): Sensor!
    deleteSensor(id: Int!): Sensor!
  }
`
