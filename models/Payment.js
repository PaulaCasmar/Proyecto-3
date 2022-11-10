const mongoose = require ("mongoose"); 

const paymentSchema = new mongoose.Schema({

    cart:{
        type:Array,
        required: true
    },
    user:{
        type:Array,
        required: true
    },
     
    adress: {
        type: String,
        maxlenght: 450,
        minlength: 10,
        required: true
    },
     
    
}, {timestamps:true});

module.exports = mongoose.model("Payment", paymentSchema);