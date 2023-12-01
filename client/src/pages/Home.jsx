import Header from '../components/Header';
import SearchedBook from '../components/SearchedBook.jsx';

function Home() {
    return (
    <div className="flex flex-row h-screen w-screen ">    
           <Header />
           <div className="flex flex-col justify-center items-center self-center h-full w-9/12 bg-repeat" style={{ backgroundImage: `url("./img/starBackground.png")` }}>
            <div className="flex justify-center items-center flex-col w-5/6 h-1/4">
                <form className="w-10/12 h-14 flex flex-row justify-top items-center text-sky-800 border-b-4 border-sky-600 rounded-full bg-white bg-opacity-80 font-serif" autoComplete="off">
                    <input className="w-full h-full pl-6 bg-transparent placeholder:text-sky-800 placeholder:italic text-3xl rounded-full" type="text" name="search" placeholder="Find Me A Book..." />
                    <button type="submit" className="self-end flex-none h-full rounded-full mr-3">
                        <img className="w-10 rounded-full" src='./img/searchIcon3.png' alt="Search" />
                    </button>
                </form>
            </div>

            <div className="flex flex-col justify-top items-center flex-col w-full h-full overflow-auto">
                <SearchedBook />
            </div>
        </div>
    </div>
    );
}
export default Home;