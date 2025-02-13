const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: [2, "You need more then 2 characters"],
        maxlength: [100, "Title cant be more then 35 characters"]
    },
    body: {
        type: String,
        required: true,
        minlength: [2, "You need more then 2 characters"],
        maxlength: [100, "Content cant be more then 100 characters"]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Post", postSchema)