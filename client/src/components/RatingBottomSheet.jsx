import React, { useState } from 'react';
import Sheet from 'react-modal-sheet';
import Rating from 'react-rating-stars-component';

function RatingBottomSheet() {
  const [isOpen, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const submitRating = () => {
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    // Add logic to handle the submission (e.g., update state, send to API)
    setOpen(false); // Close the sheet
  };

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="bg-sky-400 hover:bg-sky-700 text-white text-xl font-extrabold py-2 "
      >
        Rate this Book
      </button>

      <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content className="p-4 bg-[#001828]">
            <h2 className="text-2xl font-semibold mb-4">Rate this Book</h2>
            <Rating
              count={5}
              onChange={newValue => setRating(newValue)}
              size={24}
              activeColor="#ffd700"
            />
            <textarea
              value={comment}
              onChange={e => setComment(e.target.value)}
              placeholder="Enter your comment"
              className="mt-2 w-full p-2 border border-gray-300 rounded"
            />
            <button 
              onClick={submitRating} 
              className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}

export default RatingBottomSheet;
