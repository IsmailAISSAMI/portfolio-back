const UserType = `
  type User {
    id : ID
    firstName: String
    lastName: String
    email: String
    password: String
    phone: String
    website: String
    github: String
    linkedin: String
    summary: String
    skills: [String]
    projects: [Project]
    education: [Education]
    experience: [Experience]
  }

  input RegisterInput {
    firstName: String
    lastName: String
    email: String
    password: String
  }

  input LoginInput {
    password: String
    email: String
  }

  type Message {
    message: String
    success: Boolean
  }

  type Query {
    getUser(id:ID):User
    login(input: LoginInput) : Message
  }
  
  type Mutation {
    register(input: RegisterInput) : User
  }
  `;

export default UserType;
