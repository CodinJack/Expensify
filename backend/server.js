const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

const { readdirSync } = require("fs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cors());
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

//routes
readdirSync("./routes").map((route) =>
    app.use("/api/", require("./routes/" + route))
);

app.set("views", "view");
app.set("view engine", "ejs");
app.get("/log-in", (req, res) => res.render("log-in"));
app.get("/", (req, res) => {
    res.render("index", { user: req.user });
});
app.get("/failure", (req, res) => res.render("failure"));

const server = () => {
    app.listen(PORT, () => {
        console.log("Listening on port:", PORT);
    });
};

server();

process.on("SIGINT", async () => {
    await prisma.$disconnect();
    process.exit(0);
});
