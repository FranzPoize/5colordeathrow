"use strict"

var Player = null

var InputManager = function () {
	this.player = null
};

InputManager.prototype.setPlayerColor = function (color) {
	this.player.color(color)
};

InputManager.prototype.setPlayerObject = function (p) {
	this.player = p
};

var l = function (a) {
	if (console && console.log) {
		console.log(a)
	};
};

var initGUI = function () {
	l("initGUI")
	Crafty.scene('Game', initGUIScene)
	Crafty.scene('Game')
};


var initGame = function () {
	l("initGame start")
	Player = Crafty.e("2D, DOM, Color").attr({
		x: 40,
		y: 40,
		h: 200,
		w: 200
	}).color("#f0f")
	l("initGame end")
};

var initGUIScene = function () {
	l("initGUIScene start")
	initGame()
	var BTN_W = 100
	var BTN_H = 100
	var COLOR1_BTN_X = 0
	var COLOR1_BTN_Y = 0
	var COLOR2_BTN_X = 0
	var COLOR2_BTN_Y = BTN_H + 2
	var COLOR1_BTN_COLOR = "#f00"
	var COLOR2_BTN_COLOR = "#ff0"
	var COLOR1_BTN_KEY = 'R'
	var COLOR2_BTN_KEY = 'E'
	var COLOR1_BTN_INIT_ATTRIBUTES = {x: COLOR1_BTN_X, y: COLOR1_BTN_Y, w: BTN_W, h: BTN_H}
	var COLOR2_BTN_INIT_ATTRIBUTES = {x: COLOR2_BTN_X, y: COLOR2_BTN_Y, w: BTN_W, h: BTN_H}
	var PLAYER_COLOR_COLOR1 = COLOR1_BTN_COLOR
	var im = new InputManager()
	im.setPlayerObject(Player)
	var redBtn = Crafty.e('2D, DOM, Color, Mouse, Keyboard, Text')
		.attr(COLOR1_BTN_INIT_ATTRIBUTES)
		.color(COLOR1_BTN_COLOR)
		.text(COLOR1_BTN_KEY)
		.textFont({ size: BTN_H*0.75 + "px", weight: 'bold' })
		.unselectable()
	redBtn.bind('KeyDown', keyDownFor(COLOR1_BTN_KEY, im));
	redBtn.bind('DoubleClick', askBindingForButton(redBtn, im));
	redBtn.gameColor = COLOR1_BTN_COLOR

	var blueBtn = Crafty.e('2D, DOM, Color, Mouse, Keyboard, Text')
		.attr(COLOR2_BTN_INIT_ATTRIBUTES)
		.color(COLOR2_BTN_COLOR)
		.text(COLOR2_BTN_KEY)
		.textFont({ size: BTN_H*0.75 + "px", weight: 'bold' })
		.unselectable()
	blueBtn.bind('KeyDown', keyDownFor(COLOR2_BTN_KEY, im));
	blueBtn.bind('DoubleClick', askBindingForButton(blueBtn, im));
	blueBtn.gameColor = COLOR2_BTN_COLOR
	l("initGUIScene end")
};

var keyDownFor = function (key, im) {
	return function (e) {
		l("KeyDown!")
		if (e.key == Crafty.keys[key]) {
			l("KeyDown is space!")
			im.setPlayerColor(this.gameColor)
		}
		return false
	}
}

var askBindingForButton = function (btnEntity, im) {
	return function () {
		var first = true
		do {
			if (!first) {
				window.alert('This key name is invalid, try again')
			};
			var key = window.prompt("Key binding for this color?").toUpperCase()
		} while (!Crafty.keys[key]);
		btnEntity.unbind('KeyDown')
		btnEntity.bind('KeyDown', keyDownFor(key, im))
		btnEntity.text(key.toUpperCase())
	}
}

Crafty.bind("Load", initGUI)