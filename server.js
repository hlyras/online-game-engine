const express = require('express');
const path = require("path");
const app = express();
const server = require('http').createServer(app);

app.use(express.static(path.join(__dirname, 'client')));

// Connection handler
const io = require('socket.io')(server);

var rooms = [{players: []},{players: []},{players: []},{players: []}];

io.on('connection', (socket) => {
	socket.on('connected', (username) => {
		socket.username = username;

		socket.emit('my player', {id:socket.id, username:socket.username});
		// socket.emit('new player', players);
		// socket.broadcast.emit('new player', players);
	});

	socket.on('join room', () => {
		let room = 0;
		for(i in rooms){
			if(rooms[i].players.length < 2){
				rooms[i].players.push({id: socket.id, username: socket.username});
				room = i;
				console.log(i)
				break;
			};
		};

		socket.join(room, () => {
			socket.emit('waiting players', rooms[room].players);
			socket.broadcast.to(room).emit(rooms[room].players);
		});
	});
});

// Server host
const port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log('server listening on port ' + port);
});