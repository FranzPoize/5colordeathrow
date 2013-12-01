Crafty.c('BotPlayer',{
	init: function() {
		this.requires('Mouse,Keyboard');
		this.keys = [];
		var self = this;
		Crafty('ColorButton').each(function() {
			self.keys.push(this.keyBound);
		});
		this.bind('FireReplay',this.fireReplay);
	},
	botPlayer: function(replay) {
		this.replay = replay;
	},
	fireReplay: function() {
		this.bind('EnterFrame',this.playReplay);
	},
	playReplay: function() {
		var input = this.replay.inputs.shift();
		if (input) {
			mouseEvent = {realX:input.mouse.x,realY:input.mouse.y};

			if (input.mouse.button && !this.down) {
				this.down = true;
				Crafty.trigger('MouseDown',mouseEvent);
			} else if (!input.mouse.button) {
				this.down = false;
				Crafty.trigger('MouseUp');
			}

			Crafty.trigger('MouseMove',mouseEvent);
			_.each(this.keys,function(key) {
				if (input[key])
					Crafty.trigger('KeyDown',{key:Crafty.keys[key]});
			});
		}
	}
})