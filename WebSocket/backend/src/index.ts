import {WebSocketServer,WebSocket} from "ws";


const wss = new WebSocketServer({port: 4001});


wss.on('connection', (socket:WebSocket) => {
    console.log("Connected to the server");
    socket.send("Hey there!");

    socket.on("message", (message:string) => {
        if (message.toString()==="ping"){
            socket.send("pong");
        }
    })
})