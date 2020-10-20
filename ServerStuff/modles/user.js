//requires
let mongoose = require('mongoose');
let passLocMon = require('passport-local-mongoose');

let User = mongoose.Schema(
    {
        username:
        {
            type:String,
            default: "",
            trim: true,
            required: "username is required"


        },
        /* password; 
          {
            type:String,
            default: "",
            trim: true,
            required: "password is required"
        },
        */
        email:
        {
            type:String,
            default: "",
            trim: true,
            required: "email is required"
       },

       displayName:
       {
            type:String,
            default: "",
            trim: true,
            required: "email is required"
       },
       created:
       {
            type: Date,
            default: Date.now
       },
       updated:
       {
            type: Date,
            default: Date.now
       }

    },
    {
        collection:"users"
    }


);

//config user opt

let options = ({missingPasswordError: "wrong/missing password"});
User.plugin(passLocMon, options);


module.exports.User = mongoose.model('User', User);