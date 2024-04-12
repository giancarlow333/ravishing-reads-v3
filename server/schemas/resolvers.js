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

    wishlist: async (parent, { profileId }) => {
      //https://stackoverflow.com/questions/31357745/find-after-populate-mongoose
      return Profile.find({ _id: profileId }).populate("Wishlist").select("Wishlist");
    },

    toReads: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId }).populate({path: 'To_Reads'}).select("To_Reads");
    },

    alreadyRead: async (parent, { profileId }) => {
      return Profile.find({ _id: profileId }).populate({path: 'Already_Read'}).select("Already_Read");
    },

    book: async (parent, { bookId }) => {
      return Books.findOne({ _id: bookId });
    },

    getBookNote: async (parent, { bookId, profileId }) => {
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

//do we need this ?? vv
 /*   notes: async (parent, { bookId, profileId }) => {
      await Books.findOne({ _id: bookId })
      .populate({
        path: 'Notes',
        match: { user: { _id: profileId } }
      })
    },

    getBookNote: async (parent, { user }) => {
      return Note.findOne({ user: user });
    },

    */
  },


  Mutation: {
    addProfile: async (parent, { username, email, password }) => {
      const profile = await Profile.create({ username, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { username, password }) => {
      const profile = await Profile.findOne({ username });
      let token = null;

      if (!profile) {
        return { token, profile };
        // we should be sending an error for incorrect credentials
        //throw new AuthenticationError('Incorrect credentials');
      }

      const correctPassword = await profile.isCorrectPassword(password);

      if (!correctPassword) {
        return { token, profile };
        // we should be sending an error for incorrect credentials
        //throw new AuthenticationError('Incorrect credentials');
      }

      token = signToken(profile);
      return { token, profile };
    },
    addBook: async (parent, { author, ISBN, title, description, pub_Date, publisher, page_Count, img_Link, link }) => {
      return Profile.create({ author, ISBN, title, description, pub_Date, publisher, page_Count, img_Link, link });
    },
    addNote: async (parent, { bookId, noteText, rating, user }) => {
      return Books.findOneAndUpdate(
        { _id: bookId },
        {
          $addToSet: { noteText: noteText, rating: rating, user: user },
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
