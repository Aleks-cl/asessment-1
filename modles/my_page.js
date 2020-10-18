let mongoose = require('mongoose');

//creating a modle class for buisness info
let mypageModel = mongoose.Schema({

contact_name: String,
contact_number:String,
email:String


}, {

    collection: "pagestuff"
});

module.exports = mongoose.model("Pagestuff", mypageModel)