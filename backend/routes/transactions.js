const express = require("express");
const router = express.Router();

router
    .post("/balance", addBalance)
    .get("/balance", getBalance)
    .post("/expense", addExpense)
    .get("/expenses", getAllExpenses)
    .get("/expense/:id", getExpenseByID)
    .delete("/delete-expense/:id", deleteExpenseByID);

module.exports = router;
