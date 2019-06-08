const socket = io.connect();

socket.on('my player', data => {
	player = new Player(data.id, data.username);
});

socket.on('waiting players', data => {
	console.log(data);
});

socket.on('new player', data => {
	console.log(data);
});