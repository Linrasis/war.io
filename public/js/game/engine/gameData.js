var gameData = {}


/**
*	Ids to categorize the different game elements.
*/
gameData.FAMILIES = {
	unit : 0,
	building : 1,
	land : 2
}


/**
*	Big array containing all the elements data.
*/
gameData.ELEMENTS = [[], [] ,[]];


/**
*	List of player's ranks.
*/
gameData.RANKS = {
	me : 0,
	ally : 1,
	neutral : 2,
	enemy : 3
}


/**
*	List of player's statuses.
*/
gameData.PLAYER_STATUSES = {
	ig : 0,
	defeat : 1,
	victory : 2,
	watcher : 3,
	surrender : 4
}


/**
* 	Global variable to get a unique id for any game element.
*/
gameData.unitId = 0;


/**
*	Creates a unique id for every game element.
*/
gameData.createUniqueId = function (family) {
	this.unitId += 1;
	var m = new Date().getMilliseconds();
	return family + 'i' + m + this.unitId;
}
