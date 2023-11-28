
import Header from '../components/Header';

function Mylist() {
    return (
    <div className="flex flex-row h-screen w-screen overflow-auto">    
           <Header />
        <div className="flex flex-col justify-center items-center self-center h-full w-9/12 bg-[#001829]">
            <div className="flex justify-center items-center flex-col w-5/6 h-1/4">
                <form className="w-10/12 h-14 flex flex-row justify-top items-center text-sky-800 border-b-4 border-sky-600 rounded-full bg-white bg-opacity-80 font-serif" autoComplete="off">
                    <input className="w-full h-full pl-6 bg-transparent placeholder:text-sky-800 placeholder:italic text-3xl rounded-full" type="text" name="search" placeholder="Find Me A Book..." />
                    <button type="submit" className="self-end flex-none h-full rounded-full mr-3">
                        <img className="w-10 rounded-full" src='./img/searchIcon3.png' alt="Search" />
                    </button>
                </form>
            </div>

            <div className="flex flex-col justify-top items-center flex-col w-full h-full overflow-auto">
                <div className="flex flex-row bg-white bg-opacity-80 w-10/12 h-64 shadow-md shadow-slate-900 rounded-md shrink mb-2">
                    <div className="flex flex-col justify-center items-center w-2/12 py-2">
                        <img className="w-8/12 rounded-sm" src='./img/avators/alice.jpg' alt="Alice in Wonderland" />
                        <a href="/Bookdetails" id="addToListBtn" className="text-sky-100 text-center bg-sky-600 w-28 h-8 m-1 shadow-inner shadow-white">View</a>
                   
                    </div>
                    <div className="flex flex-col w-10/12 mr-8">
                        <p className="text-orange-950 text-left text-2xl justify-self-center font-bold antialiased mt-2">Alice in Wonderland <span className="text-blue-600 text-sm">(2019)</span></p>
                        <p className="text-orange-950 text-left text-lg justify-self-center font-bold antialiased my-2">by Carroll</p>
                        <p className="text-orange-950 text-left text-lg justify-self-center font-serif antialiased">ISBN:</p>
                        <p className="text-orange-950 text-left text-lg justify-self-center font-bold antialiased">The story tells of a young girl who falls down a rabbit hole into a hallucinogenic world populated by talking packs of cards, and animals who look at pocket watches, smoke pipes and have tea parties.</p>
                        <p className="text-orange-950 text-left text-lg justify-self-center font-bold antialiased">Reviews: ?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Mylist;