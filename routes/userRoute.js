const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({message: "User Route"})
})

module.exports = router