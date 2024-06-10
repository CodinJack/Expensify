const express = require("express")
const router = express.Router();

router.post('/add-balance', addBalance)
      .get('/get-balance', getBalance)
      .post('/add-expense', addExpense)
      .get('get-expenses', getExpenses)
      .get('get-expense/:id', getExpense)
      .delete('delete-expense/:id', deleteExpense)

module.exports = router