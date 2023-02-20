// step:6
const express = require('express');
const router = express.Router();
const PostModel = require("../models/Post")
const UserModel = require("../models/User")

// create post
router.post("/", async (req, res) => {
    const newPost = new PostModel(req.body);
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }
})

// update a post
router.put("/:id", async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
        if (post.userId == req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("Your post has been updated!")
        } else {
            res.status(403).json("you can update only you post!");
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

// delete a post
router.delete("/:id", async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
        if (post.userId == req.body.userId) {
            await post.deleteOne();
            res.status(200).json("Your post has been deleted!")
        } else {
            res.status(403).json("you can delete only you post!");
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

// like a post
router.put("/:id/like", async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("The post has been liked!")
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("your post has been disliked")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

// get a post
router.get("/:id", async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get timeline post
router.get("/timeline/all", async (req, res) => {
    try {
        const currentUser = await UserModel.findById(req.params.id);
        const userPosts = await PostModel.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return PostModel.find({ userId: friendId })
            })
        );
        res.json(userPosts.concat(...friendPosts))
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router