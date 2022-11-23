const express = require("express");
const Payment = require ("../models/Payment");
const User = require ("../models/User");
const Product = require ("../models/Product");
const auth = require("../middleware/auth");
const PaymentRouter = express.Router();

PaymentRouter.get("/payments", auth, async (req,res) =>{
    try {
        const payments = await Payment.find()
        return res.status(200).json({
            success: true,
            payments
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
})

PaymentRouter.post("/payment", auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("name email surname phone");
      if (!user)
        return res.status(400).json({
          success: false,
          message: "User not found",
        });
  console.log(user)
      const { cart, paymentID, adress } = req.body;
      const { _id, name, email, surname, phone } = user;
  
      const newPayment = new Payment({
        user_id: _id,
        name,
        email,
        surname,
        phone,
        cart,
        paymentID,
        adress,
      });
  
      // cart.filter((producto) => {
      //   return sold(producto._id, producto.quantity, producto.sold);
      // });
  
      await newPayment.save();
      return res.status(200).json({
        success: true,
        message: "Payment successful",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  });
  

// const sold = async(id, quantity, sold) =>{
//     await Product.findOneAndUpdate({_id:id}, {sold: quantity + sold})
// }

module.exports = PaymentRouter