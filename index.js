require("dotenv").config();

const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

const userRoute = require("./routes/userRoute")
const authMiddleware = require("./middleware/authUser")
const databaseController = require("./controllers/databaseController")

app.use(authMiddleware.setUserAuth)
app.use(userRoute);


app.listen(process.env.PORT, () => {
    databaseController();
    console.log(`Listening on port ${process.env.PORT}`);
});