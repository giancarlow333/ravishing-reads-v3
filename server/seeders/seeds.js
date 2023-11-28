const db = require('../config/connection');
const { Profile, Books } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const bookSeeds = require('./bookSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Profiles', 'profiles');
    await cleanDB('Books', 'books');

    await Profile.create(profileSeeds);
    await Books.create(bookSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
