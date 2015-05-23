var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var User = require('./user.js');

server.listen(80);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


var users = {};

io.on('connection', function (socket) {

  socket.emit('user.list', users);

  socket.on('user.create', function (data) {
    var user = new User(data);
    users[user.id] = user;

    socket.broadcast.emit('user.show', user);
  });

  socket.on('user.updatePosition', function(data){
    users[data['id']].updatePosition(data);
    socket.broadcast.emit('user.positionUpdated', data);
  });
});
