const typeDefs = `
  type Profile {
    _id: ID
    userId: Number
    username: String
    email: String
    # There is now a field to store the user's password
    password: String
    Already_Read: [Book]!
    To_Reads: [Book]!
    Wishlist: [Book]!
  }

  type Note {
    _id: ID
    noteID: ID
    noteText: String
    createdAt: String
    rating: Number
  }

  type Book {
    _id: ID
    title: Strong
    author: String
    ISBN: String
    pub_Date: String
    title: String
    description: String
    page_Count: Number
    img_Link: String
    link: String
    notes: [Note]!
    lastAccessed: String
  }


  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    # Set up mutations to handle creating a profile or logging into a profile and return Auth type
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
