const path=require('path');
const express = require('express');
const productcontroller=require('../controllers/addproduct')

const router = express.Router();

router.get('/success',productcontroller.getsuccess);

module.exports = router;
