//this compnent is meant to be used to display the set of books generated when book search is initiated 
import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import Auth from '../utils/auth';
import BookQuery from '../utils/API'
import { ADD_TO_ALREADY_READ, ADD_TO_TO_READS, ADD_TO_WISHLIST } from '../utils/mutations';

function SearchedBooks() {
    console.log(Auth.getProfile().data._id);
    const initialCollections = [
        { value: 'readingList', text: 'Reading List' },
        { value: 'wishlist', text: 'Wishlist' },
        { value: 'alreadyRead', text: 'Already Read' }
    ];

    const [collections, setCollections] = useState(initialCollections);

    const handleAddCollection = (newCollectionName) => {
        // Add the new collection to the state
        const newCollection = { value: newCollectionName.toLowerCase(), text: newCollectionName };
        setCollections([...collections, newCollection]);
    };

    // See https://stackoverflow.com/questions/71179586/can-i-make-multiple-usemutation-in-a-components
    const [addToAlreadyRead, { data, loading, error }] = useMutation(ADD_TO_ALREADY_READ);
    const [addToReadingList, { data: rlData, loading: rlLoading, error: rlError }] = useMutation(ADD_TO_TO_READS);
    const [addToWishlist, { data: wlData, loading: wlLoading, error: wlError }] = useMutation(ADD_TO_WISHLIST);
    // Function to handle 'Create New List' option
    const handleSelectChange = (event) => {
        // Make the button visible
        document.getElementById("listButton").classList.remove("invisible");
    };
    const handleButtonClick = (event) => {
        let selected_value = document.getElementById("listSelect").value;
        console.log("selected: ", selected_value);

        if (selected_value === 'createNew') {
            // Trigger modal or input field to add new collection
            // For simplicity, let's assume a prompt is used
            const newListName = prompt("Enter new list name");
            if (newListName) {
                handleAddCollection(newListName);
            }
        }
        // Handle other changes if necessary
        else if (selected_value === 'alreadyRead') {
            console.log("Already Read is selected");
            addToAlreadyRead({ variables: {
                profileId: Auth.getProfile().data._id, bookId: "656836c433703d499a5a6088"
            }});
            console.log ("Added to Already Read!"); 
        }
        else if (selected_value === 'readingList') {
            console.log("Reading List is selected");
            addToReadingList({ variables: {
                profileId: Auth.getProfile().data._id, bookId: "656836c433703d499a5a6078"
            }});
            console.log ("Added to Reading List!"); 
        }
        else if (selected_value === 'wishlist') {
            console.log("Wishlist is selected");
            addToWishlist({ variables: {
                profileId: Auth.getProfile().data._id, bookId: "6608da54f990723f5e23d04c"
            }});
            console.log ("Added to Wishlist!"); 
        }
        else { console.log ("ELSE!"); }
    };
    return ( // Currently uses placeholder data
        <div className="flex flex-row bg-white bg-opacity-90 w-10/12 h-3/5 shadow-md shadow-slate-900 rounded-md shrink ">
            <div className="flex flex-col justify-center items-center w-3/12">
                <img className="w-8/12 rounded-sm" src='/avators/alice.jpg' alt="Alice in Wonderland" />
              
                <select id="listSelect" onChange={handleSelectChange} className=" text-sky-100 text-center text-lg bg-sky-600 w-4/6 h-1/6 m-1 shadow-inner shadow-white font-serif">
                    <option value="default">Please select...</option>
                    {collections.map((collection) => (
                        <option key={collection.value} value={collection.value}>{collection.text}</option>
                    ))}
                    <option value="createNew">Create New List</option>
                </select>
                <button id="listButton" onClick={handleButtonClick} className="invisible text-sky-100 text-center text-lg bg-sky-600 w-4/6 h-1/6 m-1 shadow-inner shadow-white font-serif">Add book!</button>
            </div>
            <div className="flex flex-col w-9/12 h-11/12 mr-8">
                <p className="text-[#001828] text-left text-2xl justify-self-center font-bold antialiased mt-2">Alice in Wonderland <span className="text-blue-600 text-sm">(2019)</span></p>
                <p className="text-[#001828] text-left text-lg justify-self-center font-bold antialiased my-2">by Carroll</p>
                <p className="text-[#001828] text-left text-lg justify-self-center font-serif antialiased">ISBN:</p>
                <p className="text-[#001828] text-left text-lg justify-self-center font-bold antialiased overflow-auto">The story tells of a young girl who falls down a rabbit hole into a hallucinogenic world populated by talking packs of cards, and animals who look at pocket watches, smoke pipes and have tea parties.</p>
            </div>
        </div>
    );
    
}

export default SearchedBooks;
