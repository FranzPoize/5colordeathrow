'use strict';
window.levels.level14 = {
	id: 1, 
	name:'lvl 14',
	duration: 30,
	score: 300000, 
	events: {
		0: [{
			type: 'snake',
			color: 'two',
			coords: [200,100],
			chunksNumber: 4,
			chunkH: 30,
			chunkW: 30,
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