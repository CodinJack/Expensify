const { db } = require('../database/db');

exports.addExpense = async (req, res) => {
    const { title, amount, description, date } = req.body;

    if (!title || !description || !date) {
        return res.status(400).json({ message: 'All fields are required!' });
    }
    if (amount <= 0 || typeof amount !== 'number') {
        return res.status(400).json({ message: 'Amount must be a positive number!' });
    }

    const query = `
    INSERT INTO expenses (title, amount, description, date)
    VALUES (?, ?, ?, ?)
  `;

    db.query(query, [title, amount, description, date], (err, result) => {
        if (err) {
            console.error('Error inserting expense: ', err);
            return res.status(500).json({ message: 'Server Error' });
        }
        res.status(200).json({ message: 'Expense Added : ', expenseId: result.insertId });
    });
};

exports.getAllExpenses = async (req, res) => {
    try {
        const query = 'SELECT * FROM expenses ORDER BY createdAt DESC';
        db.query(query, (err, results) => {
            if (err) {
                console.error('Error fetching expenses: ', err);
                return res.status(500).json({ message: 'Server Error' });
            }
            res.status(200).json(results);
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getExpenseByID = async (req, res) => {
    const { id } = req.params;

    const query = 'SELECT * FROM expenses WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching expense: ', err);
            return res.status(500).json({ message: 'Server Error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.status(200).json(results[0]);
    });
};

exports.deleteExpenseByID = async (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM expenses WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting expense: ', err);
            return res.status(500).json({ message: 'Server Error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.status(200).json({ message: 'Expense Deleted' });
    });
};
