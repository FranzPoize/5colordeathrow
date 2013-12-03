'use strict';

window.levels.level6 = {
	id: 6, 
	name:'lvl 6',
	duration: 40,
	score: 60000, 
	events: {
		0: [{
			type: 'shape',
			color: 'one',
			coords: [120,0],
			width: 10,
			height: 600,
			scoreType:'ComboEnemy',
			behavior: {}
		},{
			type: 'shape',
			color: 'one',
			coords: [1080,0],
			width: 10,
			height: 600,
			scoreType:'ComboEnemy',
			behavior: {}
		}],
		2: [{
			type: 'shape',
			color: 'one',
			coords: [0,0],
			width: 10,
			height: 600,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'horiz'}
		},{
			type: 'shape',
			color: 'one',
			coords: [1230,0],
			width: 10,
			height: 600,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'horiz'}
		}],
		4: [{
			type: 'dot',
			color: 'two',
			coords: [625,100],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'three',
			coords: [625,200],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'three',
			coords: [625,300],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'two',
			coords: [625,400],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'three',
			coords: [75,100],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'two',
			coords: [75,200],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'two',
			coords: [75,300],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'three',
			coords: [75,400],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'three',
			coords: [1175,100],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'two',
			coords: [1175,200],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'two',
			coords: [1175,300],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'three',
			coords: [1175,400],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'four',
			coords: [300,100],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'}
		},{
			type: 'dot',
			color: 'four',
			coords: [300,200],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'}
		},{
			type: 'dot',
			color: 'four',
			coords: [300,300],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'}
		},{
			type: 'dot',
			color: 'four',
			coords: [300,400],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'}
		},{
			type: 'dot',
			color: 'four',
			coords: [900,100],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'}
		},{
			type: 'dot',
			color: 'four',
			coords: [900,200],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'}
		},{
			type: 'dot',
			color: 'four',
			coords: [900,300],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'}
		},{
			type: 'dot',
			color: 'four',
			coords: [900,400],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'}
		}]
	}
};