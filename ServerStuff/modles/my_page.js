let mongoose = require('mongoose');

//creating a modle class for buisness info
let mypageModel = mongoose.Schema({
    name: String,
    contact:String,
    email:String
}, {

    collection: "Pageitems"
});

module.exports = mongoose.model("Pageitems", mypageModel)