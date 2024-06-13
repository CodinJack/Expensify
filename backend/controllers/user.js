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
