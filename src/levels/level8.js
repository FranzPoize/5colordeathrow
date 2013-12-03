'use strict';

window.levels.level8 = {
	id: 8,
	name:'lvl 8',
	duration: 20,
	score: 32000,
	events: {
		0: [{
			type: 'shape',
			color: 'one',
			coords: [10,0],
			width: 10,
			height: 600,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'horiz'
			}
		},{
			type: 'shape',
			color: 'two',
			coords: [1230,0],
			width: 10,
			height: 600,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'horiz'
			}
		},{
			type: 'shape',
			color: 'three',
			coords: [0,300],
			width: 1250,
			height: 10,
			scoreType:'ComboEnemy',
			behavior: {},
		}],
		5: [{
			type: 'dot',
			color: 'four',
			lifespan: 7,
			coords: [200,100],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'three',
			lifespan: 7,
			coords: [300,400],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'four',
			lifespan: 7,
			coords: [1050,100],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'three',
			lifespan: 7,
			coords: [950,400],
			scoreType:'DotEnemy',
			behavior: {}
		}],
		8: [{
			type: 'shape',
			color: 'two',
			coords: [1230,0],
			width: 10,
			height: 600,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'horiz'}
		},{
			type: 'shape',
			color: 'one',
			coords: [10,0],
			width: 10,
			height: 600,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'horiz'}
		}],
		12: [{
			type: 'dot',
			color: 'three',
			lifespan: 20,
			coords: [525,100],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'four',
			lifespan: 20,
			coords: [475,225],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'three',
			lifespan: 20,
			coords: [525,350],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'four',
			lifespan: 20,
			coords: [725,100],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'three',
			lifespan: 20,
			coords: [775,225],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'four',
			lifespan: 20,
			coords: [725,350],
			scoreType:'DotEnemy',
			behavior: {}
		}]
	}
};