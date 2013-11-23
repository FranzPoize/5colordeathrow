"use strict"

var InputManager = function () {
};

InputManager.prototype.setPlayerColor = function (color) {
	Crafty('Player').color(color)
};

var l = function (a) {
	if (console && console.log) {
		console.log(a)
	};
};

var BTN_H = 100,
	BTN_W = 100;

var colorInit = {
	redBtn: {
		w:100,
		h:100,
		color:color.one,
		key:'E',
		x:50,
		y:10
	},
	blueBtn: {
		w:100,
		h:100,
		color:color.two,
		key:'R',
		x:50+BTN_W+50,
		y:10
	},
	greenBtn: {
		w:100,
		h:100,
		color:color.three,
		key:'T',
		x:50+2*(BTN_W+50),
		y:10
	},
	yellowBtn: {
		w:100,
		h:100,
		color:color.four,
		key:'Y',
		x:50+3*(BTN_W+50),
		y:10
	},
	orangeBtn: {
		w:100,
		h:100,
		color:color.five,
		key:'SPACE',
		x:50+4*(BTN_W+50),
		y:10
	}
}

var initGUIScene = function () {
	l("initGUIScene start")
	var im = new InputManager()

	_.each(colorInit,function(button) {
		var btn = Crafty.e('2D, DOM, Color, Mouse, Keyboard, Text')
				.attr({x:button.x,y:button.y,h:button.h,w:button.w})
				.color(button.color)
				.text(button.key)
				.textFont({ size: BTN_H*0.75+ "px", weight: 'bold' })
				.unselectable()
		btn.bind('KeyDown', keyDownFor(button.key, im));
		btn.bind('DoubleClick', askBindingForButton(btn, im));
		btn.gameColor = button.color
	});
	l("initGUIScene end")
};

var keyDownFor = function (key, im) {
	return function (e) {
		if (e.key == Crafty.keys[key]) {
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

