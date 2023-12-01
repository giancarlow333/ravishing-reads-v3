import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Header from '../components/Header';
import RatingBottomSheet from "../components/RatingBottomSheet.jsx";
import React, { useState } from 'react';

import { QUERY_SINGLE_BOOK } from '../utils/queries';

const BookDetails = () => {
    // Use `useParams()` to retrieve value of the route parameter `:bookId`
    const { bookId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_BOOK, {
      // pass URL parameter
      variables: { bookId: bookId },
    });
  
    const book = data?.book || {};
    //review bar 
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    const toggleBottomSheet = () => {
        setIsBottomSheetOpen(!isBottomSheetOpen);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
    <div className="flex flex-row h-screen w-screen overflow-auto">    
        <Header />   
        <div className="flex flex-col justify-center items-center self-center h-screen w-9/12 bg-repeat"  style={{ backgroundImage: `url("/img/starBackground.png")` }}>
            <div className="flex justify-between items-center flex-col w-5/6 h-5/6 overflow-auto bg-[#f8f2e5] bg-opacity-90 rounded-lg">
                <div className="flex flex-row justify-top items-top w-full h-3/5">
                    <div className="flex flex-col justify-top items-center w-1/4 p-6">
                        <img className="rounded-sm w-11/12"  src={book.img_Link} />
                        <button className="text-[#001829] text-center bg-sky-500 w-28 h-10 m-1 shadow-inner shadow-white">Remove</button>
                    </div>
                    <div className="w-3/4 flex flex-col justify-top items-top">
                        <p className="text-[#001828] text-left text-5xl justify-self-center font-serif antialiased mt-2 ">{book.title}<span className="text-blue-600 text-lg font-mono">({book.pub_Date})</span></p>
                        <p className="text-[#001828] text-left text-2xl justify-self-center font-serif antialiased my-2">by {book.author}</p>
                        <p className="text-[#001828] text-left text-lg justify-self-center font-serif antialiased">ISBN: {book.ISBN}</p>
                        <p className="text-[#001828] text-left text-lg justify-self-center font-serif antialiased">Pages: {book.page_Count}</p>
                        <p className="text-[#001828] text-left text-lg justify-self-center font-serif antialiased">Reviews: ???</p>
                        <p className="text-[#001828] text-left text-lg justify-self-center h-56 font-serif antialiased overflow-y-auto">{book.description}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly  items-center w-10/12 h-2/5 mb-6">
                    <h4 className="font-serif text-[#001829]  w-full text-3xl">My Notes</h4>
                    <textarea className="w-full text-[#001829] bg-[#f8f2e5] h-full outline outline-2 outline-text-[#001828]" placeholder='My Notes'></textarea>
                    <div className="flex w-full items-center">
                        <button className="text-[#001829] m-2 text-center bg-sky-500 w-1/6 h-4/6 shadow-inner shadow-white">Save</button>
                        <a onClick={() => window.location.href = '/Mylist'} className="text-[#001829] m-2 text-center bg-sky-500 w-1/6 h-4/6 shadow-inner shadow-white">Close</a>
                     
                    </div>
                </div>
            </div>
        </div>
        <RatingBottomSheet isOpen={isBottomSheetOpen} onClose={toggleBottomSheet} />
    </div>
    );
}
export default BookDetails;