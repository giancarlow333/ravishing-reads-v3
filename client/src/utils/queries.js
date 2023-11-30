import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  query getProfiles {
    profiles {
      _id
      user
      email
      password
      Lists {
        Already_Read {
          _id
          title
          author
          ISBN
          publisher
          pub_Date
          description
          page_Count
          img_Link
          link
          last_Accessed
          notes {
            _id
            createdAt
            userId
            noteText
            rating
          }
        }
        To_Reads {
          _id
          title
          author
          ISBN
          publisher
          pub_Date
          description
          page_Count
          img_Link
          link
          last_Accessed
          notes {
            _id
            createdAt
            userId
            noteText
            rating
          }
        }
        Wishlist {
          _id
          title
          author
          ISBN
          publisher
          pub_Date
          description
          page_Count
          img_Link
          link
          last_Accessed
          notes {
            _id
            createdAt
            userId
            noteText
            rating
          }
        }
      }
    }
  }
`;

export const QUERY_SINGLE_PROFILES = gql`
  query getSingleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      profiles {
        _id
        user
        email
        password
        Lists {
          Already_Read {
            _id
            title
            author
            ISBN
            publisher
            pub_Date
            description
            page_Count
            img_Link
            link
            last_Accessed
            notes {
              _id
              createdAt
              userId
              noteText
              rating
            }
          }
          To_Reads {
            _id
            title
            author
            ISBN
            publisher
            pub_Date
            description
            page_Count
            img_Link
            link
            last_Accessed
            notes {
              _id
              createdAt
              userId
              noteText
              rating
            }
          }
          Wishlist {
            _id
            title
            author
            ISBN
            publisher
            pub_Date
            description
            page_Count
            img_Link
            link
            last_Accessed
            notes {
              _id
              createdAt
              userId
              noteText
              rating
            }
          }
        }
      }
    }
  }
`;

export const QUERY_BOOKS = gql`
  query getBooks {
    books {
      _id
      title
      author
      ISBN
      publisher
      pub_Date
      description
      page_Count
      img_Link
      link
      last_Accessed
      notes {
        _id
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
    book(bookId: $bookId) {
      _id
      title
      author
      ISBN
      publisher
      pub_Date
      description
      page_Count
      img_Link
      link
      last_Accessed
      notes {
        _id
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
      _id
      createdAt
      userId
      noteText
      rating
    }
  }
`;

export const QUERY_SINGLE_NOTES = gql`
  query getSingleNote($noteId: ID!) {
    note(noteId: $noteId) {
      _id
      createdAt
      userId
      noteText
      rating
    }
  }
`;

