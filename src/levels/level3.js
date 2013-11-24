'use strict';

window.levels.level3 = {
	name:'lvl 3',
	duration: 60,
	events: {
		0: [{
			type: 'shape',
			color: 'one',
			lifespan: 20,
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
			lifespan: 20,
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
			lifespan: 20,
			coords: [0,300],
			width: 1250,
			height: 10,
			scoreType:'ComboEnemy',
			behavior: {},
		}],
		5: [{
			type: 'dot',
			color: 'one',
			lifespan: 20,
			coords: [200,100],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 20,
			coords: [300,400],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 20,
			coords: [1050,100],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 20,
			coords: [950,400],
			scoreType:'DotEnemy',
			behavior: {}
		}],
		10: [{
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
		15: [{
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
			coords: [525,550],
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
			coords: [1000,225],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 20,
			coords: [725,550],
			scoreType:'DotEnemy',
			behavior: {}
		}]
	}
};