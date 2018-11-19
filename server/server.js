
const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 3000;
const socketIO = require('socket.io');
const http = require('http');
const server = http.createServer(app)
const io = socketIO(server);
app.use(express.static(path.join(__dirname,"/../public/")));

io.on('connection',function(socket){
      console.log('new user connected...');

      socket.on('createMessage',(message)=>{
          console.log('createMessage',message);
          io.emit('newMessage',{
            from:message.from,
            text:message.text,
            createdAt: new Date().toLocaleTimeString()
        });
      })

    socket.on('disconnect',function(){
        console.log('new user was disconnected..')
      
    });


});




server.listen(port,()=>{
    console.log(`server started on localhost://${port}`)
});




