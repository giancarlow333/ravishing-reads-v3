const { Profile } = require('../models');
const { Books } = require('../models');
const { Note } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },

    books: async () => {
      return Books.find();
    },

    book: async (parent, { bookId }) => {
      return Books.findOne({ _id: bookId });
    },

    notes: async () => {
      return Note.find();
    },

    getBookNote: async (parent, { noteId }) => {
      return Note.findOne({ _id: noteId });
    },
  },


  Mutation: {
    addProfile: async (parent, { username, email, password }) => {
      const profile = await Profile.create({ username, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { username, password }) => {
      const profile = await Profile.findOne({ username });

      if (!profile) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPassword = await profile.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(profile);
      return { token, profile };
    },
    addBook: async (parent, { author, ISBN, title, description, pub_Date, publisher, page_Count, img_Link, link }) => {
      return Profile.create({ author, ISBN, title, description, pub_Date, publisher, page_Count, img_Link, link });
    },
    addNote: async (parent, { noteId, noteText, rating }) => {
      return Books.findOneAndUpdate(
        { _id: noteId },
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
          $addToSet: { Already_Read: {_id: profileId}},
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    addToWishlist: async (parent, { profileId, title}) => {
      return Profile.findOneAndUpdate(
        { _id: profileId},
        {
          $addToSet: { Wishlist: {_id: profileId}},
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    addTo_ToReads: async (parent, { profileId, title}) => {
      return Profile.findOneAndUpdate(
        { _id: profileId},
        {
          $addToSet: { To_Reads: {_id: profileId}},
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
