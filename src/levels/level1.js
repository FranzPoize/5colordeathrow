'use strict';

window.level1 = {
	'length': 120,
	'events': {
		'0': [{
			'type': 'dot',
			'color': 'one',
			'lifespan': 20,
			'coords': [150,120],
			'scoreType':'NormalEnemy'
		}],
		'5': [{
			'type': 'dot',
			'color': 'two',
			'lifespan': 20,
			'coords': [11,12],
			'scoreType':'ComboEnemy'
		}, {
			'type': 'dot',
			'color': 'two',
			'lifespan': 20,
			'coords': [11,12],
			'scoreType':'NormalEnemy'
		}],
		'55': [{
			'type': 'dot',
			'color': 'three',
			'lifespan': 20,
			'coords': [11,12],
			'scoreType':'NormalEnemy'
		}, {
			'type': 'shape',
			'color': 'four',
			'lifespan': 20,
			'coords': [11,12],
			'scoreType':'NormalEnemy'
		}]
	}
};