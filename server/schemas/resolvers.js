const { Profile } = require('../models');
const { Book } = require('../models');
const { Note } = require('../models');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { userId }) => {
      return Profile.findOne({ userId: userId });
    },

    books: async () => {
      return Book.find();
    },

    book: async (parent, { _id }) => {
      return Book.findOne({ _id: _id });
    },

    notes: async () => {
      return Note.find();
    },

    note: async (parent, { noteId }) => {
      return Note.findOne({ noteId: noteId });
    },
  },


  Mutation: {
    addProfile: async (parent, { user, email, password }) => {
      return Profile.create({ user, email, password });
    },
    addBook: async (parent, { author, ISBN, title, description, page_Count, img_Link, link }) => {
      return Profile.create({ author, ISBN, title, description, page_Count, img_Link, link });
    },
    addNote: async (parent, { _id, noteText, rating }) => {
      return Book.findOneAndUpdate(
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
    addToList: async (parent, { userId, Lists:[Already_Read,Wishist,To_Reads], title}) => {
      return Profile.findOneAndUpdate(
        { userId: userId},
        {
          $addToSet: { Lists: {title:title}},
        },
        {
          new: true,
          arrayFilters:[{Lists: {Already_Read, Wishist, To_Reads}}],
          runValidators: true,
        }
      );
    },
    deleteProfile: async (parent, { userId }) => {
      return Profile.findOneAndDelete({ userId: userId },
        { new: true });
    },
    removeBook: async (parent, { userId, title }) => {
      return Profile.findOneAndUpdate(
        { userId: userId },
        { $pull: { title: title } },
        { new: true }
      );
    },
    removeNote: async (parent, { _id, noteId }) => {
      return Book.findOneAndUpdate(
        { _id: _id },
        { $pull: { noteId: noteId } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
