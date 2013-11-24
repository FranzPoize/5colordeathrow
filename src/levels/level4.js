'use strict';

window.levels.level4 = {
	id: 4, 
	name:'lvl 4',
	duration: 30,
	score: 1337, 
	events: {
		0: [{
			type: 'shape',
			color: 'one',
			lifespan: 20,
			coords: [0,10],
			width: 1250,
			height: 10,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'vert'
			}
		}],
		5: [{
			type: 'dot',
			color: 'three',
			lifespan: 20,
			coords: [1000,400],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'shape',
			color: 'two',
			lifespan: 20,
			coords: [0,0],
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
			coords: [500,0],
			width: 10,
			height: 600,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'horiz'
			}
		}, {
			type: 'dot',
			color: 'two',
			lifespan: 20,
			coords: [200,100],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 20,
			coords: [1000,100],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'shape',
			color: 'two',
			lifespan: 20,
			coords: [1000,0],
			width: 10,
			height: 600,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'horiz'
			}
		}, {
			type: 'dot',
			color: 'three',
			lifespan: 20,
			coords: [200,400],
			scoreType:'DotEnemy',
			behavior: {}
		}]
	}
};