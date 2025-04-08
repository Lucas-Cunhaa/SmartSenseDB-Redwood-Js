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
    sensors(userId: Int, filter: filterInput, fields: fieldsInput): [Sensor!]! @skipAuth
    sensor(userId: Int!, id: Int!, fields: fieldsInput): Sensor @skipAuth
  }

  enum SensorOderBy {
    HIGHEST_WATER
    LOWEST_WATER
    HIGHEST_GRAIN
    LOWEST_GRAIN
  }

  input fieldsInput {
    name: String
    waterVolumeSensor: Float
    grainQuantitySensor: Float
  }

  input filterInput {
    orderBy: SensorOderBy
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
