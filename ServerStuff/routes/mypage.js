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
        console.log(pageLists)
        res.render('myPageContacts/mypage', {title: 'contact-list', PageLists: pageLists})
    }

 })
})
//get rout for page add - create op
router.get('/add', (req, res, next) => {
    res.render('myPageContacts/add', {title: 'Add_Contacts'})

})
//post rout for page add - create op
router.post('/add', (req, res, next) => {

    let newcontact = page({
        "name": req.body.name ,
        "contact":req.body.contact,
        "email":req.body.email


    })
    page.create(newcontact, (err, page) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        } else{
            // refreshing the contactslist
            res.redirect('/page-items')
        }

    })

})
//get rout for page edit - update op
router.get('/edit/:id', (req, res, next) => {
let id = req.params.id;

    page.findById(id, (err, pageToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        } else{
            res.render('myPageContacts/edit', {title: 'Edit_Contacts', Page: pageToEdit })
        }

    })
})
//post rout for page edit - update op
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;
    let updatedcontact = page({
        "name": req.body.name ,
        "contact":req.body.contact,
        "email":req.body.email
    })
    page.updateOne({_id:id}, updatedcontact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        } else {
            // reloding again
            res.redirect('/page-items')
        }
    })

})
//get rout for page remove - remove op
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;
    page.remove({_id: id}, (err) => {

        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{

            res.redirect('/page-items')
        }


    } );
})





module.exports = router;