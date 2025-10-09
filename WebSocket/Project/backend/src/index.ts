import {WebSocketServer,WebSocket} from "ws";


const websocket = new WebSocketServer({port:4040});

interface User {
    socket:WebSocket;
    room:string;
}

let allSockets:User[] = [];
websocket.on('connection', (socket:WebSocket) => {
    console.log("Websocket connection Established");


socket.on("message",(message)=>{
    const parsedMessage = JSON.parse(message as  unknown as string);
    if (parsedMessage.type ==="join"){
        allSockets.push({
            socket:socket,
            room:parsedMessage.payload.roomId,
        })
    }

    if (parsedMessage.type==="chat"){
        let currentUserRoom = allSockets.find((x)=>x.socket==socket)?.room;

        allSockets.map((x)=>{
            if (x.room==currentUserRoom){
                socket.send(parsedMessage.payload.message)
            }
        })

    }

})
})

