"use strict"

var PROGRESS_BAR_MAX_VALUE_AND_BOOST_THRESHOLD = 200

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
	.attr({ x: 200, y : Crafty.DOM.window.height - 35, w: 300, h: 25})
	.progressBar(PROGRESS_BAR_MAX_VALUE_AND_BOOST_THRESHOLD, false, "blue", ["green", "magenta", "white", "cyan", "red", "orange", "gray"])
	.updateBarProgress(0);

	Crafty.bind('CollisionSameColor', function (data) {
		progressBar.updateBarProgress(progressBar.currentProgress() + data.enemy.getScore(true))
	})

	Crafty.bind('CollisionOtherColor', function (data) {
		progressBar.updateBarProgress(progressBar.currentProgress() - data.enemy.getScore(true))
	})
});