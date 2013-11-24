'use strict';
window.levels = {};

window.levels.level1 = {
	id: 1, 
	name:'lvl 1',
	duration: 30,
	score: 300000, 
	events: {
		0: [{
			type: 'snake',
			color: 'one',
			lifespan: 20,
			coords: [0,0],
			width: 400,
			height: 10,
			scoreType:'DotEnemy',
			behavior: {},
			chunkH: 30,
			chunkW: 30,
			detectionDistance: 200,
			x: 900,
			y: 500,	
			chunksNumber: 10
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
		}],
		15: [{
			type: 'dot',
			color: 'three',
			lifespan: 20,
			coords: [700,200],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 20,
			coords: [900,400],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 20,
			coords: [200,300],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'shape',
			color: 'three',
			lifespan: 20,
			coords: [0,100],
			width: 1250,
			height: 10,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'vert'}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 20,
			coords: [1000,200],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 20,
			coords: [400,200],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 20,
			coords: [200,200],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'three',
			lifespan: 20,
			coords: [300,300],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'shape',
			color: 'one',
			lifespan: 20,
			coords: [525,0],
			width: 200,
			height: 400,
			scoreType:'ComboEnemy',
			behavior: {}
		}]
	}
};