import express from 'express'
import UserModel from '../model/user.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

let router = express.Router();

// Get All users

/*
    USAGE : Get all the users
    URL:http://127.1.0.7:7000/user/all
    Method:Get
    Fields:no-fields
*/

router.get("/all", async (req, res) => {
    try {
        let users = await UserModel.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
})

// Get Single user.

/*
    USAGE : Get single user.
    URL:http://localhost:5000/user/:id
    Method:Get
    Fields:no-fields
*/

router.get("/:id", async (req, res) => {
    try {
        let userId = req.params.id;

        let user = await UserModel.findById(userId);
       
        if (!user) {
            res.status(401).json({
                result: "user not registered."
            })
        }
        else{
            res.status(200).json({
                result: "Single Product",
                userDetails: user
            })
        }

    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
})

   // Registration

/*
 API URL: http://127.1.0.7:7000/user/register
 Method: POST
 Req Fields: name, email, password
 Access Type: public
*/

router.post("/register", async (req, res) => {
    try {
        let { firstName, lastName, email, password } = req.body
        console.log(firstName);
        let userResult = await UserModel.findOne({ email: email });
        if (userResult) {
            return res.status(401).json({
                Status: "User already exists"
            })
        }
        //hash the password or encode the password
        let salt = bcrypt.genSaltSync(10);
        password = await bcrypt.hash(password, salt)
        console.log(password);

        // userdata connecting with Schema
        let user = new UserModel({ firstName, lastName, email, password })
        console.log(user)
        let userSave = await user.save(); // store into database
        res.status(200).json({
            Status: "Registered Successfully",
            userDetails: user
        })
    }
    catch (err) {
        res.status(500).json({
            msg: err.message
        })
    }
})


// Login

/*
 API URL: http://127.1.0.7:7000/user/login
 Method: POST
 Req Fields: email, password
 Access Type: public
*/

router.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await UserModel.findOne({ email: email });
        console.log(user)
        if (!user) {
            res.status(401).json({
                error: "User not Registered"
            })
        }

        // Verify the password
        let flag = bcrypt.compareSync(password, user.password)
        if (!flag) {
            return res.status(404).json({
                error: "Wrong Password"
            })
        }
        
        let payload = {
            id: user.id,
            name: user.name
        }

        //secretkey
        let secretkey = process.env.SECRET_KEY

        //generate JWT token
        jwt.sign(payload, secretkey, { expiresIn: "3d" }, (err, token) => {
            if (err) throw err
            res.status(200).json({
                Status: "Login Successfull",
                token: token
            })
        })
    }
    catch (err) {
        res.status(500).json({
            msg: err.message
        })
    }
})

// Update User.

/*
 API URL: http://127.1.0.7:7000/user/:id
 Method: PUT
 Req Fields: id
 Access Type: public
*/

router.put("/:id", async (req, res) => {
    try {
        let userId = req.params.id;

        let { name, email, password } = req.body;

        let user = await UserModel.findById(userId);
        if(!user){
            res.status(401).json({
                result:"User Not Found."
            })
        }

        let updateUser = await UserModel.findByIdAndUpdate(userId, {$set:{name, email, password}}, {new:true});
        res.status(200).json({
            result:"Updated Successfully",
            userDetails: updateUser
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
})

// Delete User.

/*
 API URL: http://localhost:5000/user/:id
 Method: DELETE
 Req Fields: id
 Access Type: public
*/

router.delete("/:id", async (req, res) => {
    try {
        let userId = req.params.id;
        let user = await UserModel.findById(userId);
        if (!user) {
            return res.status(401).json({
                result: "user not found!"
            })
        }

        let delUser = await UserModel.findByIdAndDelete(userId);
        res.status(200).json({
            result: "deleted successfully.",
            userDetails: delUser
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
})

export default router