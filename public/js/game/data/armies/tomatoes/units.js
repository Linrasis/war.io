gameData.ELEMENTS[gameData.FAMILIES.unit][gameData.RACES.tomatoes.id] = {
	builder: {
		name: 'Builder',
		tooltip: 'Builder (B)',
		shortcut: 66,
		f: gameData.FAMILIES.unit,
		r: gameData.RACES.tomatoes.id,
		t: 0,
		shape: [[1]],
		speed: 1,
		isBuilder: true,
		buttons: [gameData.BUTTONS.build],
		timeConstruction: 10,
		l: 40,
		attackSpeed: 1,
		attack: 5, 
		defense: 0,
		weaponType: fightLogic.WEAPON_TYPES.normal,
		armorType: fightLogic.ARMOR_TYPES.unarmored,
		gatheringSpeed: 1,
		maxGathering: 10,
		pop: 1,
		needs: [{t: gameData.RESOURCES.water.id, value: 50}],
		g: 'builder',
		gui: 'ic_builder.png',
		height: 6,
		range: 1,
		vision: 12,
		lifeBarWidth: 8,
		techs: [gameData.ELEMENTS[gameData.FAMILIES.research][gameData.RACES.tomatoes.id].doublekatana.t],
		passiveSkill: {}
	},
	baseUnit1: {
		name: 'Swordsman',
		tooltip: 'Swordsman (W)',
		shortcut: 87,
		f: gameData.FAMILIES.unit,
		r: gameData.RACES.tomatoes.id,
		t: 1,
		shape: [[1]],
		speed: 1,
		isBuilder: false,
		buttons: [],
		timeConstruction: 15,
		l: 80,
		attackSpeed: 1,
		attack: 10, 
		defense: 1,
		weaponType: fightLogic.WEAPON_TYPES.normal,
		armorType: fightLogic.ARMOR_TYPES.medium,
		pop: 1,
		needs: [{t: gameData.RESOURCES.water.id, value: 60}],
		g: 'swordsman',
		gui: 'ic_swordsman.png',
		height: 6,
		range: 1,
		vision: 12,
		lifeBarWidth: 8,
		passiveSkill: {}
	},
	baseUnit2: {
		name: 'Bowman',
		tooltip: 'Bowman (Q)',
		shortcut: 81,
		f: gameData.FAMILIES.unit,
		r: gameData.RACES.tomatoes.id,
		t: 1,
		shape: [[1]],
		speed: 1,
		isBuilder: false,
		buttons: [],
		timeConstruction: 15,
		l: 80,
		attackSpeed: 1,
		attack: 10, 
		defense: 1,
		weaponType: fightLogic.WEAPON_TYPES.normal,
		armorType: fightLogic.ARMOR_TYPES.medium,
		pop: 1,
		needs: [{t: gameData.RESOURCES.water.id, value: 60}],
		g: 'bowman',
		gui: 'ic_bowman.png',
		height: 6,
		range: 1,
		vision: 12,
		lifeBarWidth: 8,
		passiveSkill: {}
	},
	specialUnit1: {
		name: 'Knight',
		tooltip: 'Knight (K)',
		shortcut: 75,
		f: gameData.FAMILIES.unit,
		r: gameData.RACES.tomatoes.id,
		t: 1,
		shape: [[1]],
		speed: 1,
		isBuilder: false,
		buttons: [],
		timeConstruction: 15,
		l: 80,
		attackSpeed: 1,
		attack: 10, 
		defense: 1,
		weaponType: fightLogic.WEAPON_TYPES.normal,
		armorType: fightLogic.ARMOR_TYPES.medium,
		pop: 1,
		needs: [{t: gameData.RESOURCES.water.id, value: 60}],
		g: 'knight',
		gui: 'ic_knight.png',
		height: 6,
		range: 1,
		vision: 12,
		lifeBarWidth: 8,
		passiveSkill: {}
	}
};
