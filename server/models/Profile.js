const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const Books = require('./Books');

const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  Already_Read: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Books',
    }
  ],
  To_Reads: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Books',
    }
  ],
  Wishlist: [{
      type: Schema.Types.ObjectId,
      ref: 'Books',
  }],
},
  { toJSON: {
    virtuals: true
  }
});

// set up pre-save middleware to create password
profileSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Create a virtual property `commentCount` that gets the amount of comments per user
profileSchema
  .virtual('count_To_Read')
  // Getter
  .get(function () {
    return Profile.To_Reads.length;
  })

  profileSchema
  .virtual('count_Already_Read')
  // Getter
  .get(function () {
    return Profile.Already_Read.length;
  })

  profileSchema
  .virtual('count_Wishlist')
  // Getter
  .get(function () {
    return Profile.Wishlist.length;
  })

// compare the incoming password with the hashed password
profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Profile = model('Profile', profileSchema, 'Profile');

module.exports = Profile;
