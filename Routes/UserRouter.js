const express = require ("express");
const User = require ("../models/User");
const UserRouter = express.Router();

UserRouter.post("/user", async (req, res) => {
    const {
        name,
        surname,
        email,
        phone, 
        password
    } = req.body
    try {
        if (!name || !surname || !email || !phone || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        } 
        if (name.length <  2) {
            return res.status(400).json({
                success: false,
                message: "Name must be equal or more than 2 characters"
            });
        }
        if (name.length >  50) {
            return res.status(400).json({
                success: false,
                message: "Name must be less than 50 characters"
            });
        }

        if (surname.length < 1) {
            return res.status(400).json({
                success: false,
                message: "Surname must be more than 1 character"
            });
        }
        if (surname.length >  50) {
            return res.status(400).json({
                success: false,
                message: "Surname must be less than 50 characters"
            });
        }
        if (email.length <  9) {
            return res.status(400).json({
                success: false,
                message: "Email must be equal or more than 9 characters"
            });
        }
        if (email.length >  80) {
            return res.status(400).json({
                success: false,
                message: "Email must be less than 80 characters"
            });
        }
        if (phone.length <  9) {
            return res.status(400).json({
                success: false,
                message: "Phone must be equal or more than 9 characters"
            });
        }

        if (phone.length >  15) {
            return res.status(400).json({
                success: false,
                message: "Phone must be less than 15 characters"
            });
        }

        if (password.length <  8) {
            return res.status(400).json({
                success: false,
                message: "Password must be equal or more than 8 characters"
            });
        }

        let usuario = new User({
            name,
            surname,
            email,
            phone,
            password
        })

        await usuario.save()
        return res.status(200).json({
            success: true,
            usuario,
            message: "User created successfully"
        })
       
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        }); 
    }
});

UserRouter.get("/users", async (req, res)=>{
    try {
        let usuarios = await User.find({})
        return res.status(200).json({
            success: true,
            usuarios
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
})


UserRouter.get("/user/:id", async (req, res)=>{
    const {id} = req.params
    try {
        let usuario = await User.findById(id);
        return res.status(200).json({
            success: true,
            usuario,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

UserRouter.put("/user/:id", async (req, res) => {
    const {id} = req.params
    const {email, phone, password} = req.body
    try {
        await User.findByIdAndUpdate(id, {email, phone, password})
        return res.status(200).json({
            success: true,
            message: "User updated successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        }) 
    }
})

UserRouter.delete("/user/:id", async (req, res) =>{
    const {id} = req.params
    try {
        await User.findByIdAndDelete(id)
return res.status(200).json({
    success:true,
    message: "User deleted succesfully"
})
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

module.exports = UserRouter;