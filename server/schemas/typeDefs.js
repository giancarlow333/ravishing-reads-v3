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

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    
    thoughts: [Thought]!
    thought(thoughtId: ID!): Thought
  }

  type Mutation {
    # Set up mutations to handle creating a profile or logging into a profile and return Auth type
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile

    addThought(thoughtText: String!, thoughtAuthor: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
