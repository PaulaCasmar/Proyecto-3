const jwt = require("jsonwebtoken");
// const User = require("../models/User");

const auth = (req, res, next) => {
    try {
        const token = req.header("Authorization")
        if (!token) return res.status(400).json({
            success: false,
            message: "Invalid Authentication(missing token)"
        });

        jwt.verify(token, process.env.ACCES_TOKEN_SECRET, (error, user) => {
            if (error) return res.status(400).json({
                success: false,
                message: "Invalid Authentication(invalid token)"
            });

            req.user = user
            console.log(user.surname)
            next();
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

}; 

module.exports = auth;