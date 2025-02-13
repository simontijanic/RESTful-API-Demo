const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        minlength: [2, "Username must be at least 2 characters long"],
        maxlength: [20, "Username must be at most 20 characters long"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true,
        minlength: [8, "Password must be at least 8 characters long"],
        maxlength: [50, "Password must be at most 50 characters long"]
    }
})

module.exports = mongoose.model("User", userSchema)