'use strict';

window.onload = function() {
	Crafty.init(1250,600,document.getElementById('game'));
	var levelToLoad;

	Crafty.scene('logoGameJam',function() {
		var logo = Crafty.e('2D, DOM, Image, Delay,Mouse')
			.attr({x:Crafty.stage.elem.scrollWidth/2-140,y:Crafty.stage.elem.scrollHeight/2-150})
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
			.attr({x:Crafty.stage.elem.scrollWidth/2-310,y:Crafty.stage.elem.scrollHeight/2-320})
			.image('assets/menus/title.png');
		
		var btn = Crafty.e('2D, DOM, Image, Mouse')
			.attr({x:Crafty.stage.elem.scrollWidth/2-172,y:Crafty.stage.elem.scrollHeight/2+230})
			.image('assets/menus/press_start.png')
			.css({cursor:'pointer'});
		
		btn.bind('Click', function() {
			Crafty.scene('chooseLevel');
		});
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
			.attr({x: Crafty.stage.elem.scrollWidth / 2 - 250, y: 120, h:lvlHeight, w:500})
			.text("Level Select")
			.textColor("#000")
			.textFont({ family: "No Color", size: '42px' })
			.css({"text-align": "center"});
		
		_.each(window.levels,function(level,name) {
			// Cadre
			var lvlBtn = Crafty.e('2D,DOM,Color,Mouse')
				.attr({x: Crafty.stage.elem.scrollWidth / 2 + ( index % nLevelsPerLine - 2 ) * (lvlWidth + nSpace) - lvlWidth / 2
					, y: 160 + parseInt(index / nLevelsPerLine) * (lvlHeight + nSpace), h:lvlHeight, w:lvlWidth})
				.color('#fff')
				.css({cursor:'pointer'})
				.css({"border-width":"2px"})
				.css({"border-color":"#000"})
				.css({"border-style":"solid"});
			
			// Level Name
			Crafty.e('2D,DOM,Text,Color')
				.attr({x: Crafty.stage.elem.scrollWidth / 2 + ( index % nLevelsPerLine - 2 ) * (lvlWidth + nSpace) - lvlWidth / 2
					, y: 185 + parseInt(index / nLevelsPerLine) * (lvlHeight + nSpace), h:lvlHeight, w:lvlWidth})
				.text(level.name)
				.textColor(window.getColor(parseInt(index%nLevelsPerLine)))
				.textFont({ family: "No Color", size: '54px' })
				.css({"text-align": "right"})
				.css({cursor:'pointer'});
			
			// Level Duration
			Crafty.e('2D,DOM,Text,Color')
				.attr({x: Crafty.stage.elem.scrollWidth / 2 + ( index % nLevelsPerLine - 2 ) * (lvlWidth + nSpace) - lvlWidth / 2
					, y: 245 + parseInt(index / nLevelsPerLine) * (lvlHeight + nSpace), h:lvlHeight, w:lvlWidth})
				.text(window.getLevelDurationText(level.duration))
				.textColor("#000")
				.textFont({ family: "No Color", size: '48px' })
				.css({"text-align": "center"})
				.css({cursor:'pointer'});
			
			// Level Score
			Crafty.e('2D,DOM,Text,Color')
				.attr({x: Crafty.stage.elem.scrollWidth / 2 + ( index % nLevelsPerLine - 2 ) * (lvlWidth + nSpace) - lvlWidth / 2
					, y: 280 + parseInt(index / nLevelsPerLine) * (lvlHeight + nSpace), h:lvlHeight, w:lvlWidth})
				.text(window.getScoreText(level.score))
				.textColor("#000")
				.textFont({ family: "No Color", size: '20px' })
				.css({"text-align": "center"})
				.css({cursor:'pointer'});
			
			// Button
			lvlBtn.bind('Click',function() {
				levelToLoad = window.levels[name];
				Crafty.scene('game');
			});
			
			index++;
		});
	});

	Crafty.scene('game',function() {
		var color = window.color;

		Crafty.background('#fff');

		initGUIScene();

		var playArea = Crafty.e('2D, DOM, Color, PlayArea')
			.attr({x:0,y:0,w:Crafty.stage.elem.scrollWidth,h:Crafty.stage.elem.scrollHeight-48})
			.color('#000');

		playArea._element.draggable = false;

		Crafty.e('2D, DOM, Image, MoveTo,PlayerCollision,Player')
			.attr({x:0,y:0,h:40,w:40})
			.playerColor(window.color.one,'red')
			.collision(new Crafty.polygon([0,0],[40,0],[40,40],[0,40]));

		Crafty.e('Score')
			.attr({x: Crafty.stage.elem.scrollWidth-850,y:Crafty.stage.elem.scrollHeight-40,h:50,w:400})
			.text('0')
			.textColor('#f00')
			.css({'text-align':'right'})
			.textFont({ size: '30px', weight: 'bold','family':'No Color'});

		Crafty.e('Multiplier')
			.attr({x: Crafty.stage.elem.scrollWidth-90,y:Crafty.stage.elem.scrollHeight-40,h:50,w:100})
			.textColor('#f00')
			.textFont({ size: '30px', weight: 'bold','family':'No Color'});

		Crafty.e('Timer, 2D, DOM, Text')
			.attr({x: Crafty.stage.elem.scrollWidth-850, y:Crafty.stage.elem.scrollHeight-40,h:50,w:50})
			.text( levelToLoad.duration + 's' )
			.textColor('#f00')
			.textFont({ size: '30px', weight: 'bold' ,'family':'No Color'})
			.bind('TimeLeft', function( data ) {
				console.log(data)
				this.text(data.timeleft.toFixed(2) + 's' );
			})
			.firstFrame = Crafty.frame();

		Crafty.e('Level')
			.level( levelToLoad )
			.bind('LevelEnd', function() {
				Crafty.scene('chooseLevel');
			});

		Crafty.e('FrameKeeper');
	});

	Crafty.scene('logoGameJam');
	//Crafty.scene('chooseLevel'); // Wow! Please!
};
