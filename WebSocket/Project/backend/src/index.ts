import {WebSocketServer,WebSocket} from "ws";


const websocket = new WebSocketServer({port:4040});

let allSockets:WebSocket[] = [];
websocket.on('connection', (socket:WebSocket) => {
    console.log("Websocket connection connected");
    allSockets.push(socket);

socket.on("message",(data)=>{
  allSockets.forEach(socket=>{
      socket.send(data.toString())
  })

})
})

