window.onload = function() {
	Crafty.init(500,350, document.getElementById('game'));

	Crafty.scene('testCollision',function() {
		Crafty.background('#999');

		Crafty.e('2D, Canvas, Color, MoveTo, Collision ,WiredHitBox')
			.attr({x:0,y:0,h:40,w:40})
			.color(color.five);
			.collision(new Crafty.polygon([0,0],[45,0],[45,45],[0,45]));

		Crafty.e('2D, Canvas, Color, Enemy, Collision ,WiredHitBox')
			.attr({x:100,y:100,h:40,w:40})
			.color('#ff0')
			.collision(new Crafty.polygon([0,0],[45,0],[45,45],[0,45]));;
	})

	Crafty.scene('testCollision');
}