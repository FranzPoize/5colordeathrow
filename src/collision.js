Crafty.c('PlayerCollision',{

	handlePlayerCollision: function(event) {
		console.log("PLAYER HANDLE COLLISION")
		var score = Crafty('Score'),
			enemy = event[0].obj;
		if (enemy.has('Snake')) {
			return
		};
		if (enemy.available) {
			enemy.collide()
			if (enemy.enemyColorValue == this.playerColorValue) {
				Crafty.trigger('CollisionSameColor', {'enemy': enemy})
				var progressBar = Crafty('ProgressBar')
				var multi = Crafty('ProgressBar').getLoopedTimes()
				var newscore = Math.ceil(Math.abs(score.text().replace('/' + score.maxScore, '')) + enemy.getScore(true) * (multi+1))
				score.text(newscore + "/" + score.maxScore );
				enemy.delay(function() {
					enemy.available = true;
				},500);
				enemy.available = false;
				enemy.resolveCollision(true,this);
			} else {
				Crafty.trigger('CollisionOtherColor', {'enemy': enemy})
				var newscore = Math.ceil(Math.abs(score.text().replace('/' + score.maxScore, '')) + enemy.getScore(false))
				score.text(newscore + "/" + score.maxScore );
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