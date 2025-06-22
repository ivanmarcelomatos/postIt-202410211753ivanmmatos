const express = require('express');
const router = require('./router');
const app = express();
require('./config/dbConfig');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(router);



app.listen(3333);

