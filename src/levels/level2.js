'use strict';


window.levels.level2 = {
	id: 2,
	name:'lvl 2',
	duration: 40,
	score: 70000,
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
		4:[{
			type: 'shape',
			color: 'two',
			coords: [0,20],
			width: 1250,
			height: 10,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'vert'}
		},{
			type: 'shape',
			color: 'two',
			coords: [0,520],
			width: 1250,
			height: 10,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'vert'}
		}],
		7: [{
			type: 'dot',
			color: 'one',
			lifespan: 8,
			coords: [105,255],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 8,
			coords: [1095,255],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 8,
			coords: [605,100],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 8,
			coords: [605,410],
			scoreType:'DotEnemy',
			behavior: {}
		}],
		13: [{
			type: 'dot',
			color: 'two',
			lifespan: 8,
			coords: [105,350],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 8,
			coords: [725,100],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 8,
			coords: [505,350],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 8,
			coords: [1095,350],
			scoreType:'DotEnemy',
			behavior: {}
		}],
		22: [{
			type: 'dot',
			color: 'two',
			lifespan: 8,
			coords: [105,350],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 8,
			coords: [725,350],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 8,
			coords: [505,100],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 8,
			coords: [1095,100],
			scoreType:'DotEnemy',
			behavior: {}
		}],
		31: [{
			type: 'dot',
			color: 'two',
			lifespan: 8,
			coords: [105,350],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 8,
			coords: [725,100],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 8,
			coords: [505,350],
			scoreType:'DotEnemy',
			behavior: {}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 8,
			coords: [1095,350],
			scoreType:'DotEnemy',
			behavior: {}
		}],
	}
};