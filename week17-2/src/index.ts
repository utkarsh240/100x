import { WebSocketServer,WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 8080 });


let allSockets = {
    "room1"
}

wss.on('connection',(socket)=>{
    allSockets.push(socket);
    
    console.log("user connected"+ userCount);

    socket.on("message",(message)=>{
        console.log("message recieved " + message.toString())
        allSockets.forEach(s=>{
            s.send(message.toString()+ "sent from server")
        })
        
    })

    socket.on("disconnect",()=>{
        allSockets = allSockets.filter(x => x!= socket);
    })
})

