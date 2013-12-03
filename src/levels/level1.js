'use strict';
window.levels = {};

window.levels.level1 = {
	id: 1, 
	name:'lvl 1',
	duration: 20,
	score: 10000, 
	events: {
		0: [{
			type: 'shape',
			color: 'one',
			coords: [250,0],
			width: 10,
			height: 600,
			scoreType:'ComboEnemy',
			behavior: {}
		},{
			type: 'shape',
			color: 'one',
			coords: [990,0],
			width: 10,
			height: 600,
			scoreType:'ComboEnemy',
			behavior: {}
		}],
		3: [{
			type: 'dot',
			color: 'two',
			lifespan: 5,
			coords: [105,255],
			scoreType:'DotEnemy',
			behavior: {}
		}],
		6: [{
			type: 'dot',
			color: 'two',
			lifespan: 5,
			coords: [1095,255],
			scoreType:'DotEnemy',
			behavior: {}
		}],
		9: [{
			type: 'dot',
			color: 'two',
			lifespan: 5,
			coords: [105,255],
			scoreType:'DotEnemy',
			behavior: {}
		}],
		12: [{
			type: 'dot',
			color: 'two',
			lifespan: 5,
			coords: [1095,255],
			scoreType:'DotEnemy',
			behavior: {}
		}],
		15: [{
			type: 'dot',
			color: 'two',
			lifespan: 5,
			coords: [605,255],
			scoreType:'DotEnemy',
			behavior: {}
		}]
	}
};