let socket=io();

socket.on('connect',function(){
    console.log('connected to the server');

});

socket.on('newMessage',(data)=>{
    console.log('new Message',data);
})




socket.on('disconnect',function(){
    console.log('disconnected from the server')
});