const typeDefs = `
  type Profile {
    _id: profileId
    username: String
    email: String
    password: String
    Already_Read:[Book]!,
    To_Reads: [Book]!
    Wishlist: [Book]!
  }

  type Note {
    _id: noteId
    noteText: String
    createdAt: String
    rating: Int
  }

  
  type Book {
    _id: bookId
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
    profile(_id: profileId!): Profile
    books:[Book]!
    book(_id: bookId!): Book
    notes:[Note]!
    getBookNote(_id: noteId!): Note
  }

type Mutation {
    addProfile(usernamename: String!, email: String!, password: String!): Profile
    addBook(title: String!, author: String!, ISBN: String!, publisher: String!, pub_Date: String!, description: String!, page_Count: Int!, img_Link: String!, link: String!): Book
    addToAlreadyRead(_id: bookId!, title:String!): Profile
    addNote(_id: noteId!, noteText: String!, rating: Int!): Book

    # login(email: String!, password: String!): Auth
    
    deleteProfile(_id: profileId!): Profile
    removeBook(_id: bookId!): Book
    removeNote(_id: bookId!): Book
  }
`;

module.exports = typeDefs;
