'use strict';

function c() {
	var colorNames =  Object.keys( window.color );
	return colorNames[ Math.floor( Math.random() * colorNames.length ) ];
}

window.levels.level7 = {
	id: 7,
	name:'lvl 10',
	duration: 30,
	score: 1,
	events: {
		0: [{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [300,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [350,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [400,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [450,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [550,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [600,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [650,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [700,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [800,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [850,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [900,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [950,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},








		// --------------------------------------------------- 2nd ROW
		/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [300,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [350,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [400,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [450,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [550,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [600,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [650,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [700,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [800,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [850,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [900,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [950,200],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},

		{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [890,225],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},


		// --------------------------------------------------- 3rd ROW
		/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [300,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [350,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [400,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [450,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [550,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [600,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [650,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [700,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [800,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [850,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [900,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [950,310],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},

		{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [890,285],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},



		// --------------------------------------------------- 4th ROW
		{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [300,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [350,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [400,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [450,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [550,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [600,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [650,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [700,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [800,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [850,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [900,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [950,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		}],




















		12: [{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [300,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [350,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [400,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [450,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [550,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [600,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [650,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [700,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [800,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [850,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [900,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [950,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},








		// --------------------------------------------------- 2nd ROW
		/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [300,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [350,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [400,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [450,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [550,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [600,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [650,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [700,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [800,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [850,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [900,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [950,200],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},

		{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [890,225],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},


		// --------------------------------------------------- 3rd ROW
		/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [300,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [350,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [400,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [450,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [550,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [600,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [650,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [700,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [800,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [850,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [900,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [950,310],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},

		{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [890,285],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},



		// --------------------------------------------------- 4th ROW
		{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [300,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [350,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [400,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [450,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [550,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [600,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [650,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [700,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [800,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [850,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [900,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [950,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		}],



















		24: [{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [300,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [350,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [400,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [450,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [550,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [600,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [650,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [700,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [800,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [850,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [900,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [950,150],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},








		// --------------------------------------------------- 2nd ROW
		/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [300,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [350,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [400,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [450,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [550,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [600,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [650,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [700,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [800,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [850,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [900,220],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [950,200],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},

		{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [890,225],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},


		// --------------------------------------------------- 3rd ROW
		/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [300,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [350,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [400,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [450,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [550,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [600,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [650,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [700,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [800,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},/*{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [850,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [900,290],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},*/{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [950,310],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},

		{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [890,285],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},



		// --------------------------------------------------- 4th ROW
		{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [300,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [350,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [400,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [450,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [550,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [600,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [650,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [700,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [800,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [850,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [900,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		},{
			type: 'dot',
			color: c(),
			lifespan: 10,
			coords: [950,360],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'
			}
		}]
	}
};