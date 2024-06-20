const { PrismaClient } = require("../backend/node_modules/.prisma/client");
const prisma = new PrismaClient();

exports.addBalance = async (req, res) => {
    const { user_id, amount } = req.body;

    if (amount === undefined || typeof amount !== "number") {
        return res.status(400).json({ message: "Amount must be a number!" });
    }

    try {
        const balance = await prisma.balance.create({
            data: {
                user_id,
                amount,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
        res.status(200).json({
            message: "Balance Added",
            balanceId: balance.id,
        });
    } catch (error) {
        console.error("Error adding balance: ", error);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getBalance = async (req, res) => {
    try {
        const balance = await prisma.balance.findFirst({
            orderBy: {
                createdAt: "desc",
            },
        });

        if (!balance) {
            return res.status(404).json({ message: "No balance record found" });
        }

        res.status(200).json(balance);
    } catch (error) {
        console.error("Error fetching balance: ", error);
        res.status(500).json({ message: "Server Error" });
    }
};
