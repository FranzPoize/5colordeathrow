'use strict';
window.levels = {};

window.levels.level1 = {
	name:'lvl 1',
	duration: 120,
	events: {
		0: [{
			type: 'shape',
			color: 'five',
			lifespan: 20,
			coords: [150,120],
			width: 30,
			height: 150,
			scoreType:'NormalEnemy',
			behavior: {
				type:'Translation',
				orient:'vert'
			}
		}],
		5: [{
			type: 'dot',
			color: 'two',
			lifespan: 20,
			coords: [0,0],
			width: 3,
			height: 500,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'vert'
			}
		}, {
			type: 'dot',
			color: 'three',
			lifespan: 20,
			coords: [11,12],
			scoreType:'NormalEnemy',
			behavior: {}
		},{
			type: 'shape',
			color: 'two',
			lifespan: 20,
			coords: [30,30],
			width: 3,
			height: 500,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'horiz'
			}
		}, {
			type: 'dot',
			color: 'three',
			lifespan: 20,
			coords: [400,200],
			scoreType:'NormalEnemy',
			behavior: {}
		},{
			type: 'shape',
			color: 'two',
			lifespan: 20,
			coords: [60,60],
			width: 3,
			height: 500,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'vert'
			}
		}, {
			type: 'dot',
			color: 'three',
			lifespan: 20,
			coords: [110,120],
			scoreType:'NormalEnemy',
			behavior: {}
		},{
			type: 'shape',
			color: 'two',
			lifespan: 20,
			coords: [100,100],
			width: 3,
			height: 500,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'horiz'
			}
		}, {
			type: 'dot',
			color: 'three',
			lifespan: 20,
			coords: [600,100],
			scoreType:'NormalEnemy',
			behavior: {}
		},{
			type: 'shape',
			color: 'two',
			lifespan: 20,
			coords: [150,150],
			width: 3,
			height: 500,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'vert'
			}
		}, {
			type: 'dot',
			color: 'three',
			lifespan: 20,
			coords: [500,50],
			scoreType:'NormalEnemy',
			behavior: {}
		}],
		55: [{
			type: 'dot',
			color: 'three',
			lifespan: 20,
			coords: [11,12],
			scoreType:'NormalEnemy',
			behavior: {}
		}, {
			type: 'shape',
			color: 'four',
			lifespan: 20,
			coords: [11,12],
			scoreType:'NormalEnemy',
			behavior: {}
		}]
	}
};