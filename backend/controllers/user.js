const { PrismaClient } = require("../backend/node_modules/.prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

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
    if (!req.session.passport) {
        return res.status(401).json({ msg: "You're not authorized!" });
    }
    if (req.session.passport.user !== 0) {
        return res.status(401).json({ msg: "You're not authorized!" });
    }
    const users = await prisma.user.findMany();
    return res.json(users);
};

exports.getUserByID = async (req, res) => {
    if (req.session) {
        return res.status(401).json({ msg: "You're not authorized!" });
    }
    if (!req.session.passport) {
        return res.status(401).json({ msg: "You're not authorized!" });
    }
    if (req.session.passport.user !== 0) {
        return res.status(401).json({ msg: "You're not authorized!" });
    }
    const user = await prisma.user.findUnique({
        where: {
            id: Number(req.params.id),
        },
    });
    if (user) {
        return res.json(user);
    }
    return res.json({ msg: "user doesn't exist" });
};

exports.deleteUserByID = async (req, res) => {
    if (!req.session.passport) {
        return res.status(401).json({ msg: "You're not authorized!" });
    }
    if (req.session.passport.user !== 0) {
        return res.status(401).json({ msg: "You're not authorized!" });
    }
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
    if (!req.session.passport) {
        return res.status(401).json({ msg: "You're not authorized!" });
    }
    if (req.session.passport.user !== 0) {
        return res.status(401).json({ msg: "You're not authorized!" });
    }
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
