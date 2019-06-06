var ENGINE = {
	init:function(){
		GAMESTATE.loading();
		setTimeout(() => {
			ENGINE.loop()
		}, 3000);
	},
	loop:function(){
		animation = requestAnimationFrame(ENGINE.loop);
		ENGINE.update();
		ENGINE.render();
		// cancelAnimationFrame(animation);
	},
	update:function(){
		GAMESTATE.playing();
	},
	render:function(){
		CANVAS.draw();
		GAMESTATE.playing();
	}
};

ENGINE.init();