var express = require('express');
var router = express.Router();

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

io.on('connection', function(socket) {
	socket.broadcast.emit('chat message', 'A user has connected');

	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});

	socket.on('disconnect', function() {
		socket.broadcast.emit('chat message', 'A user has disconnected');
	});
});

module.exports = router;
