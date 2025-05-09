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
    sensors(input: inputSensors, filter: filterInput): [Sensor]! @skipAuth
    sensor(input: inputSensorsWithId): Sensor @skipAuth
  }

  enum SensorOderBy {
    HIGHEST_WATER
    LOWEST_WATER
    HIGHEST_GRAIN
    LOWEST_GRAIN
  }

  enum SensorMode {
    LOWER_THAN
    HIGHER_THAN
  }

  input inputSensors {
    userId: Int, 
    name: String
    waterVolumeSensor: Float
    grainQuantitySensor: Float
  }


  input inputSensorsWithId {
    userId: Int!
    sensorId: Int!
    name: String
    waterVolumeSensor: Float
    grainQuantitySensor: Float
  }
  
  input filterInput {
    orderBy: SensorOderBy
    selectMode: SensorMode
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
