require("dotenv").config();

const express = require("express");
const session = require("express-session");
const cors = require("cors");

const app = express();


app.use(express.json())
app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 600000 * 60,
    },
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