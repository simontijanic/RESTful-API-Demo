const Post = require("../models/postModel");
const User = require("../models/userModel");

exports.getIndexPage = async (req, res) => {
  try {

    const start = parseInt(req.query.start) || 0;

    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip(start)
      .limit(5)
      .populate("author", "username");


    res.status(201).json({ posts });
  } catch (err) {
    res.status(400).json({ posts: null });
  }
};

exports.getUserPage = async (req, res) => {
  if (!username || username === "undefined") return res.status(400).json({ user: null });
  try {
    const user = await User.findOne({ username: req.params.username }).populate(
      "posts"
    );
    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ user: null });
  }
};

exports.getHomeUserPage = async (req, res) => {
  const user = req.session.user;
  if (!user && user !== req.params.username) return res.status(400).json({ user: null });
  try {
    const user = await User.findOne({ username: req.params.username }).populate(
      "posts"
    );
    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ user: null });
  }
};
