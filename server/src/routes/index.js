const express = require('express');
const router = express.Router();

router.get('/lenovo-event',(req,res) => {
    res.send('Hello World');
});

module.exports = router;