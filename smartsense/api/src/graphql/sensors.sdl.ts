export const schema = gql`
  type Scalar {

  }
  type Sensor @atLeastOne(fields: ["waterVolumeSensor", "grainQuantitySensor"]){
    id: Int!
    name: String!
    owner: UserWithoutSensors!
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
    userPublicId: String!
    waterVolumeSensor: Float
    grainQuantitySensor: Float
  }

  input UpdateSensorInput @atLeastOne(fields: ["name", "waterVolumeSensor", "grainQuantitySensor"]){
    name: String
    userPublicId: String!
    waterVolumeSensor: Float
    grainQuantitySensor: Float
  }

  type Mutation {
    createSensor(input: CreateSensorInput!): Sensor!
    updateSensor(id: Int!, input: UpdateSensorInput!): Sensor!
    deleteSensor(id: Int!): Sensor!
  }
`
