let express = require('express');
let router = express.Router();
let mongoose = require('mongoose')
// connect to page model
let page = require ('../modles/my_page')
let pageControl = require('../controllers/page')

//get rout for page list page - read op
router.get('/', pageControl.displayContactsPage);

//get rout for page add - create op
router.get('/add', pageControl.displayAddPage);

//post rout for page add - create op
router.post('/add', pageControl.prossessAddPage);

//get rout for page edit - update op
router.get('/edit/:id', pageControl.editPageShowStuff);

//post rout for page edit - update op
router.post('/edit/:id', pageControl.prossessEdit);

//get rout for page remove - remove op
router.get('/delete/:id', pageControl.deleteItem);





module.exports = router;