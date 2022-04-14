const express = require('express');
const app = express();
const router = require('./routes.js');

app.use('/', router);

const port = 3000;

app.listen(port, () => console.log(`Server is ruunning at https://localhost:3000`));