'use strict';

window.level1 = {
	'length': 120,
	'events': {
		'0': [{
			'type': 'shape',
			'color': 'five',
			'lifespan': 20,
			'coords': [150,120],
			width: 30,
			height: 150,
			'scoreType':'NormalEnemy'
		}],
		'5': [{
			'type': 'dot',
			'color': 'two',
			'lifespan': 20,
			'coords': [200,120],
			'scoreType':'ComboEnemy'
		}, {
			'type': 'dot',
			'color': 'three',
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