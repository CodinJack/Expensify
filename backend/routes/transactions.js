const express = require("express");
const router = express.Router();
const {addExpense, getAllExpenses, getExpenseByID, deleteExpenseByID} = require("../controllers/expense");
const {addBalance, getBalance} = require("../controllers/balance");

router
    .post("/balance", addBalance)
    .get("/balance", getBalance)
    .post("/expense", addExpense)
    .get("/expenses", getAllExpenses)
    .get("/expense/:id", getExpenseByID)
    .delete("/delete-expense/:id", deleteExpenseByID);

module.exports = router;
