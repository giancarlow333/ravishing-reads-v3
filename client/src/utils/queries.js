import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query getProfiles {
    profiles {
      userId
      user
      email
      password
      Lists{
        Already_Read {
          bookId
          title
          author
          ISBN
          pub_Date
          description
          page_Count
          img_Link
          link
          last_Accessed
          notes {
            noteId
            createdAt
            userId
            noteText
            rating
          }
        }
        To_Reads {
          bookId
          title
          author
          ISBN
          pub_Date
          description
          page_Count
          img_Link
          link
          last_Accessed
          notes {
            noteId
            createdAt
            userId
            noteText
            rating
        }
        Wishlist {
          bookId
          title
          author
          ISBN
          pub_Date
          description
          page_Count
          img_Link
          link
          last_Accessed
          notes {
            noteId
            createdAt
            userId
            noteText
            rating
        }
      }
    }
  }
`;

export const QUERY_SINGLE_PROFILES = gql`
  query getSingleProfile($userId: ID!) {
    profile (userId: $userId) {
      profiles {
        userId
        user
        email
        password
        Lists{
          Already_Read {
            bookId
            title
            author
            ISBN
            pub_Date
            description
            page_Count
            img_Link
            link
            last_Accessed
            notes {
              noteId
              createdAt
              userId
              noteText
              rating
            }
          }
          To_Reads {
            bookId
            title
            author
            ISBN
            pub_Date
            description
            page_Count
            img_Link
            link
            last_Accessed
            notes {
              noteId
              createdAt
              userId
              noteText
              rating
          }
          Wishlist {
            bookId
            title
            author
            ISBN
            pub_Date
            description
            page_Count
            img_Link
            link
            last_Accessed
            notes {
              noteId
              createdAt
              userId
              noteText
              rating
          }
        }
      }
    }
  `;

export const QUERY_BOOKS = gql`
  query getBooks {
    books {
        bookId
        title
        author
        ISBN
        pub_Date
        description
        page_Count
        img_Link
        link
        last_Accessed
        notes {
          noteId
          createdAt
          userId
          noteText
          rating
        }
    }
  }
`;

export const QUERY_SINGLE_BOOK = gql`
query getSingleBook($bookId: ID!) {
  books (bookId: $bookId) {
        bookId
        title
        author
        ISBN
        pub_Date
        description
        page_Count
        img_Link
        link
        last_Accessed
        notes {
          noteId
          createdAt
          userId
          noteText
          rating
        }
    }
  }
`;

export const QUERY_NOTES = gql`
  query getNotes {
      notes {
        noteId
        createdAt
        userId
        noteText
        rating
       }
  }
`;

export const QUERY_SINGLE_NOTES = gql`
query getSingleNote($noteId: ID!) {
  note (noteId: $noteId){
        noteId
        createdAt
        userId
        noteText
        rating
       }
  }
`;