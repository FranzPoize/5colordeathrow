Crafty.c('PlayerCollision',{

	handlePlayerCollision: function(event) {
		var score = Crafty('Score'),
			enemy = event[0].obj;
		if (enemy.available) {
			enemy.collide()
			if (enemy.color() == this.color()) {
				Crafty.trigger('CollisionSameColor', {'enemy': enemy})
				console.log(Crafty('ProgressBar').currentProgress())
				var currP = Crafty('ProgressBar').currentProgress()
				score.text(+score.text()+enemy.getScore(true) * currP);
				enemy.delay(function() {
					enemy.available = true;
				},500);
				enemy.available = false;
				enemy.resolveCollision(true);
			} else {
				Crafty.trigger('CollisionOtherColor', {'enemy': enemy})
				score.text(+score.text()+enemy.getScore(false));
				enemy.delay(function() {
					enemy.available = true;
				},500);
				enemy.available = false;

				enemy.resolveCollision(false);
			}
		}
	},

	init: function() {
		this.requires('Collision');

		this.onHit('Enemy',this.handlePlayerCollision);
	}
});