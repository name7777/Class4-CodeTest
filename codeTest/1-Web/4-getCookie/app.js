const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes.js');
const bodyParser = require('body-parser');

app.use(cors({
    origin: true // 근데 이건 ture 주면 전부 허용하겠다는 의미이므로 보안적으로 아무 쓸모 없다
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

const port = 3000;

app.listen(port, () => console.log(`Server is ruunning at https://localhost:${port}`));