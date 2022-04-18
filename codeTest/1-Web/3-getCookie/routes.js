const express = require('express');
const router = express.Router();

let bool = false

router.get('/getCookie', (req, res) => {
    bool = true;
    res.setHeader('Set-Cookie', `token=${bool}`);
});

module.exports = router;