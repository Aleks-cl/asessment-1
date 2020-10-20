let express = require("express");
let router = express.Router();
let mongoose = require('mongoose')
// create refrence
let page = require ('../modles/my_page')

module.exports.displayContactsPage = (req,res, next) => {
    page.find((err, pageLists) => {
       if(err)
       {
           return console.error(err);
       }else{
           console.log(pageLists)
           res.render('myPageContacts/mypage', {title: 'contact-list', PageLists: pageLists,  displayName: req.user ? req.user.displayName : ''})
       }
   
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('myPageContacts/add', {title: 'Add_Contacts',  displayName: req.user ? req.user.displayName : ''})

}

module.exports.prossessAddPage = (req, res, next) => {

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

    });

}

module.exports.editPageShowStuff = (req, res, next) => {
    let id = req.params.id;
    
        page.findById(id, (err, pageToEdit) => {
            if(err)
            {
                console.log(err);
                res.end(err);
            } else{
                res.render('myPageContacts/edit', {title: 'Edit_Contacts', Page: pageToEdit, displayName: req.user ? req.user.displayName : '' })
            }
    
        });
    }
    module.exports.prossessEdit = (req, res, next) => {
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
        });
    
    }
    module.exports.deleteItem = (req, res, next) => {
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
    }