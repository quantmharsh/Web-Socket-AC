import express from "express"
import { WebSocketServer } from "ws"
const app=express();
const port=5173;
const server=app.listen(port, ()=>{
    console.log("server listening on port ...", port)

})
const wss= new WebSocketServer({server});
wss.on("connection",(ws)=>{
    ws.on("message",(data)=>{
        console.log("data from client %s :  ", data)
        ws.send("Thank you buddy!")
    })
})