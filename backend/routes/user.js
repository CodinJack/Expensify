const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.post("/user", userController.createUser);
// .get("/user", getUsers)
// .get("user/:id", getUserByID)
// .delete("user/:id", deleteUserByID)
// .update("user/:id", updateUserByID);

module.exports = router;
