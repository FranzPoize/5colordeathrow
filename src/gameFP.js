window.onload = function() {
	Crafty.init(500,350, document.getElementById('game'));

	Crafty.scene('testCollision',function() {
		Crafty.background('#000');

		Crafty.e('2D, Canvas, Color, MoveTo').attr({x:0,y:0,h:40,w:40}).color('#f00');
	})

	Crafty.scene('testCollision');
}