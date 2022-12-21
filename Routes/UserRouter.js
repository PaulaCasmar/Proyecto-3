const express = require("express");
const User = require("../models/User");
const UserRouter = express.Router();
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");


const createToken = (user) => {
    return jwt.sign(user, process.env.ACCES_TOKEN_SECRET, {
        expiresIn: "7d"
    });
}

UserRouter.post("/register", async (req, res) => {
    const {
        name,
        surname,
        email,
        phone,
        password, 
        adress
    } = req.body
    try {
        const user = await User.findOne({
            email
        })
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })

        }
        if (!name || !surname || !email || !phone || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        if (name.length < 2) {
            return res.status(400).json({
                success: false,
                message: "Name must be at least 2 characters"
            });
        }
        if (name.length > 50) {
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
        if (surname.length > 50) {
            return res.status(400).json({
                success: false,
                message: "Surname must be less than 50 characters"
            });
        }
        if (email.length < 9) {
            return res.status(400).json({
                success: false,
                message: "Email must be equal or more than 9 characters"
            });
        }
        if (email.length > 80) {
            return res.status(400).json({
                success: false,
                message: "Email must be less than 80 characters"
            });
        }
        if (phone.length < 9) {
            return res.status(400).json({
                success: false,
                message: "Phone must be equal or more than 9 characters"
            });
        }

        if (phone.length > 15) {
            return res.status(400).json({
                success: false,
                message: "Phone must be less than 15 characters"
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters"
            });
        }

        const validateEmail =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;

        if (!validateEmail.test(email)) {
            return res.status(400).json({
                success: false,
                message: "The email is not valid",
            });
        }

        if (!validatePassword.test(password)) {
            return res.status(400).json({
                success: false,
                message: "The password must have at least one uppercase, one lowercase and one number",
            });
        }

        let passwordHash = bcrypt.hashSync(password, salt);

        let newUser = new User({
            name,
            surname,
            email,
            phone,
            adress,
            password: passwordHash
        });

        await newUser.save();
        const accessToken = createToken({
            id: newUser._id
        });
        return res.status(200).json({
            success: true,
            newUser,
            message: "User created successfully",
            accessToken
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

UserRouter.get("/users", auth, authAdmin, async (req, res) => {
    try {
        let users = await User.find({}).select("name surname email phone adress")
        console.log(users)
        if (!users) {
            return res.status(400).json({
                succes: false,
                message: "Users not found"
            })
        }
        return res.status(200).json({
            success: true,
            users
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
})


UserRouter.get("/user", auth, async (req, res) => {

    try {
        let user = await User.findById(req.user.id);
        if (!user)
            return res.status(400).json({
                succes: false,
                message: "User not found"
            })
        return res.status(200).json({
            success: true,
            user,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

UserRouter.get("/user/:id", auth, authAdmin, async (req, res) => {
    const {
        id
    } = req.params
    try {
        let user = await User.findById(id);
        if (!user)
            return res.status(400).json({
                succes: false,
                message: "User not found"
            })
        return res.status(200).json({
            success: true,
            user,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

// UserRouter.put("/user/:userid", auth, authAdmin, async (req, res) => {
//     const {
//         userid
//     } = req.params
//     console.log(id)
//     const {
//         name,
//         surname,
//         email,
//         adress,
//         phone,
//         password,
//     } = req.body
//     try {
//         // const user = await User.findById(userid)
//         // const name = user.name
//         // const surname = user.surname
//         // const email = user.email
//         // const adress = user.adress
//         // const phone = user.phone
//         // const password = user.password
//         let passwordHash = bcrypt.hashSync(password, salt);
//         await User.findByIdAndUpdate(userid, {
//             name,
//             surname,
//             email,
//             adress,
//             phone,
//             password: passwordHash
//         })
//         return res.status(200).json({
//             success: true,
//             message: (`Los datos del usuario ${name} ${surname} han sido modificados con éxito`),

//         })

//     } catch (error) {
//         console.log(error.message)
//         return res.status(500).json({
//             success: false,
//             message: error.message
//         })

//     }
// }) // mirar que se puede modificar y quien puede modificarlo


UserRouter.put("/usuario/:id", auth, authAdmin, async (req, res) => {
    const { id } = req.params;
    const { name, password, email, surname, phone, adress } = req.body;
    
    try {
        const user = await User.findById(id)
        const password = user.password
      let passHash = bcrypt.hashSync(password, salt);
      await User.findByIdAndUpdate(id, {
        name,
        email, 
        surname, 
        phone, 
        adress, 
        password: passHash,
      });
  
      return res.status(200).json({
        success: true,
        message: "Usuario modificado correctamente",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  });

//   copiar ruta anterior sin req.params

UserRouter.put("/profile", auth, async (req, res) => {
   
    const { name, password, email, surname, phone, adress } = req.body;
    
    try {
        const user = await User.findById(req.user.id)
        const Password = user.password
      let passHash = bcrypt.hashSync(password, salt);
      await User.findByIdAndUpdate(req.user.id, {
        name,
        email, 
        surname, 
        phone, 
        adress, 
        password: passHash,
      });
  
      return res.status(200).json({
        success: true,
        message: "Usuario modificado correctamente",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
})

UserRouter.delete("/user/:id", auth, authAdmin, async (req, res) => {
    const {
        id
    } = req.params
    try {
        await User.findByIdAndDelete(id)
        return res.status(200).json({
            success: true,
            message: "User deleted succesfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

UserRouter.delete("/user", auth, async (req, res) => {

    try {
        await User.findByIdAndDelete(req.user.id)
        return res.status(200).json({
            success: true,
            message: "User deleted succesfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
})


UserRouter.post("/login", async (req, res) => {
    const {
        email,
        password
    } = req.body;

    try {
        const user = await User.findOne({
            email
        })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Incorrect user name or password. Try again.(1)"
            })
        }

        const passwordOK = bcrypt.compareSync(password, user.password);
        if (!passwordOK) {
            return res.status(400).json({
                success: false,
                message: "Incorrect user name or password. Try again.(2)"
            })
        }

        const accessToken = createToken({
            id: user._id
        });
        return res.status(200).json({
            succes: true,
            message: "Login successful",
            accessToken,
            user
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

});

UserRouter.post("/cart", auth, async (req, res) => {
    const user = await User.findById(req.user.id);
    try {

        if (!user)
            return res.status(400).json({
                succes: false,
                message: "User not found"
            });

        await User.findByIdAndUpdate(req.user.id, {
            cart: req.body.cart
        })
        return res.status(200).json({
            succes: true,
            message: "Product added to cart",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }


})
module.exports = UserRouter;