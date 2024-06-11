const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20
    },
    type: {
        type: String,
        default:"expense"
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 20,
        trim: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Expense', ExpenseSchema)