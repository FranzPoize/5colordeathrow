window.replay = {
	inputs: []
}
Crafty.c('ReplayRecorder',{
	init: function() {
		this.requires('Mouse,Keyboard');
		this.keys = [];
		var self = this;
		Crafty('ColorButton').each(function() {
			self.keys.push(this.keyBound);
		});
		this.bind('FireReplay',this.fireRecorder);
	},
	fireRecorder: function() {
		this.bind('EnterFrame',this.recordInput);
	},
	recordInput: function() {
		var inputFrame = {},
			self = this;
		_.each(this.keys,function(key) {
			if (self.isDown(key)) {
				inputFrame[key] = true;
			}
		});

		inputFrame.mouse = {
			x: Crafty.lastEvent.realX,
			y: Crafty.lastEvent.realY,
			button: Crafty.lastEvent.mouseButton == Crafty.mouseButtons.LEFT
		}
		
		window.replay.inputs.push(inputFrame);
	},
	printReplay: function() {
		var uriContent = 'data:application/octet-stream,'+encodeURIComponent(JSON.stringify(window.replay));
		window.open(uriContent,'prout');
		window.replay = {
			inputs:[]
		};
	}
})