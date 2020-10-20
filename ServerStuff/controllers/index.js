let express = require("express");
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');


//user model inst
let userModel = require('../modles/user');
let User = userModel.User;

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home', displayName: req.user ? req.user.displayName : ''});
}
module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About_Me', displayName: req.user ? req.user.displayName : '' });
}
module.exports.displayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Products', displayName: req.user ? req.user.displayName : '' });
}
module.exports.displaySurvicesPage = (req, res, next) => {
    res.render('index', { title: 'Survices', displayName: req.user ? req.user.displayName : '' });
}
module.exports.displayContactMePage = (req, res, next) => {
    res.render('index', { title: 'Contact_information', displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayLoginPage = (req,res,next) => {
    if(!req.user )
    {
        res.render('auth/login', 
        {
            title: "Login",
            messages: req.flash('LoginMessage'),
            displayName: req.user ? req.user.displayName : ''
       })
    }
    else
    {
        res.redirect('/');
    }
}
module.exports.ProssessLoginPage = (req, res, next) => {
   passport.authenticate('local', (err, user, info) => {
    if(err)
    {
        return next(err);
    }

    if(!user)
    {
         req.flash('loginMessage', 'authentication error');
        return res.redirect('/login');
    }
    req.login(user, (err) => {
        //server error?
        if(err)
        {
            console.log("error in login")
            return next(err);
        }
        return res.redirect('/page-items');
    });
})(req, res, next); 
    
}
//temp files for testing

module.exports.disPlaytempReg = (req,res,next) =>{

res.render('auth/tempReg', {
    title: 'register', 
    messages: req.flash('registerMessage'),
    displayName: req.user ? req.user.displayName : ''
});

}

module.exports.prossessReg = (req,res,next) => {
    let newUser = new User({
        username    : req.body.username,
        email       : req.body.email,
        displayName : req.body.displayName
    });
 
    User.register(newUser, req.body.password, (err) => {
        return passport.authenticate('local')(req,res, () => {
            
            if(err){
                console.log(err);

            }else{
            console.log(newUser)
            res.redirect('/page-items')
                }

        });
        
    })

}

module.exports.logout = (req, res, next) =>
    {
        req.logout();
        res.redirect('/');

    }  