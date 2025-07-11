const express = require('express');
const router = require('./router');
const app = express();
const connectToDatabase = require('./config/dbConfig');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(router);


const port = 3333;

connectToDatabase()
    .then(() => {
        app.listen(port, () => {
        console.log(`🚀 Servidor rodando na porta: ${port}`);
    });
});

