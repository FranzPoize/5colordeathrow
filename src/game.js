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
		})
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
		})
	});
	
	Crafty.scene('chooseLevel',function() {
		var index = 0,
			lvlWidth = 180,
			lvlHeight = 140,
			nLevelsPerLine = 5,
			nSpace = 10;
		
		Crafty.e('2D, DOM, Image')
			.attr({x:0, y:0})
			.image('assets/menus/title_very_small.png');
			
		Crafty.e('2D,DOM,Text,Color')
			.attr({x: Crafty.DOM.window.width / 2 - 250, y: 120, h:lvlHeight, w:500})
			.text("Level Select")
			.textColor("#000")
			.textFont({ size: '42px' })
			.css({"text-align": "center"});
		
		_.each(window.levels,function(level,name) {
			var lvlBtn = Crafty.e('2D,DOM,Color,Mouse')
				.attr({x: Crafty.DOM.window.width / 2 + ( index % nLevelsPerLine - 2 ) * (lvlWidth + nSpace) - lvlWidth / 2
					, y: 160 + parseInt(index / nLevelsPerLine) * (lvlHeight + nSpace), h:lvlHeight, w:lvlWidth})
				.color('#fff')
				.css({cursor:'pointer'})
				.css({"border-width":"2px"})
				.css({"border-color":"#000"})
				.css({"border-style":"solid"});
			
			Crafty.e('2D,DOM,Text,Color')
				.attr({x: Crafty.DOM.window.width / 2 + ( index % nLevelsPerLine - 2 ) * (lvlWidth + nSpace) - lvlWidth / 2
					, y: 182 + parseInt(index / nLevelsPerLine) * (lvlHeight + nSpace), h:lvlHeight, w:lvlWidth})
				.text(level.name)
				.textColor(window.getColor(parseInt(index%nLevelsPerLine)))
				.textFont({ size: '42px' })
				.css({"text-align": "right"});
			
			Crafty.e('2D,DOM,Text,Color')
				.attr({x: Crafty.DOM.window.width / 2 + ( index % nLevelsPerLine - 2 ) * (lvlWidth + nSpace) - lvlWidth / 2
					, y: 240 + parseInt(index / nLevelsPerLine) * (lvlHeight + nSpace), h:lvlHeight, w:lvlWidth})
				.text(window.getLevelDurationText(level.length))
				.textColor("#000")
				.textFont({ size: '36px' })
				.css({"text-align": "center"});
			
			Crafty.e('2D,DOM,Text,Color')
				.attr({x: Crafty.DOM.window.width / 2 + ( index % nLevelsPerLine - 2 ) * (lvlWidth + nSpace) - lvlWidth / 2
					, y: 270 + parseInt(index / nLevelsPerLine) * (lvlHeight + nSpace), h:lvlHeight, w:lvlWidth})
				.text(window.getScoreText(level.score))
				.textColor("#000")
				.textFont({ size: '20px' })
				.css({"text-align": "center"});
			
			lvlBtn.bind('Click',function() {
				levelToLoad = window.levels[name];
				Crafty.scene('game');
			});
			
			index++;
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

		Crafty.e('2D, DOM, Color, MoveTo, WiredHitBox,PlayerCollision,Player')
			.attr({x:0,y:0,h:40,w:40})
			.color(color.five)
			.collision(new Crafty.polygon([0,0],[40,0],[40,40],[0,40]));

		Crafty.e('Score')
			.attr({x:100,y:Crafty.DOM.window.height-45,h:50,w:50})
			.text('0')
			.textColor('#f00')
			.textFont({ size: '40px', weight: 'bold' });

		Crafty.e('Level')
			.level( levelToLoad );

		Crafty.e('FrameKeeper');
	});

	Crafty.scene('logoGameJam');
};
