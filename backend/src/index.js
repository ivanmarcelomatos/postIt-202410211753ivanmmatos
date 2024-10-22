const express = require('express');
const app = express();

// app.use(express.json());

app.get('/', (request, response) => {
    return response.json({
        name: "Ivan",
        profession: "software engineer"
    });
});

app.listen(3333);

