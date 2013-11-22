Crafty.c('PlayerCollision',{

	handlePlayerCollision: function(event) {
		var score = Crafty('Score');
		if (event[0].obj.color() == this.color()) {
			score.text(+score.text()+1);
			event[0].obj.destroy();
		} else {
			score.text(+score.text()-1);
		}
	},

	init: function() {
		this.requires('Collision');

		this.onHit('Enemy',this.handlePlayerCollision);
	}
});