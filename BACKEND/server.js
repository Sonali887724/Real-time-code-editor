import express from "express";
import {createServer } from "http";
import {Server } from "socket.io";
import {YSocketIO } from "y-socket.io/dist/server";//to establish communication protocol

const app=express();

const http=createServer();

const io=new Server(http,()=>{
    cors:{
        origin:"*"              //can access server from anywhere
        methods:["GET","POST"]  //access from these two methods
    }
})

//protocol establish
const YsocketIO=new YSocketIO(io);
YsocketIO.initialize(); //to initialize communication


app.get("/health",(req,res)=>{
    res.send({
        "status":"202",
        "message":"All is well"
    })
})

app.listen(4000,()=>{
    console.log("server is running");
})