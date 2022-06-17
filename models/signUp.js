const mongoose = require('mongoose');

const signupSchema = mongoose.Schema({
    fName:{
        type:String,
        required:true
    },
    lName:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

const SignUp = mongoose.model('SignUp',signupSchema);
module.exports = SignUp; 