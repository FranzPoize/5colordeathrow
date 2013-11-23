'use strict';

window.getColor = function(n)
{
	switch(n+1)
	{
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
}

window.getLevelDurationText = function( nDuration )
{
	var sSeconds = nDuration % 60;
	if( sSeconds == 0 )
		sSeconds = "00";
	else if( sSeconds < 10 )
		sSeconds = "0" + sSeconds;
	
	return parseInt( nDuration / 60 ) + ":" + sSeconds;
}

window.getScoreText = function( nScore )
{
	var sScore = "" + nScore;
	var sNewScore = "";
	var c;
	
	for(var j = 1, i = sScore.length - 1; i >= 0; i--, j++)
	{
		c = sScore.charAt(i);
		sNewScore = c + sNewScore;
		
		if(j % 3 == 0)
			sNewScore = " " + sNewScore;
	}
	
	return sNewScore;
}
