var buildLogic = {};


/**
*	CONSTANTS
*/
buildLogic.STATUS_CANNOT_BUILD_HERE = 1;
buildLogic.STATUS_CAN_BUILD_HERE = 10;


/**
*	The user has chosen where to build the structure.
*/
buildLogic.startConstruction = function (building) {
	gameLogic.gameElements.push(building);
	userInput.leaveConstructionMode();
	GUI.updateToolbar();
}

/**
*	A builder has done a build action on this building, its progress is updated.
*/
buildLogic.updateConstruction = function (building) {
	building.constructionProgress += 100 / building.timeConstruction;
	building.color = building.constructionColors[parseInt((building.constructionColors.length - 1) * building.constructionProgress / 100)];
	if(building.constructionProgress >= 100) {
		building.constructionProgress = 100;
		GUI.updateToolbar();
	}
}


/**
*	Returns the list of the buildings which can be built by the builder(s) selected.
*/
buildLogic.getBuildingButtons = function () {
	switch(gameLogic.selected[0].race) {
		
		case gameData.ARMIES.human :
			return this.getWhatCanBeBuilt(gameData.HUMAN_BUILDINGS);
		break;

		//...
	}
}


/**
*	Filters the list of buildings which can be build depending 
*	on its needs (resources, researchs, etc...).
*/
buildLogic.getWhatCanBeBuilt = function (buildings) {
	var array = [];
	for(var key in buildings) {
		var building = buildings[key];
		for(var i in building.needs) {
			var need = building.needs[i];
		}
		building.isEnabled = true;
		array.push(building);
	}
	return array;
}