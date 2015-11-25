var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

// app.get('/', function(req, res) {
// 	res.render('index', { title: 'Express'});
// });

io.on('connection', function(socket) {
	socket.broadcast.emit('chat message', 'A user has connected');

	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});

	socket.on('disconnect', function() {
		socket.broadcast.emit('chat message', 'A user has disconnected');
	});
});
