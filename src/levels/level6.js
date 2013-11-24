'use strict';

window.levels.level6 = {
	id: 6, 
	name:'lvl 6',
	duration: 40,
	score: 400000, 
	events: {
		0: [{
			type: 'shape',
			color: 'two',
			coords: [160,0],
			width: 100,
			height: 600,
			scoreType:'ComboEnemy',
			behavior: {}
		},{
			type: 'shape',
			color: 'one',
			coords: [120,0],
			width: 10,
			height: 600,
			scoreType:'ComboEnemy',
			behavior: {}
		},{
			type: 'shape',
			color: 'two',
			coords: [950,0],
			width: 100,
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
			color: 'three',
			coords: [0,0],
			width: 10,
			height: 600,
			scoreType:'ComboEnemy',
			behavior: {
				type:'Translation',
				orient:'horiz'}
		},{
			type: 'shape',
			color: 'four',
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
			color: 'five',
			coords: [625,100],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'four',
			coords: [625,200],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'four',
			coords: [625,300],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'five',
			coords: [625,400],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'five',
			coords: [75,100],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'four',
			coords: [75,200],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'four',
			coords: [75,300],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'five',
			coords: [75,400],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'five',
			coords: [1175,100],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'four',
			coords: [1175,200],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'four',
			coords: [1175,300],
			scoreType:'DotEnemy',
			behavior: {
				type:'RandomTranslation'}
		},{
			type: 'dot',
			color: 'five',
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
			color: 'three',
			coords: [300,200],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'}
		},{
			type: 'dot',
			color: 'three',
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
			coords: [950,100],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'}
		},{
			type: 'dot',
			color: 'three',
			coords: [950,200],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'}
		},{
			type: 'dot',
			color: 'three',
			coords: [950,300],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'}
		},{
			type: 'dot',
			color: 'four',
			coords: [950,400],
			scoreType:'DotEnemy',
			behavior: {
				type:'Follower'}
		}]
	}
};