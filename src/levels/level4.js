'use strict';

window.levels.level4 = {
	id: 2, 
	name:'lvl 2',
	duration: 30,
	score: 46000, 
	events: {
		0: [{
			type: 'shape',
			color: 'one',
			coords: [250,0],
			width: 150,
			height: 600,
			scoreType:'ComboEnemy',
			behavior: {}
		},{
			type: 'shape',
			color: 'two',
			coords: [850,0],
			width: 150,
			height: 600,
			scoreType:'ComboEnemy',
			behavior: {}
		}],
		3: [{
			type: 'dot',
			color: 'one',
			lifespan: 5,
			coords: [125,100],
			scoreType:'DotEnemy',
			behavior: {}
		}],
		5: [{
			type: 'dot',
			color: 'two',
			lifespan: 5,
			coords: [1125,450],
			scoreType:'DotEnemy',
			behavior: {}
		}],
		7: [{
			type: 'dot',
			color: 'one',
			lifespan: 5,
			coords: [125,450],
			scoreType:'DotEnemy',
			behavior: {}
		}],
		9: [{
			type: 'dot',
			color: 'two',
			lifespan: 5,
			coords: [1125,100],
			scoreType:'DotEnemy',
			behavior: {}
		}],
		12: [{
			type: 'shape',
			color: 'three',
			lifespan: 20,
			coords: [0,0],
			width: 1250,
			height: 10,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'vert'
			}
		}],
		15: [{
			type: 'dot',
			color: 'two',
			lifespan: 5,
			coords: [125,150],
			scoreType:'DotEnemy',
			behavior: {}
		}],
		17: [{
			type: 'dot',
			color: 'one',
			lifespan: 5,
			coords: [1125,400],
			scoreType:'DotEnemy',
			behavior: {}
		}],
		19: [{
			type: 'dot',
			color: 'two',
			lifespan: 5,
			coords: [125,400],
			scoreType:'DotEnemy',
			behavior: {}
		}],
		21: [{
			type: 'dot',
			color: 'one',
			lifespan: 5,
			coords: [1125,150],
			scoreType:'DotEnemy',
			behavior: {}
		}],
		23: [{
			type: 'dot',
			color: 'two',
			lifespan: 5,
			coords: [1125,400],
			scoreType:'DotEnemy',
			behavior: {}
		}]
	}
};