let express = require("express");
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//user model inst
let userModel = require('../modles/user');
let User = userModel.User;

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
}
module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About_Me' });
}
module.exports.displayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Products' });
}
module.exports.displaySurvicesPage = (req, res, next) => {
    res.render('index', { title: 'Survices' });
}
module.exports.displayContactMePage = (req, res, next) => {
    res.render('index', { title: 'Contact_information' });
}

module.exports.displayLoginPage = (req,res,next) => {
    if(!req.user )
    {
        res.render('auth/login' , {
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
            return next(err);
        }
        return res.redirect('/page-items');
    

    })(req, res, next); 
    
}
module.exports.logout = (req, res, next) =>
    {
        req.logout();
        res.redirect('/');

    }  