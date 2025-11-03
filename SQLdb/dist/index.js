import express, {} from 'express';
import { Client } from 'pg';
const app = express();
app.use(express.json());
const pgClient = new Client("postgresql://neondb_owner:npg_aAi8nbojG9JS@ep-bitter-sound-ads8ov60-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
pgClient.connect().then(() => console.log("DB Connected")).catch((error) => console.log(error));
app.post("/signup", async (req, res) => {
    try {
        const { username, email, password, city, country } = req.body;
        const insertUser = `INSERT INTO users (username,email,password) VALUES ($1,$2,$3) RETURNING id;`;
        const insertAddress = `INSERT INTO address (city,country,user_id) VALUES ($1,$2,$3);`;
        const insertUserResponse = await pgClient.query(insertUser, [username, email, password]);
        const userId = insertUserResponse.rows[0].id;
        console.log(userId);
        const inserAddressResponse = await pgClient.query(insertAddress, [city, country, userId]);
        console.log(inserAddressResponse.rows[0]);
        res.json({ message: "Sign up successfully" });
    }
    catch (error) {
        console.error(error);
        res.json({ message: "Something went wrong" });
    }
});
app.listen(3000, () => console.log(`Server is running on port:${3000}`));
//# sourceMappingURL=index.js.map