const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

if (!uri) {
    console.error('MongoDB URI is not defined in environment variables!');
    process.exit(1); // Encerrar a aplicação se a URI não estiver definida
}

const connection = mongoose.connect(uri);

connection
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


module.exports = connection;