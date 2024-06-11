import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const express = require("express");
const router = express.Router();

router
    .post("/users", createUsers)
    .get("/users", getUsers)
    .delete("users/:id", deleteUsers)
    .update("users/:id", updateUsers);

module.exports = router;
