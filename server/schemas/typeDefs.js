const typeDefs = `
  type Profile {
    _id: ID
    username: String
    email: String
    password: String
    Already_Read:[Book]!,
    To_Reads: [Book]!
    Wishlist: [Book]!
  }

  type Note {
    _id: ID
    noteText: String
    createdAt: String
    rating: Int
    user: Profile!
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
    profile(profileId: ID!): Profile
    books:[Book]!
    book(bookId: ID!): Book
    notes:[Note]!
    getBookNote(noteId: ID!): Note
  }

type Mutation {
    addProfile(usernamename: String!, email: String!, password: String!): Profile
    addBook(title: String!, author: String!, ISBN: String!, publisher: String!, pub_Date: String!, description: String!, page_Count: Int!, img_Link: String!, link: String!): Book
    addToAlreadyRead(bookId: ID!, title:String!): Profile
    addToWishlist(bookId: ID!, title:String!): Profile
    addTo_ToReads(bookId: ID!, title:String!): Profile
    addNote(noteId: ID!, noteText: String!, rating: Int!, user: Profile): Book

    # login(email: String!, password: String!): Auth
    
    deleteProfile(profileId: ID!): Profile
    removeBook(bookId: ID!): Book
    removeNote(noteId: ID!): Book
  }
`;

module.exports = typeDefs;
