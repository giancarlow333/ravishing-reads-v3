const mongoose = require("mongoose");

// Child documents or subdocuments can be embedded into a parent document
// The noteSchema defines the schema of the subdocument
const noteSchema = new mongoose.Schema({
  noteId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  userId: {
    type: Schema.Types.ObjectId,
  },
  noteText: { type: String, required: true },
  rating: { type: Number, max: 5, min: 1 },
});

// The bookSchema defines the schema of the parent document
const bookSchema = new mongoose.Schema({
    noteId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
  // This will include an array that holds all the notes
  notes: [noteSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// Uses mongoose.model() to create model
const Books = mongoose.model("Books", bookSchema);

// Uses model to create new instance including subdocument
const noteData = [
  { title: "Diary of Anne Frank", price: 10 },
  { title: "One Thousand Years of Solitude", price: 20 },
  { title: "History of Hogwarts", price: 5 },
];

Books.create({ name: "Notes", notes: noteData })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

module.exports = Books;
