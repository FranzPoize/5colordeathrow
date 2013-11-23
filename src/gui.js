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
	red: {
		w:BTN_W,
		h:BTN_H,
		color:color.one,
		key:'E',
		x:50,
		y:5
	},
	yellow: {
		w:BTN_W,
		h:BTN_H,
		color:color.two,
		key:'R',
		x:50+BTN_W+50,
		y:5
	},
	blue: {
		w:BTN_W,
		h:BTN_H,
		color:color.three,
		key:'T',
		x:50+2*(BTN_W+50),
		y:5
	},
	green: {
		w:BTN_W,
		h:BTN_H,
		color:color.four,
		key:'Y',
		x:50+3*(BTN_W+50),
		y:5
	},
	orange: {
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

	_.each(colorInit,function(button,name) {
		var btn = Crafty.e('2D, DOM, Image, Mouse, Keyboard, Text, ColorButton')
				.attr({x:button.x,y:Crafty.DOM.window.height-button.h-button.y,h:button.h,w:button.w})
				.image('assets/hud/'+name+'_input_01.PNG')
				.text(button.key)
				.textFont({ size: BTN_H*0.75+ "px", weight: 'bold' })
				.unselectable()
		btn.bind('KeyDown', keyDownFor(button.key, im ,name));
		btn.bind('DoubleClick', askBindingForButton(btn, im));
		btn.gameColor = button.color;
		btn.defaultIcon = function() {
			btn.image('assets/hud/'+name+'_input_01.PNG');
		}
	});
	l("initGUIScene end")
};

var keyDownFor = function (key, im,name) {
	return function (e) {
		var buttons = Crafty('ColorButton');

		buttons.each(function() {
			this.defaultIcon();
		});

		if (e.key == Crafty.keys[key]) {
			im.setPlayerColor(this.gameColor);
			this.image('assets/hud/'+name+'_input_02.PNG');
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

