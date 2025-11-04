import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
async function main() {
    // const response = await client.users.create({
    //     data:{
    //         username:"admin",
    //         email:"admin@gmail.com",
    //         password:"admin",
    //         age:45,
    //     }
    // })
    const find = await client.users.findFirst({
        where: {
            id: 1
        },
        select: {
            username: true
        }
    });
    console.log(find);
}
main();
//# sourceMappingURL=index.js.map