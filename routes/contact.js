const path =require('path');
const express = require('express');

const router = express.Router();
const productcontroller=require('../controllers/addproduct')


router.get('/contact',productcontroller.getcontact);

router.post('/contact',productcontroller.postcontact);

module.exports = router;
