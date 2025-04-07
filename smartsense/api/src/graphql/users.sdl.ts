export const schema = gql`

  type User {
    id: Int!
    publicId: String!
    email: String!
    name: String!
    password: String!
    Sensor: [Sensor]!
  }

  type UserWithoutSensors {
    id: Int!
    publicId: String!
    email: String!
    name: String!
    password: String!
  }

  type Query {
    users: [User!]! @skipAuth
    user(publicId: String!): User! @skipAuth
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
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(publicId: String!, input: UpdateUserInput!): User! @skipAuth
    deleteUser(publicId: String): User! @skipAuth
  }
`
