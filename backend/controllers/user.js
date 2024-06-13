const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

// router
//     .post("/user", createUser)
//     .get("/user", getUsers)
//     .get("user/:id", getUserByID)
//     .delete("user/:id", deleteUserByID)
//     .update("user/:id", updateUserByID);

exports.createUser = async (req, res) => {
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        if (err) {
            return next(err);
        } else {
            try {
                const user = await prisma.user.create({
                    data: {
                        username: req.body.username,
                        password: hashedPassword,
                    },
                });

                console.log(user);
                res.json({ msg: "User was created successfully." }).status(201);
            } catch {
                res.json({ msg: "User was not created." }).status(400);
            }
        }
    });
};

exports.getUsers = async (req, res) => {
    const users = await prisma.user.findMany();
    return res.json(users);
};

exports.getUserByID = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.params.id,
        },
    });
    if (user) {
        return res.json(user);
    }
    return res.json({ msg: "user doesn't exist" });
};

exports.deleteUserByID = async (req, res) => {
    const user = await prisma.user.delete({
        where: {
            id: req.params.id,
        },
    });
    if (user) {
        return res.json(user);
    }
    return res.json({ msg: "user doesn't exist" });
};

exports.updateUserByID = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.params.id,
        },
    });

    if (req.body.username) {
        user.username = req.body.username;
    }
    user = await prisma.user.update({
        where: {
            id: req.params.id,
        },
        data: {
            username: user.username,
        },
    });

    if (user) {
        return res.json({ msg: "user was updated successfully." });
    }
    return res.json({ msg: "failed." });
};
