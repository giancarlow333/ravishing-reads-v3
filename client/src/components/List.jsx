//this component is meant to be used to display all the list user has created 
import '../index.css';
// Import `<Link>` component from React Router for internal hyperlinks
import { Link } from 'react-router-dom';

function List() {
  return (
    <>
    <div className="flex flex-row h-16 w-11/12 justify-between rounded-lg m-4 overflow-auto bg-sky-500  hover:bg-white outline outline-4 outline-white outline-offset-4 hover:outline-sky-600">
      <Link
        className="w-full h-full font-extrabold text-black pt-3 px-4 text-3xl antialiased"
        to={`/books/`}
      >
        Reading List
      </Link>
    </div>
    <div className="flex flex-row h-16 w-11/12 justify-between rounded-lg m-4 overflow-auto bg-sky-500  hover:bg-white outline outline-4 outline-white outline-offset-4 hover:outline-sky-600">
      <Link
        className="w-full h-full font-extrabold text-black pt-3 px-4 text-3xl antialiased"
        to={`/wishlist/`}
      >
        Wishlist
      </Link>
    </div> 
    <div className="flex flex-row h-16 w-11/12 justify-between rounded-lg m-4 overflow-auto bg-sky-500  hover:bg-white outline outline-4 outline-white outline-offset-4 hover:outline-sky-600">
        <Link
          className="w-full h-full font-extrabold text-black pt-3 px-4 text-3xl antialiased"
          to={`/books/`}
        >
          Already Read
        </Link>
      </div>
    </>
  );
}

export default List;