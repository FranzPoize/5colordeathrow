Crafty.c('PlayerCollision',{

	handlePlayerCollision: function(event) {
		var score = Crafty('Score'),
			enemy = event[0].obj;
		if (enemy.available) {
			enemy.collide()
			if (enemy.enemyColorValue == this.playerColorValue) {
				Crafty.trigger('CollisionSameColor', {'enemy': enemy})
				var progressBar = Crafty('ProgressBar')
				var currP = Crafty('ProgressBar').currentProgress()
				score.text(+score.text()+enemy.getScore(true) * (currP+1));
				enemy.delay(function() {
					enemy.available = true;
				},500);
				enemy.available = false;
				enemy.resolveCollision(true,this);
			} else {
				Crafty.trigger('CollisionOtherColor', {'enemy': enemy})
				score.text(+score.text()+enemy.getScore(false));
				enemy.delay(function() {
					enemy.available = true;
				},500);
				enemy.available = false;

				enemy.resolveCollision(false,this);
			}
		}
	},

	init: function() {
		this.requires('Collision');

		this.onHit('Enemy',this.handlePlayerCollision);
	}
});