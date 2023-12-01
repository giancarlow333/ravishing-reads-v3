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
    user: Profile!
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
    profile(profileId: ID!): Profile
    books:[Book]!
    wishlist(profileId: ID!): [Book]!
    toReads(profileId: ID!): [Book]!
    alreadyRead: [Book]!
    book(bookId: ID!): Book
    getBookNote(bookId: ID!, profileId: ID!): Note
  }

type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth
    addBook(title: String!, author: String!, ISBN: String!, publisher: String!, pub_Date: String!, description: String!, page_Count: Int!, img_Link: String!, link: String!): Book
    addToAlreadyRead(profileId: ID!, bookID: ID!): Profile
    addToWishlist(profileId: ID!, bookID: ID!): Profile
    addTo_ToReads(profileId: ID!, bookID: ID!): Profile
    addNote(bookId: ID!, noteText: String!, rating: Int!, user: ID!): Book

    login(username: String!, password: String!): Auth
    
    deleteProfile(profileId: ID!): Profile
    removeBook(bookId: ID!): Book
    removeNote(noteId: ID!): Book
  }
`;

module.exports = typeDefs;
