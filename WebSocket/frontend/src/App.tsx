
import './App.css'
import {useEffect, useRef, useState} from "react";

function App() {
        const [socket,setSocket]=useState();
        const inputRef = useRef();
        function sendMessage():void{
            const message = inputRef.current.value;
            socket.send(message);
        }

    useEffect( () => {
      const ws = new WebSocket("ws://localhost:4001");
      // @ts-ignore
        setSocket(ws);
      // @ts-ignore
        ws.onopen=(ev)=>{
            console.log("WebSocket Connection Open");
        }

        ws.onmessage=(ev)=>{
            alert(ev.data)
        }

        ws.onerror = (ev:Event)=>{
            console.log("WebSocket Connection Error",ev);
        }

        ws.close=(ev)=>{
            console.log(ev)
        }
    }, []);

  return (
    <>
      <div>
          <input ref={inputRef} type={"text"} placeholder={"enter message here"} className={"py-3 px-2 border border-gray-600 rounded-lg"}/>
      </div>

      <div className="card">
        <button onClick={sendMessage}>
            send message
        </button>

      </div>

    </>
  )
}

export default App
