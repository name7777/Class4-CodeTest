const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes.js');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

const port = 3000;

app.listen(port, () => console.log(`Server is ruunning at https://localhost:${port}`));