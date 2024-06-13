const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router
    .post("/user", userController.createUser)
    .get("/user/:id", userController.getUserByID)
    .get("/user", userController.getUsers);
// .delete("user/:id", deleteUserByID)
// .update("user/:id", updateUserByID);

module.exports = router;
