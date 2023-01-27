import express from 'express';
import { UserModel, validate } from '../model/user.js'
import bcrypt from 'bcrypt'

const router = express();

// Registration 
router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }

        const user = UserModel.findOne({ email: req.body.email });
        if (user) {
            return res.status(409).send("email already exists.");
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = bcrypt.hash(req.body.password, salt);

        await new UserModel({ ...req.body, password: hashPassword }).save();
        res.status(200).send("User Created Successfully.")
    } catch (error) {
        res.status(500).send({ message: "internal server error" })
    }
})