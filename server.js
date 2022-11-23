// IMPORT DEPENDENCIES
const express = require ("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require ("cors");
const fileUpload = require("express-fileupload");


app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(
    fileUpload({
    useTempFiles: true,
})
);

// IMPORT ROUTES

const ProductRouter = require("./Routes/ProductRouter");
const CategoryRouter = require("./Routes/CategoryRouter");
const UserRouter = require("./Routes/UserRouter");
const PaymentRouter = require ("./Routes/PaymentRouter");
const ImageRouter = require ("./Routes/ImageRouter")

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
app.use("/api", PaymentRouter);
app.use("/api", ImageRouter)

app.listen(5000, ()=>{
    console.log("Server is running on port 5000")
});