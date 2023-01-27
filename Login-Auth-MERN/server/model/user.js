import mongoose from 'mongoose';

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
    },
    created:{
        type:Date, 
        default:Date.now
    }
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel