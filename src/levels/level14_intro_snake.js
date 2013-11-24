'use strict';
window.levels.level14 = {
	id: 14, 
	name:'lvl 14',
	duration: 25,
	score: 300000, 
	events: {
		0: [{
			type: 'snake',
			color: 'two',
			coords: [200,100],
			chunksNumber: 2,
			chunkH: 32,
			chunkW: 32,
			speedX: 2,
			speedY: 2,
			detectionDistance: 200,
			scoreType:'SnakeEnemy',
			behavior: {}
		}, {
			type: 'dot',
			color: 'three',
			lifespan: 9,
			coords: [1000,400],
			scoreType:'DotEnemy',
			behavior: {}
		}, {
			type: 'dot',
			color: 'two',
			lifespan: 9,
			coords: [200,100],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 9,
			coords: [1000,100],
			scoreType:'DotEnemy',
			behavior: {}
		}, {
			type: 'dot',
			color: 'three',
			lifespan: 9,
			coords: [200,400],
			scoreType:'DotEnemy',
			behavior: {}
		}],
		15: [{
			type: 'snake',
			color: 'two',
			coords: [200,100],
			chunksNumber: 7,
			chunkH: 30,
			chunkW: 30,
			speedX: 7,
			speedY: 7,
			detectionDistance: 200,
			scoreType:'SnakeEnemy',
			behavior: {}
		}, {
			type: 'dot',
			color: 'three',
			lifespan: 20,
			coords: [800,100],
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
			coords: [100,400],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'shape',
			color: 'three',
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
			coords: [300,100],
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
			type: 'dot',
			color: 'two',
			lifespan: 20,
			coords: [1000,500],
			scoreType:'DotEnemy',
			behavior: {}
		}]
	}
};