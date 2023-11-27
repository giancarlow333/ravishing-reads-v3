import { useState } from 'react';
import { useMutation } from '@apollo/client';

const BookDetails = () => {
    return (
      <>
        <div className="flex justify-between items-center  flex-col w-5/6 h-full overflow-auto bg-white opacity-90 brightness-100 ">
            <div className = "flex flex-row justify-top items-top w-full h-3/5">
                <div className = "flex flex-col justify-top items-center w-1/4 p-6">
                    <img className = "rounded-sm "src = "./img/avators/alice.jpg" />
                    <button className = "text-sky-100 text-center bg-orange-950 w-28 h-10 m-1 shadow-inner shadow-white">Remove Book</button>
                </div>
                <div className = " w-3/4 flex flex-col justify-top items-top ">
                    <p className = "text-orange-950 text-left text-5xl justify-self-center font-serif antialiased mt-2 " > Alice in Wonderland <span className = " text-blue-600 text-lg font-mono">(2019)</span></p>
            
                    <p className = "text-orange-950 text-left text-2xl justify-self-center font-serif antialiased my-2" >by Carroll</p>
                    <p className = "text-orange-950 text-left text-lg justify-self-center font-serif antialiased">ISBN:</p> 
                    <p className = "text-orange-950 text-left text-lg justify-self-center font-serif antialiased">Pages:</p> 
                    <p className = "text-orange-950 text-left text-lg justify-self-center font-serif antialiased">Reviews: ?</p> 
                    <p className = "text-orange-950 text-left text-lg justify-self-center h-56 font-serif antialiased overflow-y-auto" >
                        Alice's Adventures in Wonderland is a classNameic children's book by Lewis Carroll. The story is about a young girl named Alice who falls down a rabbit hole into a fantasy world. 
                        The world is populated by talking cards and animals who have tea parties and smoke pipes.
                    </p>
                </div>
            </div>
        </div>
      </>
    );
  };
  
  export default BookDetails;
  