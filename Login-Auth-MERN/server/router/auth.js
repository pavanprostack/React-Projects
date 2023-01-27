import express from 'express';
import Joi from 'joi';
import { UserModel } from '../model/user.js';
import bcrypt from 'bcrypt';
const router = express();

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message })
        }

        const user = await UserModel.findOne({ email: req.body.email });
        if(!user){
            return res.status(401).send({message: "invalid Email or Password"});
        }
    
        const salt = bcrypt.genSalt(10);
    } catch (error) {

    }
})

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password")
    });
    return schema.validate(data)
}

