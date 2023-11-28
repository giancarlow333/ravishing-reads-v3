import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($user: String!, $email: String!, $password: String!) {
    addProfile(user: $user, email:$email, password:$password) {
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
`;

export const ADD_BOOK = gql`
  mutation addBook($author: String!, $ISBN: String!, $pub_Date: Date!, $title: String!, $title: String!, 
    $description: String!, $page_Count: Int!, $img_Link: String!, $link: String!) {
    addThought(author: $author, ISBN: $ISBN, pub_Date: $pub_Date, title: $title,
      description: $description, page_Count: $page_Count, img_Link: $img_Link, link: $link) {
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

export const ADD_NOTE = gql`
  mutation addNote($bookId: ID!, $noteText: String!, $rating: Int!) {
    addNote(bookId: $bookId, noteText: $noteText, rating: $rating) {
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