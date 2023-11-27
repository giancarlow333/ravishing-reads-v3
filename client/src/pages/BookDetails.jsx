
import Header from '../components/Header';

function BookDetails() {
    return (
    <div className="flex flex-row h-screen w-screen overflow-auto">    
        <Header />   
        <div className="flex flex-col justify-center items-center self-center h-screen w-9/12 bg-[#001829]">
            <div className="flex justify-between items-center flex-col w-5/6 h-5/6 overflow-auto bg-[#f8f2e5] rounded-lg">
                <div className="flex flex-row justify-top items-top w-full h-3/5">
                    <div className="flex flex-col justify-top items-center w-1/4 p-6">
                        <img className="rounded-sm" src='./img/avators/alice.jpg' alt="Alice in Wonderland" />
                        <button className="text-[#001829] text-center bg-sky-500 w-28 h-10 m-1 shadow-inner shadow-white">Remove</button>
                    </div>
                    <div className="w-3/4 flex flex-col justify-top items-top">
                        <p className="text-orange-950 text-left text-5xl justify-self-center font-serif antialiased mt-2">Alice in Wonderland <span className="text-blue-600 text-lg font-mono">(2019)</span></p>
                        <p className="text-orange-950 text-left text-2xl justify-self-center font-serif antialiased my-2">by Carroll</p>
                        <p className="text-orange-950 text-left text-lg justify-self-center font-serif antialiased">ISBN:</p>
                        <p className="text-orange-950 text-left text-lg justify-self-center font-serif antialiased">Pages:</p>
                        <p className="text-orange-950 text-left text-lg justify-self-center font-serif antialiased">Reviews: ?</p>
                        <p className="text-orange-950 text-left text-lg justify-self-center h-56 font-serif antialiased overflow-y-auto">Alices Adventures in Wonderland is a classic childrens book by Lewis Carroll. The story is about a young girl named Alice who falls down a rabbit hole into a fantasy world. The world is populated by talking cards and animals who have tea parties and smoke pipes. </p>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly bg-[#f8f2e5] items-center w-10/12 h-2/5 mb-6">
                    <h4 className="font-serif text-[#001829] bg-[#f8f2e5] w-full text-2xl">My Notes</h4>
                    <textarea className="w-full text-[#001829] bg-[#f8f2e5] h-full outline outline-4 outline-sky-600">My Notes</textarea>
                    <div className="flex w-full items-center">
                        <button className="text-[#001829] m-2 text-center bg-sky-500 w-28 h-15 shadow-inner shadow-white">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default BookDetails;