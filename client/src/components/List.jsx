//this compnent is meant to be used to display all the list user has created 
import '../index.css';

function List() {

    return (
        <div class="flex flex-row h-16 w-11/12 justify-between rounded-lg m-4 overflow-auto bg-sky-500  hover:bg-white outline outline-4 outline-white outline-offset-4 hover:outline-sky-600">
            <p onClick={() => window.location.href = '/Book'}class="w-full h-full font-extrabold text-black pt-3 px-4 text-3xl antialiased">Collection</p>
            <button class="w-full h-full font-extrabold text-black  px-4 text-3xl antialiased text-right">Remove</button>
        </div> 
    );
}

export default List;

