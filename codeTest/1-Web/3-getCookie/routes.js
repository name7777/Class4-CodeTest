const express = require('express');
const router = express.Router();

let bool = false

router.get('/getCookie', (req, res) => {
    bool = true;
    console.log('Token: ', bool);
});

module.exports = router;