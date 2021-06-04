const path=require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const contactRoutes = require('./routes/contact.js');
const successRoutes = require('./routes/mysuccess.js');

const errcontroller=require('./controllers/error');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);

app.use(errcontroller.errorpage);

app.listen(5000);
