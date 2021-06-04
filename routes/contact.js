const path =require('path');
const express = require('express');

const router = express.Router();

const rootdir=require('../util/path');

router.get('/contact', (req, res, next) => {
  //res.sendFile(path.join(__dirname,'..','views','add-product.html'));
  res.sendFile(path.join(rootdir,'views','contact.html'));
});

router.post('/contact', (req, res, next) => {
  //console.log(req.body);
  res.redirect('/success');
});

module.exports = router;
