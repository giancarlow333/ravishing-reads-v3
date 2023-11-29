const typeDefs = `
  type Profile {
    _id: ID
    username: String
    email: String
    password: String
    Already_Read:[Book]!,
    To_Reads: [Book]!
    Wishlist: [Book]!
    ]
  }

  type Note {
    _id: ID
    noteText: String
    createdAt: String
    rating: Int
  }

  
  type Book {
    _id: ID
    author: String
    ISBN: String
    pub_Date: String
    publisher: String
    title: String
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
    book(_id: ID!): Note
  }

type Mutation {
    addProfile(usernamename: String!, email: String!, password: String!): Profile
    addBook(title: String!, author: String!, ISBN: String!, publisher: String!, title: String!, pub_Date: String!, description: String!, page_Count: Int!, img_Link: String!, link: String!): Book
    addToAlreadyRead(_id: ID!, Already_Read: [Book]!, title:String!): Profile
    addNote(_id: ID!, noteText: String!, rating: Int!): Book

    login(email: String!, password: String!): Auth
    
    deleteProfile(_id: ID!): Profile
    removeBook(_id: ID!, _id: ID!): Book
    removeNote(_id: ID!, _id: ID!): Book
  }
`;

module.exports = typeDefs;
