// IMPORT DEPENDENCIES
const express = require ("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded(({ extended: true })));

// IMPORT ROUTES

const ProductRouter = require("./Routes/ProductRouter");
const CategoryRouter = require("./Routes/CategoryRouter");
const UserRouter = require("./Routes/UserRouter");

// CONNECT TO BD

const URL = process.env.MONGODB_URL;
mongoose.connect(URL,{}).then(()=>{
console.log("BBDD is now connected")
}).catch((error)=>{
    console.log(error);
});



// ROUTES

app.use("/api", ProductRouter);
app.use("/api", CategoryRouter);
app.use("/api", UserRouter);

app.listen(5000, ()=>{
    console.log("Server is running on port 5000")
});