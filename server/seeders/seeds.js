const db = require('../config/connection');
const { Profile } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const thoughtSeeds = require('./thoughtSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Profile', 'profiles');
    await cleanDB('Thought', 'thoughts');

    await Profile.create(profileSeeds);
    await Thought.create(thoughtSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
