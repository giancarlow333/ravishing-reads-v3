const { Profile } = require('../models');
const { Books } = require('../models');
const { Note } = require('../models');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { _id }) => {
      return Profile.findOne({ _id: _id });
    },

    books: async () => {
      return Books.find();
    },

    book: async (parent, { _id }) => {
      return Books.findOne({ _id: _id });
    },

    notes: async () => {
      return Note.find();
    },

    getBookNote: async (parent, { _id }) => {
      return Note.findOne({ _id: _id });
    },
  },


  Mutation: {
    addProfile: async (parent, { user, email, password }) => {
      return Profile.create({ user, email, password });
    },
    addBook: async (parent, { author, ISBN, title, description, pub_Date, publisher, page_Count, img_Link, link }) => {
      return Profile.create({ author, ISBN, title, description, pub_Date, publisher, page_Count, img_Link, link });
    },
    addNote: async (parent, { _id, noteText, rating }) => {
      return Books.findOneAndUpdate(
        { _id: _id },
        {
          $addToSet: { noteText: noteText, rating: rating },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    addToAlreadyRead: async (parent, { profileId, title}) => {
      return Profile.findOneAndUpdate(
        { _id: profileId},
        {
          $addToSet: { Already_Read: {_id:profileId}},
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    deleteProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId },
        { new: true });
    },
    removeBook: async (parent, { bookId, title }) => {
      return Profile.findOneAndUpdate(
        { _id: bookId },
        { $pull: { title: title } },
        { new: true }
      );
    },
    removeNote: async (parent, { noteId }) => {
      return Books.findOneAndUpdate(
        { _id: noteId },
        { $pull: { _id: noteId } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
