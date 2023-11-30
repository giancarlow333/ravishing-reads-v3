import Header from '../components/Header';
// Import `<Link>` component from React Router for internal hyperlinks
import { Link } from 'react-router-dom';

const Book = ({ books }) => {
    if (!books.length) {
        return <h3>No books on this list!</h3>;
      }
    return (
        <div className="flex flex-row h-screen w-screen overflow-auto">    
            <Header />   
                <div className="flex flex-col justify-top items-center flex-col w-full h-full overflow-auto">

                </div>
        </div>
    ); 
}
export default Book;