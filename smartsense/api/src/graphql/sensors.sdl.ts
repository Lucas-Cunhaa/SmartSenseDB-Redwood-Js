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
    sensors(filter: filterInput): [Sensor!]! @skipAuth
    sensor(userId: Int!, id: Int!): Sensor @skipAuth
  }

  input FilterInput {
    waterVolumeSensor: Float
    grainQuantitySensor: Float
  }

  input CreateSensorInput {
    name: String!
    userId: Int!
    waterVolumeSensor: Float
    grainQuantitySensor: Float
  }

  input UpdateSensorInput {
    name: String
    waterVolumeSensor: Float
    grainQuantitySensor: Float
  }

  type Mutation {
    createSensor(input: CreateSensorInput!): Sensor! @skipAuth
    updateSensor(userId: Int!, id: Int!, input: UpdateSensorInput!): Sensor! @skipAuth
    deleteSensor(userId: Int!, id: Int!): Sensor! @skipAuth
  }
`
