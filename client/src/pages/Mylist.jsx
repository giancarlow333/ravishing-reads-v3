import List from '../components/List.jsx';
import Header from '../components/Header';

function Mylist() {
    return (
    <div className="flex flex-row h-screen w-screen overflow-auto">    
           <Header />
           <div className="flex flex-col justify-center items-center self-center h-full w-9/12 bg-repeat"   style={{ backgroundImage: `url("./img/starBackground.png")` }}>
            <div className="flex justify-center items-center flex-col w-5/6 h-1/4">
            <p className="w-8/12 h-14 text-center text-[#001828] rounded-lg border-b-4 border-sky-600 text-5xl bg-white bg-opacity-90 font-serif" autoComplete="off">My Book Collections</p>
            </div>

            <div className="flex flex-col justify-top items-center flex-col  w-full h-full overflow-auto">
               <List />
            </div>
        </div>
    </div>
    );
}
export default Mylist;