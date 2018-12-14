/* Assets directory */
const ASSETS = "assets/";

/* Game tileset */
const TILESET = "tileset/"
const T_PLAYER = ASSETS + TILESET + "player1.png";
const T_GROUND 	= ASSETS + TILESET + "ground1.png";
const T_NON_PLAYER = ASSETS + TILESET + "npc1.png";
const T_SHIP1 = ASSETS + TILESET + "ship1.png";
const T_SHIP2 = ASSETS + TILESET + "ship2.png";
const T_SHIP3 = ASSETS + TILESET + "ship3.png";
const T_SHIP4 = ASSETS + TILESET + "ship4.png";
const T_SHIP5 = ASSETS + TILESET + "ship5.png";
const T_SHIP6 = ASSETS + TILESET + "ship6.png";
const T_SHIP7 = ASSETS + TILESET + "ship7.png";
const T_DEBRIS1 = ASSETS + TILESET + "debris1.png";
const T_DEBRIS2 = ASSETS + TILESET + "debris2.png";
const T_COINS = ASSETS + TILESET + "coins.png";
const T_RATION = ASSETS + TILESET + "ration.png";
const T_VEGETATION1 = ASSETS + TILESET + "vegetation1.png";
const T_VEGETATION2 = ASSETS + TILESET + "vegetation2.png";
const T_SAND_G = ASSETS + TILESET + "sand_g.png";
const T_BEACH1 = ASSETS + TILESET + "beach1.png";
const T_WATER1 = ASSETS + TILESET + "water1.png";
const T_BOULDER1 = ASSETS + TILESET + "boulder1.png";
const T_BOULDER2 = ASSETS + TILESET + "boulder2.png";
const T_BOULDER3 = ASSETS + TILESET + "boulder3.png";
const T_FIRE1 = ASSETS + TILESET + "fire1.png";
const T_BUCKET = ASSETS + TILESET + "bucket.png";

/* Game sounds */
const SOUNDS = "sounds/"
const FIRE_SOUND = ASSETS + SOUNDS + "fire.mp3";

const ENV = {
		"ship1": "T_SHIP1;STRINGS[`examine_ship`]",
		"ship2": "T_SHIP2;STRINGS[`examine_ship`]",
		"ship3": "T_SHIP3;STRINGS[`examine_ship`]",
		"ship4": "T_SHIP4;STRINGS[`examine_ship`]",
		"ship5": "T_SHIP5;STRINGS[`examine_ship`]",
		"ship6": "T_SHIP6;STRINGS[`examine_ship`]",
		"ship7": "T_SHIP7;STRINGS[`examine_ship`]",
		
		"debris1": "T_DEBRIS1;STRINGS[`examine_debris`]",
		"debris2": "T_DEBRIS2;STRINGS[`examine_debris`]",
		
		"ship_fire": "T_FIRE1;STRINGS[`examine_ship_fire`]",
		
		"vegetation1": "T_VEGETATION1;STRINGS[`examine_vegetation`]",
		"vegetation2": "T_VEGETATION2;STRINGS[`examine_vegetation`]",
		
		"sand_g": "T_SAND_G;STRINGS[`examine_sand`]",
		
		"beach1": "T_BEACH1;STRINGS[`examine_beach`]",
		
		"ground": "T_GROUND;STRINGS[`examine_ground`]"
}

/* Returns the description of the environment element */
function getDescription(env) {
	return ENV[env].slice(ENV[env].indexOf(";") + 1);
}