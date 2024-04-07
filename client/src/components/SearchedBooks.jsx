//this compnent is meant to be used to display the set of books generated when book search is initiated 
import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import Auth from '../utils/auth';
import { ADD_TO_ALREADY_READ } from '../utils/mutations';

function SearchedBook() {
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

    const [addToAlreadyRead, { data, loading, error }] = useMutation(ADD_TO_ALREADY_READ);
    // Example function to handle 'Create New List' option
    const handleSelectChange = (event) => {
        if (event.target.value === 'createNew') {
            // Trigger modal or input field to add new collection
            // For simplicity, let's assume a prompt is used
            const newListName = prompt("Enter new list name");
            if (newListName) {
                handleAddCollection(newListName);
            }
        }
        // Handle other changes if necessary
        else if (event.target.value === 'alreadyRead') {
            console.log("Already Read is selected");
            addToAlreadyRead({ variables: {
                profileId: Auth.getProfile().data._id, bookId: "656836c433703d499a5a6078"
            }});
            console.log ("Already Read!"); 
        }
        else { console.log ("ELSE!"); }
        let listSelectValue = event.target.value;
        console.log("listSelectValue: ", listSelectValue);
    };
    const handleButtonClick = (event) => {
        handleSelectChange(event);
        console.log("Button clicked");
    };
    return ( // Currently uses placeholder data
        <div className="flex flex-row bg-white bg-opacity-90 w-10/12 h-3/5 shadow-md shadow-slate-900 rounded-md shrink ">
            <div className="flex flex-col justify-center items-center w-3/12">
                <img className="w-8/12 rounded-sm" src='/avators/alice.jpg' alt="Alice in Wonderland" />
              
                <select id="listSelect" onChange={handleSelectChange} className=" text-sky-100 text-center text-lg bg-sky-600 w-4/6 h-1/6 m-1 shadow-inner shadow-white font-serif">
                    {collections.map((collection) => (
                        <option key={collection.value} value={collection.value}>{collection.text}</option>
                    ))}
                    <option value="createNew">Create New List</option>
                </select>
                <button id="listButton" onClick={handleButtonClick} className=" text-sky-100 text-center text-lg bg-sky-600 w-4/6 h-1/6 m-1 shadow-inner shadow-white font-serif">This is a button</button>
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

export default SearchedBook;
