import { gql } from '@apollo/client';


export const ADD_PROFILE = gql`
  mutation addProfile($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password:$password) {
      token
      profileId
      username
      email
      password
      Lists{
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
          lastAccessed
          notes {
            _id
            createdAt
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
          lastAccessed
          notes {
            _id
            createdAt
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
          lastAccessed
          notes {
            _id
            createdAt
            noteText
            rating
        }
      }
    }
    }
  }
`;
export const LOGIN_PROFILE = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password:$password) {
        token
        profile {
        _id
        username
        email
        password
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
            lastAccessed
            notes {
                _id
                createdAt
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
            lastAccessed
            notes {
                _id
                createdAt
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
            lastAccessed
            notes {
                _id
                createdAt
                noteText
                rating
            }
        }
      }
    }
  }
`;
 export const ADD_BOOK = gql`
   mutation addBook($author: String!, $ISBN: String!, $pub_Date: String!, $title: String!, $title: String!, 
     $description: String!, $publisher: String!, $page_Count: Int!, $img_Link: String!, $link: String!) {
     addBook(author: $author, ISBN: $ISBN, pub_Date: $pub_Date, title: $title,
       description: $description, publisher: $publisher, page_Count: $page_Count, img_Link: $img_Link, link: $link) {
         _id
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
           _id
           createdAt
           userId
           noteText
           rating
         }
     }
   }
 `;

export const ADD_NOTE = gql`
  mutation addNote($_id: ID!, $noteText: String!, $rating: Int!) {
    addNote(_id: $_id, noteText: $noteText, rating: $rating) {
      _id
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
        _id
        createdAt
        userId
        noteText
        rating
      }
    }
  }
`;

export const ADD_TO_LIST = gql`
mutation addToAlreadyRead($_id: ID!, $Lists: String!, $title: String!,
  $Already_Read: [Book]!, $To_Reads: [Book]!, $Wishlist: [Book]!){
  addToAlreadyRead(_id: $_id, Lists: $Lists, title:$title, Already_Read: $Already_Read,
    To_Reads: $To_Reads, Wishlist: $Wishlist){
    username
    Lists
    title
  }
}
`;



export const DELETE_PROFILE = gql`
mutation deleteProfile($_id: ID!){
  deleteProfile(_id: $_id){
    user
    email
  }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($_id: ID!, $_id: ID!){
  removeBook(_id: $_id, _id: $_id){
    user
    email
  }
}
`;

export const REMOVE_NOTE = gql`
mutation removeNote($_id: ID!, $_id: ID!){
  removeNote(_id: $_id, _id: $_id){
    title
    _id
    noteText
  }
}
`;
