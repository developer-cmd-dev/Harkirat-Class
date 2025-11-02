import express, {} from 'express';
import { Client } from 'pg';
const app = express();
app.use(express.json());
const pgClient = new Client("postgresql://neondb_owner:npg_aAi8nbojG9JS@ep-bitter-sound-ads8ov60-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
pgClient.connect().then(() => console.log("DB Connected")).catch((error) => console.log(error));
app.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    const insertUser = `INSERT INTO users (username,email,password) VALUES ('${username}','${email}','${password}')`;
    const response = await pgClient.query(insertUser);
    res.json({ message: "Sign up successfully" });
});
app.listen(3000, () => console.log(`Server is running on port:${3000}`));
//# sourceMappingURL=index.js.map