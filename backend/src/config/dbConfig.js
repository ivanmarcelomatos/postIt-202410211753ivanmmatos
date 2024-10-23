const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

const connection = mongoose.connect(uri);

module.exports = connection;