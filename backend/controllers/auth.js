const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.checkLoginDetails = async (req, res) => {
    const { user, pass } = req.body;
    const data = await prisma.users.findUnique({
        where: {
            username: user,
        },
    });
    console.log(data);
};
