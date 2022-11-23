const mongoose = require ("mongoose"); 

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
        minlength: 2,
        required: true
    },
    surname: {
        type: String,
        maxlenght: 50,
        minlength: 1,
        required: true
    },
    email:{
        type: String,
        maxlength: 80,
        minlength: 9,
        required: true
    },
    phone:{
        type: Number,
        maxlength: 15,
        minlength: 9,
        required: true
    },
   
    password:{
        type: String,
        minlength: 6,
        required: true
    },

    role: {
        type: Number,
        default: 0,
    },

    cart:{
        type: Array,
        default: []
    }
   
    
}, {timestamps:true});

module.exports = mongoose.model("User", userSchema);