window.onload = function() {
	Crafty.init(document.getElementById('game'));

	Crafty.scene('game',function() {
		Crafty.background('#999');

		initGUIScene();

		Crafty.e('2D, DOM, Color, MoveTo, WiredHitBox,PlayerCollision,Player')
			.attr({x:0,y:0,h:40,w:40})
			.color(color.five)
			.collision(new Crafty.polygon([0,0],[40,0],[40,40],[0,40]));

		Crafty.e('2D, DOM, Color, NormalEnemy, Collision,WiredHitBox')
			.attr({x:100,y:100,h:40,w:40})
			.color(color.three)
			.collision(new Crafty.polygon([0,0],[40,0],[40,40],[0,40]));

		Crafty.e('2D, DOM, Color, NormalEnemy, Collision,WiredHitBox')
			.attr({x:200,y:200,h:40,w:40})
			.color(color.five)
			.collision(new Crafty.polygon([0,0],[40,0],[40,40],[0,40]));

		Crafty.e('Score')
			.attr({x:100,y:200,h:50,w:50})
			.text(0)
			.textColor('#f00')
			.textFont({ size: '20px', weight: 'bold' });
	});

	Crafty.scene('game');
}