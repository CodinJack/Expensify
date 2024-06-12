const express = require("express");
const router = express.Router();

router.post("/login", createUsers);

module.exports = router;
