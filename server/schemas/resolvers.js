const { Profile } = require('../models');
const { Books } = require('../models');
const { Note } = require('../models');
const { signToken } = require('../utils/auth');

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

    note: async (parent, { _id }) => {
      return Note.findOne({ _id: _id });
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
    // addToAlreadyRead: async (parent, { _id, book}) => {
    //   return Profile.findOneAndUpdate(
    //     { _id: _id},
    //     {
    //       $addToSet: { Already_Read: {book:book}},
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    deleteProfile: async (parent, { _id }) => {
      return Profile.findOneAndDelete({ _id: _id },
        { new: true });
    },
    removeBook: async (parent, { _id }) => {
      return Profile.findOneAndUpdate(
        { _id: _id },
        // { $pull: { title: title } },
        { new: true }
      );
    },
    removeNote: async (parent, { _id }) => {
      return Books.findOneAndUpdate(
        { _id: _id },
        { $pull: { _id: _id } },
        { new: true }
      );
    },

  },
};

module.exports = resolvers;
