
const BookDetails = () => {
    return (
      <>
        <div class = "flex justify-between items-center  flex-col w-5/6 h-full overflow-auto bg-white opacity-90 brightness-100 ">
            <div class = "flex flex-row justify-top items-top w-full h-3/5">
                <div class = "flex flex-col justify-top items-center w-1/4 p-6">
                    <img class = "rounded-sm "src = "./public/img/avators/alice.jpg" />
                    <button class = "text-sky-100 text-center bg-orange-950 w-28 h-10 m-1 shadow-inner shadow-white">Remove Book</button>
                </div>
                <div class = " w-3/4 flex flex-col justify-top items-top ">
                    <p class = "text-orange-950 text-left text-5xl justify-self-center font-serif antialiased mt-2 " > Alice in Wonderland <span class = " text-blue-600 text-lg font-mono">(2019)</span></p>
            
                    <p class = "text-orange-950 text-left text-2xl justify-self-center font-serif antialiased my-2" >by Carroll</p>
                    <p class = "text-orange-950 text-left text-lg justify-self-center font-serif antialiased">ISBN:</p> 
                    <p class = "text-orange-950 text-left text-lg justify-self-center font-serif antialiased">Pages:</p> 
                    <p class = "text-orange-950 text-left text-lg justify-self-center font-serif antialiased">Reviews: ?</p> 
                    <p class = "text-orange-950 text-left text-lg justify-self-center h-56 font-serif antialiased overflow-y-auto" >
                        Alice's Adventures in Wonderland is a classic children's book by Lewis Carroll. The story is about a young girl named Alice who falls down a rabbit hole into a fantasy world. 
                        The world is populated by talking cards and animals who have tea parties and smoke pipes.
                    </p>
                </div>
            </div>
        </div>
      </>
    );
  };
  
  export default BookDetails;
  