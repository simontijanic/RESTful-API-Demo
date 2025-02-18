const router = require("express").Router();

const userController = require("../controllers/userController")
const registrationController = require("../controllers/registrationController")

const authUser = require("../middleware/authUser")

router.get("/api/indexPage", userController.getIndexPage)
router.get("/api/:username", userController.getUserPage)
router.get("/api/home/:username", authUser.isAuthenticated, userController.getHomeUserPage)

router.post("/api/login", registrationController.logInUser)
router.post("/api/register", registrationController.createUser)

module.exports = router