'use strict';
window.levels = {};

window.levels.level1 = {
	name:'lvl 1',
	duration: 30,
	events: {
		0: [{
			type: 'shape',
			color: 'one',
			lifespan: 20,
			coords: [0,0],
			width: 2000,
			height: 3,
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
			coords: [1000,700],
			scoreType:'NormalEnemy',
			behavior: {}
		},{
			type: 'shape',
			color: 'two',
			lifespan: 20,
			coords: [0,0],
			width: 3,
			height: 1000,
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
			width: 3,
			height: 1000,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'horiz'
			}
		}, {
			type: 'dot',
			color: 'two',
			lifespan: 20,
			coords: [110,120],
			scoreType:'NormalEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 20,
			coords: [1200,100],
			scoreType:'NormalEnemy',
			behavior: {}
		},{
			type: 'shape',
			color: 'two',
			lifespan: 20,
			coords: [1000,0],
			width: 3,
			height: 1000,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'horiz'
			}
		}, {
			type: 'dot',
			color: 'three',
			lifespan: 20,
			coords: [100,600],
			scoreType:'NormalEnemy',
			behavior: {}
		}],
		15: [{
			type: 'dot',
			color: 'three',
			lifespan: 20,
			coords: [700,500],
			scoreType:'NormalEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 20,
			coords: [1100,800],
			scoreType:'NormalEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 20,
			coords: [200,600],
			scoreType:'NormalEnemy',
			behavior: {}
		},{
			type: 'shape',
			color: 'three',
			lifespan: 20,
			coords: [0,700],
			width: 2000,
			height: 3,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'vert'}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 20,
			coords: [1100,600],
			scoreType:'NormalEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 20,
			coords: [1000,200],
			scoreType:'NormalEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 20,
			coords: [200,200],
			scoreType:'NormalEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'three',
			lifespan: 20,
			coords: [300,300],
			scoreType:'NormalEnemy',
			behavior: {}
		},{
			type: 'shape',
			color: 'one',
			lifespan: 20,
			coords: [500,0],
			width: 200,
			height: 600,
			scoreType:'ComboEnemy',
			behavior: {}
		}]
	}
};