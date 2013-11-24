'use strict';

window.onload = function() {
	Crafty.init(1250,600,document.getElementById('game'));
	var levelToLoad;

	Crafty.audio.add('chrono','assets/sfx/sfx_chrono.ogg');
	Crafty.audio.add('bgm_title','assets/sfx/bgm_title_select.ogg');
	Crafty.audio.add('neg_contact','assets/sfx/sfx_contact_negatif.ogg');
	Crafty.audio.add('pos_contact','assets/sfx/sfx_contact_positif.ogg');
	Crafty.audio.add('dot_explo01','assets/sfx/sfx_dot_explo01.ogg');
	Crafty.audio.add('dot_explo02','assets/sfx/sfx_dot_explo02.ogg');
	Crafty.audio.add('finish','assets/sfx/sfx_finish.ogg');
	Crafty.audio.add('wise','assets/sfx/sfx_wise.ogg');
	Crafty.audio.add('loon','assets/sfx/sfx_loon.ogg');
	Crafty.audio.add('multiplier_down','assets/sfx/sfx_multipl_down.ogg');
	Crafty.audio.add('multiplier_up','assets/sfx/sfx_multipl_up.ogg');
	Crafty.audio.add('multiplier_up_full','assets/sfx/sfx_multipl_up_full.ogg');
	Crafty.audio.add('player_bounce','assets/sfx/sfx_player_bounce.ogg');
	Crafty.audio.add('select01','assets/sfx/sfx_select01.ogg');
	Crafty.audio.add('select02','assets/sfx/sfx_select02.ogg');
	Crafty.audio.add('select03','assets/sfx/sfx_select03.ogg');
	Crafty.audio.add('toasty','assets/toasties/toasty.mp3');

	Crafty.scene('logoGameJam',function() {
		var logo = Crafty.e('2D, DOM, Image, Delay,Mouse')
			.attr({x:Crafty.stage.elem.scrollWidth/2-140,y:Crafty.stage.elem.scrollHeight/2-150})
			.image('assets/logo_gdp.png')
			.delay(function() {
				Crafty.scene('menu');
			},5000);
		Crafty.audio.play('bgm_title');

		logo.bind('Click',function() {
			Crafty.audio.play('select01',1);
			Crafty.scene('menu');
		});
	});

	Crafty.scene('menu',function() {
		Crafty.e('2D, DOM, Image')
			.attr({x:Crafty.stage.elem.scrollWidth/2-250,y:Crafty.stage.elem.scrollHeight/2-217})
			.image('assets/menus/title.png');

		var btn = Crafty.e('2D, DOM, Image, Mouse')
			.attr({x:Crafty.stage.elem.scrollWidth/2-172,y:Crafty.stage.elem.scrollHeight/2+230})
			.image('assets/menus/press_start.png')
			.css({cursor:'pointer'});

		btn.bind('Click', function() {
			Crafty.audio.play('select01',1);
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
			.attr({x: Crafty.stage.elem.scrollWidth / 2 - 250, y: 120, h:0, w:500})
			.unselectable()
			.text("Level Select")
			.textColor("#000")
			.textFont({ family: "No Color", size: '42px' })
			.css({ "user-select": "none" })
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
					, y: 185 + parseInt(index / nLevelsPerLine) * (lvlHeight + nSpace), h:0, w:lvlWidth})
				.unselectable()
				.text(level.name)
				.textColor(window.getColor(parseInt(index%nLevelsPerLine)))
				.textFont({ family: "No Color", size: '52px' })
				.css({"text-align": "center"})
				.css({cursor:'pointer'});

			// Level Duration
			Crafty.e('2D,DOM,Text,Color')
				.attr({x: Crafty.stage.elem.scrollWidth / 2 + ( index % nLevelsPerLine - 2 ) * (lvlWidth + nSpace) - lvlWidth / 2
					, y: 235 + parseInt(index / nLevelsPerLine) * (lvlHeight + nSpace), h:0, w:lvlWidth})
				.unselectable()
				.text(window.getLevelDurationText(level.duration))
				.textColor("#000")
				.textFont({ weight:'bold', size: '40px' })
				.css({"text-align": "center"})
				.css({cursor:'pointer'});

			// Level Score
			Crafty.e('2D,DOM,Text,Color')
				.attr({x: Crafty.stage.elem.scrollWidth / 2 + ( index % nLevelsPerLine - 2 ) * (lvlWidth + nSpace) - lvlWidth / 2
					, y: 260 + parseInt(index / nLevelsPerLine) * (lvlHeight + nSpace), h:0, w:lvlWidth})
				.unselectable()
				.text(window.getScoreText(level.score))
				.textColor("#000")
				.textFont({ weight:'bold', size: '18px' })
				.css({"text-align": "center"})
				.css({cursor:'pointer'});

			// Level Highscore
			Crafty.e('2D,DOM,Text,Color')
				.attr({x: Crafty.stage.elem.scrollWidth / 2 + ( index % nLevelsPerLine - 2 ) * (lvlWidth + nSpace) - lvlWidth / 2
					, y: 290 + parseInt(index / nLevelsPerLine) * (lvlHeight + nSpace), h:0, w:lvlWidth})
				.unselectable()
				.text(window.getScoreText(window.highscores[index+1]))
				.textColor( level.score > window.highscores[index+1] ? "#ff0000" : "#00ff00")
				.textFont({ weight:'bold', size: '24px' })
				.css({"text-align": "center"})
				.css({cursor:'pointer'});

			// Button
			lvlBtn.bind('Click',function() {
				Crafty.audio.play('select01',1);
				levelToLoad = window.levels[name];
				Crafty.scene('game');
			});

			index++;
		});
	});

	var PLAYER_H = 40;
	var PLAYER_W = 40;

	Crafty.scene('game',function() {
		Crafty.audio.remove('bgm_title');
		var color = window.color;

		Crafty.background('#fff');

		initGUIScene();

		var playArea = Crafty.e('2D, DOM, Color, PlayArea')
			.attr({x:0,y:0,w:Crafty.stage.elem.scrollWidth,h:Crafty.stage.elem.scrollHeight-48})
			.color('#111');

		playArea._element.draggable = false;

		var w = Crafty('PlayArea').w,
			h = Crafty('PlayArea').h;

		var player = Crafty.e('2D, DOM, Image, MoveTo,PlayerCollision,Player')
			.attr({x: w/2 - PLAYER_W/2, y: h/2 - PLAYER_H/2, h:PLAYER_H, w:PLAYER_W})
			.playerColor(window.color.one,'red')
			.collision(new Crafty.polygon([5,5],[27,5],[27,27],[5,27]));
		player.canMove = false; // So that it does not move during the countdown

		// HUD
		// Background
		Crafty.e('2D, DOM, Color')
			.attr({x:0,y:Crafty.stage.elem.scrollHeight-48,z:9000,w:Crafty.stage.elem.scrollWidth,h:48})
			.color('#fff');

		Crafty.e('Score')
			.attr({x: Crafty.stage.elem.scrollWidth-900,y:Crafty.stage.elem.scrollHeight-50,z:10000,h:50,w:400})
			.unselectable()
			.text('0')
			.textColor('#000000')
			.css({'text-align':'center'})
			.textFont({ size: '40px', weight: 'bold'});

		Crafty.e('Multiplier')
			.attr({x: Crafty.stage.elem.scrollWidth-400,y:Crafty.stage.elem.scrollHeight-40,z:10000,h:50,w:400})
			.unselectable()
			.textColor('#000000')
			.css({'text-align':'right'})
			.textFont({ size: '30px', weight: 'bold'});

		Crafty.e('Timer, 2D, DOM, Text')
			.attr({x: Crafty.stage.elem.scrollWidth - 520, y:Crafty.stage.elem.scrollHeight-45,z:10000,h:50,w:50})
			.unselectable()	
			.text(  window.formatLevelCountDown( levelToLoad.duration ) )
			.textColor('#000000')
			.textFont({ size: '40px', weight: 'bold'})
			.bind('TimeLeft', function( data ) {
				this.text( window.formatLevelCountDown( data.timeleft ) );
			})
			.firstFrame = Crafty.frame();

		Crafty.e('Level')
			.level( levelToLoad )
			.bind('LevelEnd', function() {
				Crafty.audio.play('finish',1);
				Crafty.scene('chooseLevel');
			});
	});

	Crafty.scene('logoGameJam');

	Crafty.e('FrameKeeper');
	//Crafty.scene('chooseLevel'); // Wow! Please!
};
