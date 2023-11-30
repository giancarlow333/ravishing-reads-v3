const typeDefs = `
  type Profile {
    _id: ID
    username: String
    email: String
    password: String
    Already_Read:[Book]!
    To_Reads: [Book]!
    Wishlist: [Book]!
  }

  type Auth {
    token: ID
    profile: Profile
  }

  type Note {
    _id: ID
    noteText: String
    createdAt: String
    rating: Int
  }
  
  type Book {
    _id: ID
    title: String
    author: String
    ISBN: String
    pub_Date: String
    publisher: String
    description: String
    page_Count: Int
    img_Link: String
    link: String
    lastAccessed: String
    notes: [Note]!
  }

  type Query {
    profiles: [Profile]!
    profile(_id: ID!): Profile
    books:[Book]!
    book(_id: ID!): Book
    notes:[Note]!
    note(_id: ID!): Note
  }

type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth
    addBook(title: String!, author: String!, ISBN: String!, publisher: String!, pub_Date: String!, description: String!, page_Count: Int!, img_Link: String!, link: String!): Book
    `
    //addToAlreadyRead(_id: ID!, book: Book!): Profile
    +`
    addNote(_id: ID!, noteText: String!, rating: Int!): Book
    removeNote(_id: ID!): Note

    login(username: String!, password: String!): Auth
    
    deleteProfile(_id: ID!): Profile
    removeBook(_id: ID!): Book
  }
`;

module.exports = typeDefs;
