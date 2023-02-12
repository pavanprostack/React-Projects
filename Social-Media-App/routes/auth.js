// step : 3
const express = require('express');
const router = express.Router();
const UserModel = require("../models/User")
const bcrypt = require('bcrypt');


// Register
router.post("/register", async (req, res) => {
    try {
        // generate hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        // create User
        const newUser = await new UserModel({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })

        const regdUser = await UserModel.findOne({ username: newUser.username });
        if (regdUser) {
            return res.status(401).json({
                msg: "user already registered"
            })
        }
        // save user
        const user = await newUser.save();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }


})

// Login
router.post("/login", async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });
        !user && res.status(404).json({
            msg: "user not found"
        });

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            res.status(400).json({
                msg: "Wrong Password",
            });
        } else {
            res.status(200).json(user)
        }

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router