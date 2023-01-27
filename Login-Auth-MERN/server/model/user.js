import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'
import Joi from 'joi';
import passwordComplexity from 'joi-password-complexity'

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ id: this.id }, process.env.SECRET_KEY, { expiresIn: "3d" })
    return token;
}

const UserModel = mongoose.model("user", userSchema);
// Validating schema with joi package.
const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().required().label("Email"),
        password: passwordComplexity().required().label("Password")
    })
    return schema.validate(data)
}

export { userSchema, validate }