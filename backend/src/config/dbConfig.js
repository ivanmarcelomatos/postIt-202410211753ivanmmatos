const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

if (!uri) {
    console.error('MongoDB URI is not defined in environment variables!');
    process.exit(1);
}

function connectToDatabase() {
  return mongoose.connect(uri)
    .then(() => {
      console.log('✅ Successfully connected to MongoDB');
    })
    .catch((error) => {
      console.error('❌ Error connecting to MongoDB:', error);
      process.exit(1); // Encerra a aplicação se falhar a conexão
    });
}

module.exports = connectToDatabase;