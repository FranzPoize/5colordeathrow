'use strict';

window.onload = function() {
	Crafty.init(document.getElementById('game'));
	var levelToLoad;

	Crafty.scene('logoGameJam',function() {
		var logo = Crafty.e('2D, DOM, Image, Delay,Mouse')
			.attr({x:Crafty.DOM.window.width/2-140,y:Crafty.DOM.window.height/2-150})
			.image('assets/logo_gdp.png')
			.delay(function() {
				Crafty.scene('menu');
			},5000);

		logo.bind('Click',function() {
			Crafty.scene('menu');
		});
	});

	Crafty.scene('menu',function() {
		Crafty.e('2D, DOM, Image')
			.attr({x:Crafty.DOM.window.width/2-310,y:Crafty.DOM.window.height/2-320})
			.image('assets/menus/title.png');

		var btn = Crafty.e('2D, DOM, Image, Mouse')
			.attr({x:Crafty.DOM.window.width/2-172,y:Crafty.DOM.window.height/2+230})
			.image('assets/menus/press_start.png')
			.css({cursor:'pointer'});

		btn.bind('Click', function() {
			Crafty.scene('chooseLevel');
		});
	});

	Crafty.scene('chooseLevel',function() {
		var index = 0,
			lvlWidth = 100,
			lvlHeight = 100;

		_.each(window.levels,function(level,name) {
			var lvlBtn = Crafty.e('2D,DOM,Text,Color,Mouse')
				.attr({x:10+index*(lvlWidth+10),y:10+index%5*(lvlHeight+10),h:lvlHeight,w:lvlWidth})
				.text(level.name)
				.color('#000')
				.textColor('#ffffff')
				.css({cursor:'pointer'});
			index++;

			lvlBtn.bind('Click',function() {
				levelToLoad = window.levels[name];
				Crafty.scene('game');
			});
		});
	});

	Crafty.scene('game',function() {
		var color = window.color;

		Crafty.background('#999');

		initGUIScene();

		var playArea = Crafty.e('2D, DOM, Color, PlayArea')
			.attr({x:0,y:0,w:Crafty.DOM.window.width,h:Crafty.DOM.window.height-87})
			.color('#000');

		playArea._element.draggable = false;

		Crafty.e('2D, DOM, Image, MoveTo, WiredHitBox,PlayerCollision,Player')
			.attr({x:0,y:0,h:40,w:40})
			.playerColor(window.color.five,'orange')
			.collision(new Crafty.polygon([0,0],[40,0],[40,40],[0,40]));

		Crafty.e('Score')
			.attr({x: Crafty.DOM.window.width-200,y:Crafty.DOM.window.height-80,h:50,w:50})
			.text('0')
			.textColor('#f00')
			.textFont({ size: '40px', weight: 'bold','font-family':'NoColor'});

		Crafty.e('Timer, 2D, DOM, Text')
			.attr({x: Crafty.DOM.window.width - 200, y:Crafty.DOM.window.height-45,h:50,w:50})
			.text( levelToLoad.duration + 's' )
			.textColor('#f00')
			.textFont({ size: '40px', weight: 'bold' })
			.bind('TimeLeft', function( timeLeft ) {
				this.text( timeLeft + 's' );
			})
			.firstFrame = Crafty.frame();

		Crafty.e('Level')
			.level( levelToLoad )
			.bind('LevelEnd', function() {
				Crafty.scene('chooseLevel');
			});

		Crafty.e('FrameKeeper');
	});

	//Crafty.scene('logoGameJam');
	Crafty.scene('chooseLevel'); // Wow! Please!
};
