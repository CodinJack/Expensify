const { PrismaClient } = require("../node_modules/@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const path = require("path");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const router = express.Router();
const authController = require("../controllers/auth");

//router.post("/login", checkLoginDetails);
router.post(
    "/log-in",
    passport.authenticate("local", {
        successRedirect: "/successful",
        failureRedirect: "/failed",
    })
);

router.get("/log-out", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
});
module.exports = router;
