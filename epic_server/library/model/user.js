const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName : 
    {
        type:String,
        require:true
    },
    hash : 
    {
        type:String,
        require:true
    },
    salt : 
    {
        type:String,
        require:true
    },
    emailId : 
    {
        type:String,
        require:true
    },
})

const User = mongoose.model('User',userSchema)

module.exports = User;