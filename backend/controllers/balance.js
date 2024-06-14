//const { db } = require('../database/db');

exports.addBalance = async (req, res) => {
    // const { amount } = req.body;

    // if (amount === undefined || typeof amount !== 'number') {
    //     return res.status(400).json({ message: 'Amount must be a number!' });
    // }

    // const query = 'INSERT INTO balances (amount, createdAt) VALUES (?, NOW())';

    // db.query(query, [amount], (err, result) => {
    //     if (err) {
    //         console.error('Error adding balance: ', err);
    //         return res.status(500).json({ message: 'Server Error' });
    //     }
    //     res.status(200).json({ message: 'Balance Added', balanceId: result.insertId });
    // });
};


exports.getBalance = async (req, res) => {
    // const query = 'SELECT * FROM balances ORDER BY createdAt DESC LIMIT 1';

    // db.query(query, (err, results) => {
    //     if (err) {
    //         console.error('Error fetching balance: ', err);
    //         return res.status(500).json({ message: 'Server Error' });
    //     }
    //     if (results.length === 0) {
    //         return res.status(404).json({ message: 'No balance record found' });
    //     }
    //     res.status(200).json(results[0]);
    // });
};
