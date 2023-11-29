const typeDefs = `
  type Profile {
    _id: ID
    userId: Number
    username: String
    email: String
    password: String`
    // Lists:[
    //   Already_Read: [Book]!,
    //   To_Reads: [Book]!
    //   Wishlist: [Book]!
    // ]
    +`
  }

  type Auth {
    token: ID!
    user: Profile
  }

  type Note {
    noteID: ID
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
    description: String
    page_Count: Int
    img_Link: String
    link: String
    lastAccessed: String
    notes: [Note]!
  }

  type Query {
    profiles: [Profile]!
    profile(userId: ID!): Profile
    books:[Book]!
    book(_Id: ID!): Book
    notes:[Note]!
    book(noteId: ID!): Note
  }

type Mutation {
    addProfile(usernamename: String!, email: String!, password: String!): Profile
    addBook(title: String!, author: String!, ISBN: String!, description: String!, page_Count: Int!, img_Link: String!, link: String!): Book
    addToList(userId: ID!, List: [Book]!, title:String!): Profile
    addNote(_Id: ID!, noteText: String!): Book

    login(email: String!, password: String!): Auth
    
    deleteProfile(userId: ID!): Profile
    removeBook(userId: ID!, _id: ID!): Book
    removeNote(_id: ID!, noteId: ID!): Book
  }
`;

module.exports = typeDefs;
