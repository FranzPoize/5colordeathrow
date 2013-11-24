'use strict';

window.levels.level5 = {
	id: 5, 
	name:'lvl 5',
	duration: 30,
	score: 600000, 
	events: {
		2: [{
			type: 'dot',
			color: 'one',
			lifespan: 50,
			coords: [100,100],
			scoreType:'DotEnemy',
			behavior: {	}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 50,
			coords: [100,150],
			scoreType:'DotEnemy',
			behavior: {	}
		}],
		3: [{
			type: 'dot',
			color: 'two',
			lifespan: 50,
			coords: [150,100],
			scoreType:'DotEnemy',
			behavior: {	}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 50,
			coords: [150,150],
			scoreType:'DotEnemy',
			behavior: {	}
		}],
		4: [{
			type: 'dot',
			color: 'three',
			lifespan: 50,
			coords: [200,100],
			scoreType:'DotEnemy',
			behavior: {	}
		},{
			type: 'dot',
			color: 'three',
			lifespan: 50,
			coords: [200,150],
			scoreType:'DotEnemy',
			behavior: {	}
		}],
		5: [{
			type: 'dot',
			color: 'four',
			lifespan: 50,
			coords: [250,100],
			scoreType:'DotEnemy',
			behavior: {	}
		},{
			type: 'dot',
			color: 'four',
			lifespan: 50,
			coords: [250,150],
			scoreType:'DotEnemy',
			behavior: {	}
		}],
		6: [{
			type: 'dot',
			color: 'five',
			lifespan: 50,
			coords: [300,100],
			scoreType:'DotEnemy',
			behavior: {	}
		},{
			type: 'dot',
			color: 'five',
			lifespan: 50,
			coords: [300,150],
			scoreType:'DotEnemy',
			behavior: {	}
		}],
		7: [{
			type: 'dot',
			color: 'four',
			lifespan: 50,
			coords: [350,100],
			scoreType:'DotEnemy',
			behavior: {	}
		},{
			type: 'dot',
			color: 'four',
			lifespan: 50,
			coords: [350,150],
			scoreType:'DotEnemy',
			behavior: {	}
		}],
		8: [{
			type: 'dot',
			color: 'three',
			lifespan: 50,
			coords: [400,100],
			scoreType:'DotEnemy',
			behavior: {	}
		},{
			type: 'dot',
			color: 'three',
			lifespan: 50,
			coords: [400,150],
			scoreType:'DotEnemy',
			behavior: {	}
		},{
			type: 'shape',
			color: 'one',
			lifespan: 50,
			width:10,
			height:600,
			coords: [0,0],
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'horiz'
			}
		},{
			type: 'shape',
			color: 'one',
			lifespan: 50,
			width:10,
			height:600,
			coords: [1230,0],
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'horiz'
			}
		}],
		9: [{
			type: 'dot',
			color: 'two',
			lifespan: 50,
			coords: [450,100],
			scoreType:'DotEnemy',
			behavior: {	}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 50,
			coords: [450,150],
			scoreType:'DotEnemy',
			behavior: {	}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 50,
			coords: [947,448],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 50,
			coords: [998,465],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 50,
			coords: [963,392],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: 'two',
			lifespan: 50,
			coords: [1017,407],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: 'three',
			lifespan: 50,
			coords: [253,448],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: 'three',
			lifespan: 50,
			coords: [202,465],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: 'three',
			lifespan: 50,
			coords: [237,392],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: 'three',
			lifespan: 50,
			coords: [183,407],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'shape',
			color: 'three',
			lifespan: 50,
			width:1250,
			height:10,
			coords: [0,0],
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'vert'
			}
		}],
		10: [{
			type: 'dot',
			color: 'one',
			lifespan: 50,
			coords: [500,100],
			scoreType:'DotEnemy',
			behavior: {	}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 50,
			coords: [500,150],
			scoreType:'DotEnemy',
			behavior: {	}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 50,
			coords: [972,340],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 50,
			coords: [1027,353],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 50,
			coords: [980,288],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: 'one',
			lifespan: 50,
			coords: [1037,295],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: 'four',
			lifespan: 50,
			coords: [228,340],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: 'four',
			lifespan: 50,
			coords: [173,353],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: 'four',
			lifespan: 50,
			coords: [220,288],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: 'four',
			lifespan: 50,
			coords: [163,295],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		}]
	}
};