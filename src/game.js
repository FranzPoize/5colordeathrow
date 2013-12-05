'use strict';

window.onload = function() {
	var stage = document.getElementById('game');
	Crafty.init(1250,600,stage);
	var levelToLoad;

	Crafty.audio.add('bgm_title','assets/sfx/bgm_menu.ogg');
	Crafty.audio.add('bgm_game01','assets/sfx/bgm_game01.ogg');
	Crafty.audio.add('bgm_game02','assets/sfx/bgm_game02.ogg');
	Crafty.audio.add('bgm_game03','assets/sfx/bgm_game03.ogg');
	Crafty.audio.add('bgm_game04','assets/sfx/bgm_game04.ogg');

	Crafty.audio.add('title','assets/sfx/sfx_title.ogg');

	Crafty.audio.add('select01','assets/sfx/sfx_click01.ogg');
	Crafty.audio.add('select02','assets/sfx/sfx_click02.ogg');
	Crafty.audio.add('select03','assets/sfx/sfx_click03.ogg');
	Crafty.audio.add('select04','assets/sfx/sfx_click04.ogg');
	Crafty.audio.add('select05','assets/sfx/sfx_click05.ogg');
	Crafty.audio.add('select06','assets/sfx/sfx_click06.ogg');

	Crafty.audio.add('321Go','assets/sfx/sfx_321Go.ogg');
	Crafty.audio.add('finish01','assets/sfx/sfx_finish01.ogg');
	Crafty.audio.add('finish02','assets/sfx/sfx_finish02.ogg');
	Crafty.audio.add('voicewin','assets/sfx/sfx_win.ogg');
	Crafty.audio.add('voicelose','assets/sfx/sfx_loose.ogg');

	Crafty.audio.add('pos_contact01','assets/sfx/sfx_contact_pos01.ogg');
	Crafty.audio.add('pos_contact02','assets/sfx/sfx_contact_pos02.ogg');
	Crafty.audio.add('pos_contact03','assets/sfx/sfx_contact_pos03.ogg');
	Crafty.audio.add('pos_contact04','assets/sfx/sfx_contact_pos04.ogg');
	Crafty.audio.add('pos_contact05','assets/sfx/sfx_contact_pos05.ogg');
	Crafty.audio.add('pos_contact06','assets/sfx/sfx_contact_pos06.ogg');
	Crafty.audio.add('pos_contact07','assets/sfx/sfx_contact_pos07.ogg');
	Crafty.audio.add('pos_contact08','assets/sfx/sfx_contact_pos08.ogg');

	Crafty.audio.add('neg_contact01','assets/sfx/sfx_contact_neg01.ogg');
	Crafty.audio.add('neg_contact02','assets/sfx/sfx_contact_neg02.ogg');
	Crafty.audio.add('neg_contact03','assets/sfx/sfx_contact_neg03.ogg');
	Crafty.audio.add('neg_contact04','assets/sfx/sfx_contact_neg04.ogg');
	Crafty.audio.add('neg_contact05','assets/sfx/sfx_contact_neg05.ogg');
	Crafty.audio.add('neg_contact06','assets/sfx/sfx_contact_neg06.ogg');
	Crafty.audio.add('neg_contact07','assets/sfx/sfx_contact_neg07.ogg');
	Crafty.audio.add('neg_contact08','assets/sfx/sfx_contact_neg08.ogg');

	Crafty.audio.add('player_bounce','assets/sfx/sfx_player_bounce.ogg');
	Crafty.audio.add('multiplier_down','assets/sfx/sfx_multipl_down.ogg');
	Crafty.audio.add('multiplier_up','assets/sfx/sfx_multipl_up.ogg');
	Crafty.audio.add('multiplier_up_full','assets/sfx/sfx_multipl_up_full.ogg');

	Crafty.audio.add('toasty','assets/toasties/toasty.mp3');

	// Crafty.audio.add('gdp','assets/sfx/gdp.ogg');
	// Crafty.audio.add('bgm_title','assets/sfx/bgm_title_select.ogg');
	// Crafty.audio.add('chrono','assets/sfx/sfx_chrono.ogg');
	// Crafty.audio.add('dot_explo01','assets/sfx/sfx_dot_explo01.ogg');
	// Crafty.audio.add('dot_explo02','assets/sfx/sfx_dot_explo02.ogg');
	// Crafty.audio.add('finish','assets/sfx/finish.ogg');
	// Crafty.audio.add('wise','assets/sfx/sfx_wise.ogg');
	// Crafty.audio.add('loon','assets/sfx/sfx_loon.ogg');

	Crafty.scene('logoGameJam',function() {
		var logo = Crafty.e('2D, DOM, Image, Delay,Mouse')
			.attr({x:Crafty.stage.elem.scrollWidth/2-140,y:Crafty.stage.elem.scrollHeight/2-150})
			.image('assets/logo_gdp.png')
			.css({cursor:'pointer'})
			.delay(function() {
				Crafty.scene('menu');
			},5000);
		Crafty.audio.play('bgm_title', -1, 0.75);
		// Crafty.audio.play('gdp', 1);

		logo.bind('Click',function() {
			if ( stage.mozRequestFullScreen ) {
				// firefox tu casses tout
			} else if (stage.requestFullscreen) {
			  stage.requestFullscreen();
			} else if (stage.webkitRequestFullscreen) {
			  stage.webkitRequestFullscreen();
			}

			// Crafty.audio.remove('gdp');
			// Crafty.audio.add('gdp','assets/sfx/gdp.ogg');
			Crafty.audio.play('title', 1);
			Crafty.audio.play('select0' + Crafty.math.randomInt(1, 6),1);
			Crafty.scene('menu');
		});
	});

	Crafty.scene('menu',function() {
		var btnSelectLevel = Crafty.e('2D, DOM, Mouse, Image')
			.attr({x:Crafty.stage.elem.scrollWidth/2-250,y:Crafty.stage.elem.scrollHeight/2-300})
			.image('assets/menus/title.png')
			.css({cursor:'pointer'});

		btnSelectLevel.bind('Click', function() {
			Crafty.audio.play('select0' + Crafty.math.randomInt(1, 6),1);
			Crafty.audio.remove('title');
			Crafty.audio.add('title','assets/sfx/sfx_title.ogg');
			Crafty.scene('chooseLevel');
		});

		var btnCredits = Crafty.e('2D, DOM, Image, Mouse')
			.attr({x:Crafty.stage.elem.scrollWidth/2-125,y:Crafty.stage.elem.scrollHeight/2+160})
			.image('assets/menus/credits.png')
			.css({cursor:'pointer'});

		btnCredits.bind('Click', function() {
			Crafty.audio.play('select0' + Crafty.math.randomInt(1, 6),1);
			Crafty.scene('credits');
		});

		var btnHowToPlay = Crafty.e('2D, DOM, Image, Mouse')
			.attr({x:Crafty.stage.elem.scrollWidth/2-170,y:Crafty.stage.elem.scrollHeight/2+230})
			.image('assets/menus/how_to_play.png')
			.css({cursor:'pointer'});

		btnHowToPlay.bind('Click', function() {
			Crafty.audio.play('select0' + Crafty.math.randomInt(1, 6),1);
			Crafty.scene('howToPlay');
		});
	});

	Crafty.scene('chooseLevel',function() {
		var index = 0,
			lvlWidth = 180,
			lvlHeight = 140,
			nLevelsPerLine = 5,
			nSpace = 10;

		var btnTitle = Crafty.e('2D, DOM, Image, Mouse')
			.attr({x:0, y:0})
			.image('assets/menus/title_very_small.png')
			.css({cursor:'pointer'});

		btnTitle.bind('Click', function() {
			Crafty.audio.play('select0' + Crafty.math.randomInt(1, 6),1);
			Crafty.audio.play('title', 1);
			Crafty.scene('menu');
		});

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
				.attr({x: Crafty.stage.elem.scrollWidth / 2 + ( index % nLevelsPerLine - 2 ) * (lvlWidth + nSpace) - lvlWidth / 2 - 7
					, y: 187 + parseInt(index / nLevelsPerLine) * (lvlHeight + nSpace), h:0, w:200})
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
				Crafty.audio.play('select0' + Crafty.math.randomInt(1, 6),1);
				levelToLoad = window.levels[name];
				Crafty.scene('game');
			});

			index++;
		});
	});

	Crafty.scene('credits',function() {
		var btn = Crafty.e('2D, DOM, Mouse, Image')
			.attr({x:0,y:Crafty.stage.elem.scrollHeight/2-280})
			.image('assets/menus/credits_screen.png')
			.css({cursor:'pointer'});

		btn.bind('Click', function() {
			Crafty.audio.play('select0' + Crafty.math.randomInt(1, 6),1);
			Crafty.scene('menu');
		});
	});

	Crafty.scene('howToPlay',function() {
		var btn = Crafty.e('2D, DOM, Mouse, Image')
			.attr({x:0,y:Crafty.stage.elem.scrollHeight/2-300})
			.image('assets/menus/how_to_play_screen.png')
			.css({cursor:'pointer'});

		btn.bind('Click', function() {
			Crafty.audio.play('select0' + Crafty.math.randomInt(1, 6),1);
			Crafty.scene('menu');
		});
	});

	var PLAYER_H = 40;
	var PLAYER_W = 40;

	Crafty.scene('game',function() {
		Crafty.audio.remove('bgm_title');
		Crafty.audio.add('bgm_title', 'assets/sfx/bgm_menu.ogg');
		Crafty.audio.play('bgm_game0' + Crafty.math.randomInt(1, 4), -1, 0.75);
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
			.attr({x: Crafty.stage.elem.scrollWidth-900,y:Crafty.stage.elem.scrollHeight-44,z:10000,h:50,w:400})
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
				// Crafty.audio.play('finish',1);
				Crafty.audio.remove('bgm_game01');
				Crafty.audio.remove('bgm_game02');
				Crafty.audio.remove('bgm_game03');
				Crafty.audio.remove('bgm_game04');
				Crafty.audio.add('bgm_game01','assets/sfx/bgm_game01.ogg');
				Crafty.audio.add('bgm_game02','assets/sfx/bgm_game02.ogg');
				Crafty.audio.add('bgm_game03','assets/sfx/bgm_game03.ogg');
				Crafty.audio.add('bgm_game04','assets/sfx/bgm_game04.ogg');
				Crafty.audio.play('bgm_title', -1, 0.75);
				Crafty.scene('chooseLevel');
			});
	});

	Crafty.scene('logoGameJam');

	Crafty.e('FrameKeeper');
	//Crafty.scene('chooseLevel'); // Wow! Please!
};
