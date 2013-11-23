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

var BTN_H = 77,
	BTN_W = 77;

var colorInit = {
	redBtn: {
		w:BTN_W,
		h:BTN_H,
		color:color.one,
		key:'E',
		x:50,
		y:5
	},
	blueBtn: {
		w:BTN_W,
		h:BTN_H,
		color:color.two,
		key:'R',
		x:50+BTN_W+50,
		y:5
	},
	greenBtn: {
		w:BTN_W,
		h:BTN_H,
		color:color.three,
		key:'T',
		x:50+2*(BTN_W+50),
		y:5
	},
	yellowBtn: {
		w:BTN_W,
		h:BTN_H,
		color:color.four,
		key:'Y',
		x:50+3*(BTN_W+50),
		y:5
	},
	orangeBtn: {
		w:BTN_W,
		h:BTN_H,
		color:color.five,
		key:'SPACE',
		x:50+4*(BTN_W+50),
		y:5
	}
}

var initGUIScene = function () {
	l("initGUIScene start")
	var im = new InputManager()

	_.each(colorInit,function(button) {
		var btn = Crafty.e('2D, DOM, Color, Mouse, Keyboard, Text')
				.attr({x:button.x,y:Crafty.DOM.window.height-button.h-button.y,h:button.h,w:button.w})
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

