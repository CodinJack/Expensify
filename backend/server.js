const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const { PrismaClient } = require("./backend/node_modules/.prisma/client");
const prisma = new PrismaClient();
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cors());
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.session());

//routes
const userRoutes = require("./routes/user");
app.use("/api", userRoutes);
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);
const transactionRoutes = require("./routes/transactions");
app.use("/transactions", transactionRoutes);

const server = () => {
    app.listen(PORT, () => {
        console.log("Listening on port:", PORT);
    });
};

server();

process.on("SIGINT", async () => {
    await prisma.$disconnect();
    process.exit(0);
});
