const express = require('express');

const http = require('http');

const socketIO = require('socket.io');

const app = express();
const server =  http.createServer(app);
const io = socketIO(server);
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

io.on("connection", (socket)=>{
    console.log('hello from io')
})

app.get('/', (req, res) =>{
    res.send("hello world!");
})

server.listen(3000)