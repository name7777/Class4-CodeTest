const express = require('express');
const router = express.Router();

router.post('/getCookie', (req, res) => {
    let id = req.body.id;
    document.cookie = id
    res.send(console.log(id));
});

module.exports = router;