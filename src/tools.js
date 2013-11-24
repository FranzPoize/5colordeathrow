'use strict';

window.getColor = function(n) {
	switch(n+1) {
	case 1:
		return window.color.one;
	case 2:
		return window.color.two;
	case 3:
		return window.color.three;
	case 4:
		return window.color.four;
	case 5:
		return window.color.five;
	}
};

window.getLevelDurationText = function( nDuration )
{
	var sSeconds = "" + nDuration % 60;
	while( sSeconds.length < 2 )
		sSeconds = "0" + sSeconds;
		
	return Math.floor( nDuration / 60 ) + ':' + sSeconds;
};

window.getScoreText = function( nScore ) {
	var sScore = '' + nScore;
	var sNewScore = '';
	var c;

	for(var j = 1, i = sScore.length - 1; i >= 0; i--, j++)
	{
		c = sScore.charAt(i);
		sNewScore = c + sNewScore;

		if ( j % 3 === 0 ) {
			sNewScore = ' ' + sNewScore;
		}
	}

	return sNewScore;
}

window.distance = function (a, b) {
	return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
}
