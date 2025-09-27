import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 4001 });
wss.on('connection', (socket) => {
    console.log("Connected to the server");
    socket.send("Hey there!");
    socket.on("message", (message) => {
        if (message.toString() === "ping") {
            socket.send("pong");
        }
    });
});
//# sourceMappingURL=index.js.map