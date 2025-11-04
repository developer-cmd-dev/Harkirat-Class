import { PrismaClient } from "@prisma/client";
import express, {} from 'express';
import * as assert from "node:assert";
const client = new PrismaClient();
const app = express();
const port = 4000;
client.$connect().then(() => {
    console.log("Connected to Prisma client...");
    app.listen(port, () => console.log(`Listening on port ${port}`));
}).catch(err => console.log(err));
app.use(express.json());
app.post("/signup", async (req, res) => {
    const { username, email, password, age } = req.body;
    try {
        const response = await client.users.create({
            data: {
                username: username,
                email: email,
                password: password,
                age: age,
            }
        });
        res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
app.post("/createTodo/:id", async (req, res) => {
    const { title, discription, completed } = req.body;
    const userId = req.params.id;
    try {
        const todoResponse = await client.todo.create({
            data: {
                title: title,
                discription: discription,
                completed: completed,
                userId: Number(userId),
            }
        });
        res.status(200).json(todoResponse);
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=index.js.map