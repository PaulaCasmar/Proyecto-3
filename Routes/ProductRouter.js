const express = require("express");
const Product = require("../models/Product");

const ProductRouter = express.Router();

ProductRouter.post("/product", async (req, res) => {
    const {
        title,
        description,
        price,
        stock
    } = req.body
    try {
        if (!title || !description || !price || !stock) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        if (description.length < 10) {
            return res.status(400).json({
                success: false,
                message: "Description must be more than 10 characters"
            });
        }

        if (description.length > 450) {
            return res.status(400).json({
                success: false,
                message: "Description must be less than 450 characters"
            });
        }

        if (price == 0) {
            return res.status(400).json({
                success: false,
                message: "Need to add a price"
            });
        }

        if (stock == 0) {
            return res.status(400).json({
                success: false,
                message: "Need to add stock"
            });
        }

        let producto = new Product({
            title,
            description,
            price,
            stock
        })

        await producto.save()
        return res.status(200).json({
            success: true,
            producto,
            message: "Product created successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

ProductRouter.get("/products", async (req, res) => {
    try {
        let productos = await Product.find({})
        return res.status(200).json({
            success: true,
            productos,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
})



ProductRouter.get("/product/:id", async (req, res) => {
    const {
        id
    } = req.params
    try {
        let producto = await Product.findById(id);
        return res.status(200).json({
            success: true,
            producto,
            message: "Product found successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

ProductRouter.put("/product/:id", async (req, res) => {
    const {
        id
    } = req.params
    const {
        title,
        description,
        price,
        stock
    } = req.body
    try {
        await Product.findByIdAndUpdate(id, {title, description, price, stock});
        return res.status(200).json({
            success: true,
            message: "Product updated successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

})

ProductRouter.delete("/product/:id", async (req, res) =>{
   const {id} = req.params 

   try {
    await Product.findByIdAndDelete(id)
    return  res.status(200).json({
        success: true, 
        message: "Product deleted successfully"
    })
   } catch (error) {
    return res.status(500).json({
        success: false,
        message: error.message
    })
   }
})

module.exports = ProductRouter;