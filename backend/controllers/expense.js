const { PrismaClient } = require('../backend/node_modules/.prisma/client');
const prisma = new PrismaClient();

exports.addExpense = async (req, res) => {
    const { title, amount, date, description } = req.body;

    if (!title || !description || !date) {
        return res.status(400).json({ message: 'All fields are required!' });
    }
    
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
        return res.status(400).json({ message: 'Amount must be a positive number!' });
    }

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
        return res.status(400).json({ message: 'Invalid date format!' });
    }

    try {
        const expense = await prisma.expenses.create({
            data: {
                title,
                amount: parsedAmount,
                date: parsedDate,
                description
            },
        });
        res.status(200).json({ message: 'Expense Added', expenseId: expense.id });
    } catch (error) {
        console.error('Error inserting expense: ', error);
        res.status(500).json({ message: 'Server Error' });
    }
};


exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await prisma.expenses.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        res.status(200).json(expenses);
    } catch (error) {
        console.error('Error fetching expenses: ', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getExpenseByID = async (req, res) => {
    const { id } = req.params;

    try {
        const expense = await prisma.expenses.findUnique({
            where: { id: parseInt(id) },
        });

        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        res.status(200).json(expense);
    } catch (error) {
        console.error('Error fetching expense: ', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteExpenseByID = async (req, res) => {
    const { id } = req.params;

    try {
        const expense = await prisma.expenses.delete({
            where: { id: parseInt(id) },
        });

        res.status(200).json({ message: 'Expense Deleted' });
    } catch (error) {
        console.error('Error deleting expense: ', error);
        res.status(500).json({ message: 'Server Error' });
    }
};
