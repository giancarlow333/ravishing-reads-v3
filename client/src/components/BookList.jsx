// Import `<Link>` component from React Router for internal hyperlinks
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
  return (
    <div className="flex flex-col justify-center items-center self-center h-screen w-9/12 bg-[#001829]">
      {books &&
        books.map((book) => (
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/books/${book._id}`}
            >
              <div className="flex justify-between items-center flex-col w-5/6 h-5/6 overflow-auto bg-[#f8f2e5] rounded-lg">
                <div className="flex flex-row justify-top items-top w-full h-3/5">
                  <div className="flex flex-col justify-top items-center w-1/4 p-6">
                    <img className="rounded-sm" src={book.img_Link} />
                    <button className="text-[#001829] text-center bg-sky-500 w-28 h-10 m-1 shadow-inner shadow-white">Remove</button>
                  </div>
                  <div className="w-3/4 flex flex-col justify-top items-top">
                    <p className="text-orange-950 text-left text-5xl justify-self-center font-serif antialiased mt-2">{book.title}<span className="text-blue-600 text-lg font-mono">({book.pub_Date})</span></p>
                    <p className="text-orange-950 text-left text-2xl justify-self-center font-serif antialiased my-2">by {book.author}</p>

                  </div>
                </div>
              </div>
            </Link>
        ))}
    </div>
  );
};

export default BookList;
