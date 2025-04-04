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
    users: [User!]! @requireAuth
    user(publicId: String!): User! @requireAuth
    getUserByEmail(email: String!): User! @requireAuth
  }

  input CreateUserInput {
    email: String!
    name: String!
    password: String!
  }

  input UpdateUserInput {
    publicId: String!
    email: String
    name: String
    password: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(input: UpdateUserInput!): User! @requireAuth
    deleteUser(publicId: String): User! @requireAuth
  }
`
