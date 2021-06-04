const product=[];
const path=require('path');
exports.getaddproduct=(req, res, next) => {
    //res.sendFile(path.join(__dirname,'..','views','add-product.html'));
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
  }

exports.postaddproduct=(req, res, next) => {
    //console.log(req.body);
    res.redirect('/');
  }  

exports.getproduct= (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
  }  

exports.getcontact= (req, res, next) => {
  //res.sendFile(path.join(__dirname,'..','views','add-product.html'));
  res.sendFile(path.join(__dirname,'../','views','contact.html'));
} 

exports.postcontact= (req, res, next) => {
  //console.log(req.body);
  res.redirect('/success');
}
exports.getsuccess=(req, res, next) => {
  
  res.sendFile(path.join(__dirname,'../','views','mysuccess.html'));

}