export const schema = gql`
  type User {
    id: Int!
    publicId: String!
    email: String!
    name: String!
    password: String!
    Sensor: [Sensor]!
  }

  type Query {
    users: [User!]! 
    user(publicId: String!): User 
  }

  input CreateUserInput {
    publicId: String!
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
    createUser(input: CreateUserInput!): User!
    updateUser(input: UpdateUserInput!): User!
    deleteUser(publicId: String): User!
  }
`
