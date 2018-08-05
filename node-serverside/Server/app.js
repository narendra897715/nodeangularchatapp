const express = require('express');
const http = require('http');
const SocketIO = require('socket.io');
const {generatedmessage} = require('./message/message')
var app = express();
var server = http.createServer(app);
var io = SocketIO(server);
io.on('connection',(socket)=>{
    console.log('new user connected');
    socket.emit('newMessage',generatedmessage('Admin','welcome to chat room'));
    socket.broadcast.emit('newMessage',generatedmessage('Admin','new user joined'))
     socket.on('createMessage',(data,callback)=>{
          io.emit('newMessage',generatedmessage(data.from,data.text),callback('got it data saved'));
     })
    socket.on('disconnect',(socket)=>{
        console.log('disconnect from client');
    })
})
server.listen(3000,()=>{
    console.log('port is listening to 3000')
})
