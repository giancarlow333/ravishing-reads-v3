import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      userId
      user
      email
      password
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

export const QUERY_SINGLE_PROFILES = gql`
  query getSingleProfile($userId: ID!) {
    thought(userId: $userId) {
    profiles {
      userId
      user
      email
      password
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
