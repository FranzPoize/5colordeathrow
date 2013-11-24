'use strict';

window.levels.level8 = {
	id: 8, 
	name:'lvl 8',
	duration: 60,
	score: 200000, 
	events: {
		0: [
			{ type:'dot', color:'one', lifespan:60, coords:[450,250], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color:'two', lifespan:60, coords:[750,250], scoreType:'DotEnemy', behavior:{ type:'Follower' } }
		]
		, 3: [
			{ type:'dot', color: 'one', lifespan: 60, coords: [450,230], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [450,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'two', lifespan: 60, coords: [750,230], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'two', lifespan: 60, coords: [750,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } }
		]
		, 6: [
			{ type:'dot', color: 'one', lifespan: 60, coords: [450,200], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [450,240], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [450,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			
			{ type:'dot', color: 'three', lifespan: 60, coords: [750,200], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'three', lifespan: 60, coords: [750,240], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'three', lifespan: 60, coords: [750,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } }
		]
		, 10: [
			{ type:'dot', color: 'four', lifespan: 60, coords: [430,230], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'four', lifespan: 60, coords: [430,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'four', lifespan: 60, coords: [470,230], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'four', lifespan: 60, coords: [470,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			
			{ type:'dot', color: 'two', lifespan: 60, coords: [730,230], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'two', lifespan: 60, coords: [730,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'two', lifespan: 60, coords: [780,230], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'two', lifespan: 60, coords: [780,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } } 
		]
		, 15: [
			{ type:'dot', color: 'one', lifespan: 60, coords: [370,200], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [370,250], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [370,300], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [420,200], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [420,250], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [420,300], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [420,200], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [420,250], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [420,300], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [470,200], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [470,250], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [470,300], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			
			{ type:'dot', color: 'three', lifespan: 60, coords: [720,200], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'three', lifespan: 60, coords: [720,250], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'three', lifespan: 60, coords: [720,300], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'three', lifespan: 60, coords: [770,200], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'three', lifespan: 60, coords: [770,250], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'three', lifespan: 60, coords: [770,300], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'three', lifespan: 60, coords: [820,200], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'three', lifespan: 60, coords: [820,250], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'three', lifespan: 60, coords: [820,300], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'three', lifespan: 60, coords: [820,200], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'three', lifespan: 60, coords: [820,250], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'three', lifespan: 60, coords: [820,300], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
		]
		, 27: [
			{ type:'dot', color: 'one', lifespan: 60, coords: [430,230], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [430,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'four', lifespan: 60, coords: [470,230], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'four', lifespan: 60, coords: [470,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			
			{ type:'dot', color: 'four', lifespan: 60, coords: [730,230], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'four', lifespan: 60, coords: [730,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [780,230], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [780,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } } 
		]
		, 38: [
			{ type:'dot', color: 'one', lifespan: 60, coords: [600,250], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [430,230], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [430,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'four', lifespan: 60, coords: [470,230], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'three', lifespan: 60, coords: [470,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			
			{ type:'dot', color: 'four', lifespan: 60, coords: [730,230], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'four', lifespan: 60, coords: [730,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'three', lifespan: 60, coords: [780,230], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'three', lifespan: 60, coords: [780,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } } 
		]
		, 48: [
			{ type:'dot', color: 'one', lifespan: 60, coords: [430,230], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'two', lifespan: 60, coords: [430,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'three', lifespan: 60, coords: [470,230], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'four', lifespan: 60, coords: [470,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			
			{ type:'dot', color: 'two', lifespan: 60, coords: [730,230], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'three', lifespan: 60, coords: [730,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'four', lifespan: 60, coords: [780,230], scoreType:'DotEnemy', behavior:{ type:'Follower' } }, 
			{ type:'dot', color: 'one', lifespan: 60, coords: [780,280], scoreType:'DotEnemy', behavior:{ type:'Follower' } } 
		]
	}
};
