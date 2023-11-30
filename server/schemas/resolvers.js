const { Profile } = require('../models');
const { Books } = require('../models');
const { Note } = require('../models');

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

    wishlist: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId }).populate({path: 'Wishlist'}).select("Wishlist");
    },

    toReads: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId }).populate({path: 'To_Reads'}).select("To_Reads");
    },

    alreadyRead: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId }).populate({path: 'Already_Read'}).select("Already_Read");
    },

    book: async (parent, { bookId, profileId }) => {
      await Books.findOne({ _id: bookId })
      .populate({
        path: 'Notes',
        match: { user: { _id: profileId } }
      })
    },


   /* Reference from Mozilla:
    await Story.
    find().
    populate({
      path: 'fans',
      match: { age: { $gte: 21 } },
    }).
    exec();
*/

    notes: async () => {
      return Note.find();
    },

    getBookNote: async (parent, { user }) => {
      return Note.findOne({ user:  });
    },
  },


  Mutation: {
    addProfile: async (parent, { user, email, password }) => {
      return Profile.create({ user, email, password });
    },
    addBook: async (parent, { author, ISBN, title, description, pub_Date, publisher, page_Count, img_Link, link }) => {
      return Profile.create({ author, ISBN, title, description, pub_Date, publisher, page_Count, img_Link, link });
    },
    addNote: async (parent, { bookId, noteText, rating }) => {
      return Books.findOneAndUpdate(
        { _id: bookId },
        {
          $addToSet: { noteText: noteText, rating: rating },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    addToAlreadyRead: async (parent, { profileId, bookId}) => {
      return Profile.findOneAndUpdate(
        { _id: profileId},
        {
          $addToSet: { Already_Read: {_id: bookId}},
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    addToWishlist: async (parent, { profileId, bookId}) => {
      return Profile.findOneAndUpdate(
        { _id: profileId},
        {
          $addToSet: { Wishlist: {_id: bookId}},
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    addTo_ToReads: async (parent, { profileId, bookId}) => {
      return Profile.findOneAndUpdate(
        { _id: profileId},
        {
          $addToSet: { To_Reads: {_id: bookId}},
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
