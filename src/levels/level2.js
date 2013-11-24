'use strict';
window.levels = {};

window.levels.level2 = {
	id: 1,
	name:'lvl 1',
	duration: 20,
	score: 32000,
	events: {
		0: [{
			type: 'shape',
			color: 'one',
			lifespan: 25,
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
			lifespan: 25,
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
			color: 'one',
			lifespan: 25,
			coords: [0,300],
			width: 1250,
			height: 10,
			scoreType:'ComboEnemy',
			behavior: {},
		}],
		5: [{
			type: 'dot',
			color: 'one',
			lifespan: 7,
			coords: [200,100],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 7,
			coords: [300,400],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 7,
			coords: [1050,100],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 7,
			coords: [950,400],
			scoreType:'DotEnemy',
			behavior: {}
		}],
		8: [{
			type: 'shape',
			color: 'two',
			lifespan: 20,
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
			lifespan: 20,
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
			color: 'one',
			lifespan: 20,
			coords: [525,100],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 20,
			coords: [475,225],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 20,
			coords: [525,350],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 20,
			coords: [725,100],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 20,
			coords: [775,225],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 20,
			coords: [725,350],
			scoreType:'DotEnemy',
			behavior: {}
		}]
	}
};