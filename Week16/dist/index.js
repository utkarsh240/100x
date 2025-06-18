"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
// wss.on('connection', function connection(ws) {
//   ws.on('error', console.error);
//   ws.on('message', function message(data) {
//     console.log('received: %s', data);
//   });
//   ws.send('something');
// });
wss.on("connection", function (socket) {
    console.log("user connected");
    setInterval(() => {
        socket.send("current price of eth is" + Math.random());
    }, 500);
});
