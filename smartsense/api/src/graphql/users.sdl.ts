export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String!
    password: String!
    Sensor: [Sensor]!
  }

  type UserWithoutSensors {
    id: Int!
    email: String!
    name: String!
    password: String!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User! @skipAuth
    getUserByEmail(email: String!): User! @skipAuth
  }

  input CreateUserInput {
    email: String!
    name: String!
    password: String!
  }

  input UpdateUserInput {
    email: String
    name: String
    password: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): UserWithoutSensors! @skipAuth
    updateUser(id: Int!, input : UpdateUserInput!): UserWithoutSensors! @skipAuth
    deleteUser(id: Int!): UserWithoutSensors! @skipAuth
  }
`
