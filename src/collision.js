Crafty.c('PlayerCollision',{

	handlePlayerCollision: function(event) {
		var score = Crafty('Score'),
			enemy = event[0].obj;
		if (enemy.color() == this.color()) {
			score.text(+score.text()+1);
			enemy.destroy();
		} else {
			if (enemy.available) {
				score.text(+score.text()-1);
				enemy.delay(function() {
					enemy.available = true;
				},500);
				enemy.available = false;
			}

		}
	},

	init: function() {
		this.requires('Collision');

		this.onHit('Enemy',this.handlePlayerCollision);
	}
});