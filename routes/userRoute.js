const router = require("express").Router();

const userController = require("../controllers/userController")

router.get("/api/indexPage", userController.getIndexPage)

module.exports = router