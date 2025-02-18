const User = require("../models/userModel");

exports.createUser = async (req, res) => {
    try {
        const {username, password} = req.body;
        if (!username || !password) { return res.status(400).json({ user: null }); }

        const user = await User.create({username, password});

        res.status(201).json({ user });
    } catch (err) {
        res.status(400).json({ user: null });
    }
};

exports.logInUser = async (req, res) => {
    try {
        const {username,password} = req.body;
        if(!username || !password) { return res.status(400).json({ user: null }); }

        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.user = user;

        res.status(201).json({ user });
    } catch (err) {
        res.status(400).json({ user: null });
    }
};