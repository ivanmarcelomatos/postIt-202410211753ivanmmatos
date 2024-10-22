const express = require('express');
const app = express();

app.get('/', (request, response) => {
    return response.send('Oi, mundo!');
});

app.listen(3333);

