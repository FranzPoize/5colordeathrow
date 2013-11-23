Crafty.c('PlayerCollision',{

	handlePlayerCollision: function(event) {
		var score = Crafty('Score'),
			enemy = event[0].obj;
		if (enemy.color() == this.color()) {
			score.text(+score.text()+enemy.getScore(true));
			
			enemy.resolveCollision(true);
		} else {
			if (enemy.available) {
				score.text(+score.text()+enemy.getScore(false));
				enemy.delay(function() {
					enemy.available = true;
				},500);
				enemy.available = false;
			}

			enemy.resolveCollision(true);
		}
	},

	init: function() {
		this.requires('Collision');

		this.onHit('Enemy',this.handlePlayerCollision);
	}
});