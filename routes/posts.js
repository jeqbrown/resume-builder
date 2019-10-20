const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../model/User');
const Post = require('../model/Post');

router.get('/', verify, async (req,res) => {
    const posts = await Post.find({ownerId: req.user._id});
    res.send(posts);
});

router.post('/add', verify, async (req,res) => {
    const post = new Post({
        ownerId: req.user._id,
        title: req.body.title,
        content: req.body.content
    });
    console.log(post);
    try{
        const savedPost = await post.save();
        res.send(savedPost);
    }
    catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;