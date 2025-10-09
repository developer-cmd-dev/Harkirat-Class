import { WebSocketServer, WebSocket } from "ws";
const websocket = new WebSocketServer({ port: 4040 });
websocket.on('connection', (socket) => {
    console.log("Websocket connection connected");
    socket.on("message", (data) => {
        console.log(data.toString());
    });
});
//# sourceMappingURL=index.js.map