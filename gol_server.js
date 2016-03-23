
/*
  Written by Kyle Arch
*/

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use('/js', express.static(__dirname + '/site/js'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/site/html/index.html');
});


io.on('connection', function(socket){
  console.log('User connected from ' + socket.request.connection.remoteAddress);

  socket.on('disconnect', function(){
    console.log('User disconnected from ' + socket.request.connection.remoteAddress);
  });

  socket.emit('board init', {w: 3, h:4});

});

http.listen(3000, function(){
  console.log('Listening on *:3000');
});
