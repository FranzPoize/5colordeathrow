Crafty.c('PlayerCollision',{

	handlePlayerCollision: function(event) {
		var score = Crafty('Score'),
			enemy = event[0].obj;
		if (enemy.color() == this.color()) {
			score.text(+score.text()+1);
			enemy.destroy();
		} else {
			score.text(+score.text()-1);
		}
	},

	init: function() {
		this.requires('Collision');

		this.onHit('Enemy',this.handlePlayerCollision);
	}
});