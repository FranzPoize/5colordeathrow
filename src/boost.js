"use strict"

var PROGRESS_BAR_MAX_VALUE_AND_BOOST_THRESHOLD = 2000

var l = function (a) {
	if (console && console.log) {
		console.log(a)
	};
};

Crafty.bind('SceneChange', function (data) {
	if (data.newScene != 'game') {
		return
	};
	var progressBar = Crafty.e("2D, DOM, ProgressBar")
	.attr({
		x: Crafty.stage.elem.scrollWidth-370,
		y : Crafty.stage.elem.scrollHeight - 35,
		w: 300,
		h: 25,
		z: 10000
	})
	.progressBar(PROGRESS_BAR_MAX_VALUE_AND_BOOST_THRESHOLD, false, "blue", ["green", "magenta", "white", "cyan", "red", "orange", "gray"])
	.updateBarProgress(0);

	Crafty.bind('CollisionSameColor', function (data) {
		var currP = progressBar.currentProgress()
		progressBar.updateBarProgress(currP + data.enemy.getScore(true))
	})

	Crafty.bind('CollisionOtherColor', function (data) {
		var currP = progressBar.currentProgress()
		progressBar.updateBarProgress(Math.abs(progressBar.currentProgress()) - data.enemy.getScore(true))
	})
});