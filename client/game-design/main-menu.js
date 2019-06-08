function enterRoom() {
	socket.emit('join room');
};

function startGame() {
	player.spawn();
	SCORE.reset();
	GAMESTATE.playing();
};