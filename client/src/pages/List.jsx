

const List = () => {
  
  return (
    <section>
    <div class = "flex flex-col justify-top items-center  flex-col w-full h-full overflow-auto">
      <div class = "flex flex-row bg-white  bg-opacity-80 w-10/12 h-64 shadow-md shadow-slate-900 rounded-md shrink mb-2">
        <div class = "flex flex-col justify-center items-center w-2/12 py-2">
            <img class = "w-8/12  rounded-sm "src = ""/>
            <button id="addToListBtn" class="text-sky-100 text-center bg-orange-950 w-28 h-5 m-1 shadow-inner shadow-white">Add to List</button>
            <select id="listSelect" class="hidden">
            <option value="readingList">Reading List</option>
            <option value="wishlist">Wishlist</option>
            <option value="favorites">Favorites</option>
            </select>
        </div>
        <div class = "flex flex-col w-10/12 mr-8">
            <p class = "text-orange-950 text-left text-2xl justify-self-center font-bold antialiased mt-2 " >FAKE TITLE<span class =" text-blue-600 text-sm">05/05/1989</span>
            </p>

            <p class = "text-orange-950 text-left text-lg justify-self-center font-bold antialiased my-2" >Autho Name</p>
            <p class = "text-orange-950 text-left text-lg justify-self-center font-serif antialiased"  >ISBN</p> 
            <p class = "text-orange-950 text-left text-lg justify-self-center  font-bold antialiased " >CONTENT</p>
            <p class = "text-orange-950 text-left text-lg justify-self-center font-bold antialiased"  >DESCRIPTION</p>  
        </div>
      </div>
    </div>
    </section>
  );
};

export default List;
