const express = require('express');
const cors = require('cors');
const { readdirSync } = require('fs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map((route) => app.use('/api/', require('./routes/' + route)));

const server = () => {
    app.listen(PORT, () => {
        console.log('Listening on port:', PORT);
    });
};

server();

process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
});
