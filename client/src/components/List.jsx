//this component is meant to be used to display all the list user has created 
import '../index.css';
// Import `<Link>` component from React Router for internal hyperlinks
import { Link } from 'react-router-dom';
import BookList from '../components/BookList';
import { useQuery } from '@apollo/client';
import { QUERY_BOOKS } from '../utils/queries';

function List() {
  const { loading, data } = useQuery(QUERY_BOOKS);
  const books = data?.books || [];

  return (
    <div class="flex flex-row h-16 w-11/12 justify-between rounded-lg m-4 overflow-auto bg-sky-500  hover:bg-white outline outline-4 outline-white outline-offset-4 hover:outline-sky-600">
      {loading ? (
            <div>Loading...</div>
          ) : (
            <BookList
              books={books}
            />
          )}
    </div> 
  );
}

export default List;