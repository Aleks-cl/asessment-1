let express = require('express');
let router = express.Router();
let mongoose = require('mongoose')

// connect to page model
let page = require ('../modles/my_page')

//get rout for page list page - read op
router.get('/', (req,res, next) => {
 page.find((err, pageLists) => {
    if(err)
    {
        return console.error(err);
    }else{

        res.render('mypage', {title: 'contact-list', PageLists: pageLists})
    }

 })
})

module.exports = router;