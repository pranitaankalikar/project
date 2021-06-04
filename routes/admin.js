const path =require('path');
const express = require('express');

const router = express.Router();
const productcontroller=require('../controllers/addproduct')


router.get('/add-product',productcontroller.getaddproduct);

router.post('/add-product',productcontroller.postaddproduct);

module.exports = router;
