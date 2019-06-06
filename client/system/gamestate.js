const GAMESTATE = {
	loading: () => {
		context.fillStyle = 'white';
		context.font = "30px Arial";
		context.fillText('Loading...', CANVAS.width / 2 - 55, CANVAS.height / 2 - 15);
	},
	menu: () => {
		console.log('menu');
	},
	playing: () => {
		context.fillStyle = 'black';
		context.font = "30px Arial";
		context.fillText('Playing...', CANVAS.width / 2 - 55, CANVAS.height / 2 - 15);
	},
	over: () => {
		console.log('game over');
	}
};