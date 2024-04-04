import Header from '../components/Header';
// Import `<Link>` component from React Router for internal hyperlinks
import { useQuery } from '@apollo/client';
import BookList from '../components/BookList';
import { QUERY_WISHLIST } from '../utils/queries';

const Wishlist = () => {
    const { loading, data } = useQuery(QUERY_WISHLIST);
    const books = data?.books || [];
    
    if (!books.length) {
        return <h3>No books Yet</h3>;
    }

    return (
        <div className="flex flex-row h-screen w-screen overflow-auto">    
            <Header />   
                <div className="flex flex-col justify-top items-center flex-col w-full h-full overflow-auto bg-repeat"  style={{ backgroundImage: `url("./img/starBackground.png")` }}>
                    <BookList books={books} />
                </div>
        </div>
    ); 
}
export default Wishlist;