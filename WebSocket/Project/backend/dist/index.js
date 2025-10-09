import { WebSocketServer, WebSocket } from "ws";
const websocket = new WebSocketServer({ port: 4040 });
let allSockets = [];
websocket.on('connection', (socket) => {
    console.log("Websocket connection Established");
    allSockets.push(socket);
    socket.on("message", (data) => {
        allSockets.forEach(socket => {
            socket.send(data.toString());
        });
    });
});
//# sourceMappingURL=index.js.map