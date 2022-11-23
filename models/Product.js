const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 50,
        minlength: 3,
        required: true
    },
    description: {
        type: String,
        maxlenght: 450,
        minlength: 10,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: Object,
        required:true
    },
    stock:{
        type: Number,
        required: true
    },
    category:{
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }
    
}, {timestamps:true});

module.exports = mongoose.model("Product", productSchema);