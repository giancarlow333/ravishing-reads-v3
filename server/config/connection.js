const mongoose = require('mongoose');

require('dotenv').config(); // REMOVE ON PRODUCTION

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ravishing-reads');

module.exports = mongoose.connection;