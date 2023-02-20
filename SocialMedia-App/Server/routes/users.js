// step : 4
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserModel = require('../models/User');

// update user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch (error) {
                return res.status(500).json(error);
            }

        }
        try {
            const user = await UserModel.findByIdAndUpdate(req.params.id, { $set: req.body, });
            res.status(200).json("Account has been updated");
        } catch (error) {
            res.status(500).json(error);
        }

    } else {
        return res.status(403).json("You can update only your account!")
    }
})

// delete user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.user.isAdmin) {
        try {
            const user = await UserModel.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been Deleted!");
        } catch (error) {
            res.status(500).json(error);
        }

    } else {
        return res.status(403).json("You can delete only your account!")
    }
})

// get user
router.get("/:id", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        // To ignore some fields (or) keys
        const { password, updatedAt, ...other } = user._doc  // this will not visible in database
        res.status(200).json(other);
    } catch (error) {
        res.status(500).json(error);
    }
})

// follow user
router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await UserModel.findById(req.params.id);
            const currentUser = await UserModel.findById(req.body.userId);

            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } }); // requested person
                await currentUser.updateOne({ $push: { followings: req.params.id } }); // requesting person
                res.status(200).json("you has been followed!")
            } else {
                res.status(403).json("your already following this user!")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("You can't follow your self!")
    }

})

// unfollow user
router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await UserModel.findById(req.params.id);
            const currentUser = await UserModel.findById(req.body.userId);

            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await currentUser.updateOne({ $pull: { followings: req.params.id } }); 
                res.status(200).json("user has been unfollowed!")
            } else {
                res.status(403).json("your unfollowing this user!")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("You can't unfollow your self!")
    }

})


module.exports = router;
