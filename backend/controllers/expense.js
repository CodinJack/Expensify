const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.addExpense = async (req, res) => {
    const { user_id, title, amount, type, date, category, description } = req.body;

    if (!title || !description || !date || !category) {
        return res.status(400).json({ message: 'All fields are required!' });
    }
    if (amount <= 0 || typeof amount !== 'number') {
        return res.status(400).json({ message: 'Amount must be a positive number!' });
    }

    try {
        const expense = await prisma.expenses.create({
            data: {
                user_id,
                title,
                amount,
                type,
                date: new Date(date),
                category,
                description,
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
