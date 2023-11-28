const  { Schema, model }  = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const Profile = require("./Profile");

// Child documents or subdocuments can be embedded into a parent document
// The noteSchema defines the schema of the subdocument
const noteSchema = new Schema({
  noteId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Profile.userID",
  },
  noteText: { type: String, required: true, minlength: 1, maxlength: 3000 },
  rating: { type: Number, max: 5, min: 1 },
});

// The bookSchema defines the schema of the parent document
const bookSchema = new mongoose.Schema({
  _id: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId()},
  author: { type: String, trim: true, required: true },
  ISBN: { type: String, trim: true },
  pub_Date: { type: Date, trim: true },
  title: { type: String, trim: true },
  description: { type: String, trim: true },
  page_Count: { type: Number , trim: true },
  img_Link: {type: String, trim: true},
  link: {type: String, trim: true},
  // This will include an array that holds all the notes
  notes: [noteSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// Uses mongoose.model() to create model
const Book = mongoose.model("Books", bookSchema);

// Uses model to create new instance including subdocument
const noteData = [
  { title: "Diary of Anne Frank", price: 10 },
  { title: "One Thousand Years of Solitude", price: 20 },
  { title: "History of Hogwarts", price: 5 },
];

Book.create({ name: "Notes", notes: noteData })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

module.exports = Book;
