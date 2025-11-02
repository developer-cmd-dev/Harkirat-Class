import express from 'express';
import { Client } from 'pg';
const pgClient = new Client("postgresql://neondb_owner:npg_aAi8nbojG9JS@ep-bitter-sound-ads8ov60-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
async function main() {
    await pgClient.connect();
    const response = await pgClient.query('Select * from users where id=2');
    console.log(response.rows);
}
main();
//# sourceMappingURL=index.js.map