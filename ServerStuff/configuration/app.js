// installed 3rd party stuff
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
// auth moduals
let flash = require('connect-flash');
let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;



//db setup
let mongoose = require('mongoose');
let DB = require('./db');

//point mongoose
mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});
let mongodb = mongoose.connection;
mongodb.on('error', console.error.bind(console, 'there was an error'))
mongodb.once('open', ()=> {console.log('connected to mongo')})


let indexRouter = require('../routes/index' );
let usersRouter = require('../routes/users' );
let pageRouter  = require('../routes/mypage');


let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs'); // express  -e

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

//express session
app.use(session({
  secret: "someSecret",
  saveUninitialized: false,
  resave: false
  }));
  
  //flash stuff
  app.use(flash());

  //passport
app.use(passport.initialize());
app.use(passport.session());
// pass User config

//create user model instance
let userModel = require('../modles/user');
let User = userModel.User;
// implement auth strat
passport.use(User.createStrategy());



// serialize and deserialize
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/page-items', pageRouter);


// below taken by example work
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
    
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error'});
});

module.exports = app;
