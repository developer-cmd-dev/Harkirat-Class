import { WebSocketServer, WebSocket } from "ws";
const websocket = new WebSocketServer({ port: 4040 });
let allSockets = [];
websocket.on('connection', (socket) => {
    console.log("Websocket connection Established");
    socket.on("message", (message) => {
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type === "join") {
            allSockets.push({
                socket: socket,
                room: parsedMessage.payload.roomId,
            });
        }
        if (parsedMessage.type === "chat") {
            let currentUserRoom = allSockets.find((x) => x.socket == socket)?.room;
            allSockets.map((x) => {
                if (x.room == currentUserRoom) {
                    socket.send(parsedMessage.payload.message);
                }
            });
        }
    });
});
//# sourceMappingURL=index.js.map