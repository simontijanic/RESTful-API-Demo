const Post = require("../models/postModel")
const User = require("../models/userModel")

exports.getIndexPage = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 }).limit(5)
        res.json({ posts })    
    }catch(err){
        res.json({ posts: null })
    }
}