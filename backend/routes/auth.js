import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const express = require("express");
const router = express.Router();

router.post("/login", checkLoginDetails);

module.exports = router;
