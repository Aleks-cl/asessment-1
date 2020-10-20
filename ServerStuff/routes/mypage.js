let express = require('express');
let router = express.Router();
let mongoose = require('mongoose')
let passport = require('passport');

let pageControl = require('../controllers/page')


// authentication


function requiredAuth(req,res,next) {
  if(!req.isAuthenticated()){

return res.redirect('/login')
  }
  next();
}

//get rout for page list page - read op
router.get('/', requiredAuth ,pageControl.displayContactsPage);

//get rout for page add - create op
router.get('/add',requiredAuth , pageControl.displayAddPage);

//post rout for page add - create op
router.post('/add', requiredAuth ,pageControl.prossessAddPage);

//get rout for page edit - update op
router.get('/edit/:id', requiredAuth ,pageControl.editPageShowStuff);

//post rout for page edit - update op
router.post('/edit/:id', requiredAuth ,pageControl.prossessEdit);

//get rout for page remove - remove op
router.get('/delete/:id',requiredAuth , pageControl.deleteItem);





module.exports = router;