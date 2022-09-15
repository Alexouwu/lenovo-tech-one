const express = require('express');
const pool = require('../database');
const router = express.Router();


router.get('', function(req,res) {
  res.sendFile('C:/Users/jvill/OneDrive/Documents/Personal_Projects/Web_Development/website_lenovo/server/src/confirmMail/indexMail.html');
});

module.exports = router; 