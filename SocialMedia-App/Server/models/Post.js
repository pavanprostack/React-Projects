// step:5
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        max: 500
    },
    img: {
        type: String,
    },
    likes: {
        type: Array,
        default: []
    }
    
}, { timestamps: true })

const PostModel = mongoose.model("Post", PostSchema)

module.exports = PostModel