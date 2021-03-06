/*** environment.js 
   * File for definitions of graphics and sounds.
 ***/

/**** Game assets ****/
 
/** Assets directory **/
const ASSETS = "assets/";


/*** Game tileset ***/

/** Tileset directory **/
const TILESET = "tileset/"

/* Character tiles */
const T_PLAYER = ASSETS + TILESET + "player1.png";
const T_NON_PLAYER = ASSETS + TILESET + "npc1.png";
const T_DOGFISH_R = ASSETS + TILESET + "dogfish_r.png";
const T_DOGFISH_L = ASSETS + TILESET + "dogfish_l.png";
const T_CHICK_R = ASSETS + TILESET + "chick.png";
const T_CHICK_L = ASSETS + TILESET + "chick.png";
const T_TRIHEADHUMANOID = ASSETS + TILESET + "triheadhumanoid.png";
const T_SNAKE_R = ASSETS + TILESET + "snake_r.png";
const T_SNAKE_L = ASSETS + TILESET + "snake_l.png";
const T_OCTOMAN = ASSETS + TILESET + "octoman.png";

/* Object tiles */
const T_SHIP2 = ASSETS + TILESET + "ship2.png";
const T_SHIP3 = ASSETS + TILESET + "ship3.png";
const T_SHIP4 = ASSETS + TILESET + "ship4.png";
const T_SHIP5 = ASSETS + TILESET + "ship5.png";
const T_SHIP6 = ASSETS + TILESET + "ship6.png";
const T_SHIP7 = ASSETS + TILESET + "ship7.png";
const T_SHIP2F = ASSETS + TILESET + "ship2f.png";
const T_SHIP3F = ASSETS + TILESET + "ship3f.png";
const T_SHIP6F = ASSETS + TILESET + "ship6f.png";
const T_DEBRIS1 = ASSETS + TILESET + "debris1.png";
const T_DEBRIS2 = ASSETS + TILESET + "debris2.png";
const T_CONTAINER = ASSETS + TILESET + "container1.png";
const T_CONTAINER2 = ASSETS + TILESET + "container2.png";
const T_WORKBENCH = ASSETS + TILESET + "workbench.png";
const T_BRIDGE = ASSETS + TILESET + "bridge.png";
const T_SIGN_R = ASSETS + TILESET + "sign_r.png";

/* Environment tiles */
const T_GROUND 	= ASSETS + TILESET + "ground1.png";
const T_VEGETATION1 = ASSETS + TILESET + "vegetation1.png";
const T_VEGETATION2 = ASSETS + TILESET + "vegetation2.png";
const T_VEGETATION3 = ASSETS + TILESET + "vegetation3.png";
const T_BOULDER1 = ASSETS + TILESET + "boulder1.png";
const T_BOULDER2 = ASSETS + TILESET + "boulder2.png";
const T_BOULDER3 = ASSETS + TILESET + "boulder3.png";
const T_SAND_G = ASSETS + TILESET + "sand_g.png";
const T_BEACH1 = ASSETS + TILESET + "beach1.png";
const T_WATER1 = ASSETS + TILESET + "water1.png";
const T_FIRE1 = ASSETS + TILESET + "fire1.png";
const T_TREE1 = ASSETS + TILESET + "tree1.png";
const T_TREE2 = ASSETS + TILESET + "tree2.png";
const T_LAKE1 = ASSETS + TILESET + "lake1.png";
const T_LAKE2 = ASSETS + TILESET + "lake2.png";
const T_LAKE3 = ASSETS + TILESET + "lake3.png";
const T_LAKE4 = ASSETS + TILESET + "lake4.png";
const T_LAKE5 = ASSETS + TILESET + "lake5.png";
const T_LAKE6 = ASSETS + TILESET + "lake6.png";
const T_LAKE7 = ASSETS + TILESET + "lake7.png";
const T_LAKE8 = ASSETS + TILESET + "lake8.png";
const T_ROCK = ASSETS + TILESET + "rock.png";
const T_FISHING_SPOT = ASSETS + TILESET + "fishing_spot.png";
const T_GATE = ASSETS + TILESET + "gate.png";
const T_URBAN_FLOOR = ASSETS + TILESET + "urban_floor.png";
const T_BRICK_WALL1 = ASSETS + TILESET + "brick_wall1.png";
const T_BRICK_WALL2 = ASSETS + TILESET + "brick_wall2.png";
const T_BRICK_WALL3 = ASSETS + TILESET + "brick_wall3.png";

/* Item tiles */
const T_COINS = ASSETS + TILESET + "coins.png";
const T_RATION = ASSETS + TILESET + "ration.png";
const T_BUCKET = ASSETS + TILESET + "bucket.png";
const T_FIRSTAID = ASSETS + TILESET + "firstaid.png";
const T_MEAT = ASSETS + TILESET + "meat.png";
const T_BONES = ASSETS + TILESET + "bones.png";
const T_STD_MASK = ASSETS + TILESET + "std_mask.png";
const T_STD_SUIT = ASSETS + TILESET + "std_suit.png";
const T_FRUIT1 = ASSETS + TILESET + "fruit1.png";
const T_FRUIT2 = ASSETS + TILESET + "fruit2.png";
const T_AXE = ASSETS + TILESET + "axe.png";
const T_PICKAXE = ASSETS + TILESET + "pickaxe.png";
const T_HAMMER = ASSETS + TILESET + "hammer.png";
const T_METAL = ASSETS + TILESET + "metal.png";
const T_WOOD = ASSETS + TILESET + "wood.png";
const T_GRAVEL = ASSETS + TILESET + "gravel.png";
const T_SLINGSHOT = ASSETS + TILESET + "slingshot.png";
const T_SHIV = ASSETS + TILESET + "shiv.png";
const T_BOW = ASSETS + TILESET + "bow.png";
const T_CROSSBOW = ASSETS + TILESET + "crossbow.png";
const T_STONEBALLS = ASSETS + TILESET + "stoneballs.png";
const T_ARROWS = ASSETS + TILESET + "arrows.png";
const T_BABELFISH = ASSETS + TILESET + "babelfish.png";
const T_FISHING_ROD = ASSETS + TILESET + "fishing_rod.png";
const T_WALLET = ASSETS + TILESET + "wallet.png";


/*** Game sounds ***/

/** Sound related constants **/
const FIRE_DIST_OFFSET = 0.4;

/** Sounds directory **/
const SOUNDS = "sounds/"

/* Player sounds */
const PUNCH = ASSETS + SOUNDS + "punch.wav";
const GRUNT = ASSETS + SOUNDS + "grunt.wav";
const WAKEUP = ASSETS + SOUNDS + "wakeup.mp3";

/* Character sounds */
const DOGFISH_SNARL = ASSETS + SOUNDS + "dogfish-snarl.wav";
const DOGFISH_WHINE = ASSETS + SOUNDS + "dogfish-whine.wav";
const CHICK_CHIRP = ASSETS + SOUNDS + "chick-chirp.mp3";
const SNAKE_HISS = ASSETS + SOUNDS + "snake_hiss.ogg";

/* Object sounds */
const CONTAINER_OPEN = ASSETS + SOUNDS + "container-open.wav";
const BUILDING = ASSETS + SOUNDS + "build.wav";
const TRADE = ASSETS + SOUNDS + "trade.wav";

/* Environment sounds */
const FIRE_SOUND = ASSETS + SOUNDS + "fire.mp3";

/* Item sounds */
const WATER_SPLASH = ASSETS + SOUNDS + "water-pouring.wav";
const BUCKET_DIP = ASSETS + SOUNDS + "bucket-dip.mp3";
const EQUIP_WEAPON = ASSETS + SOUNDS + "equip_weapon.m4a";
const EQUIP_CLOTHING = ASSETS + SOUNDS + "equip_clothing.wav";
const CHEWING = ASSETS + SOUNDS + "chewing.wav";
const RELIEF = ASSETS + SOUNDS + "relief.wav";
const HAMMER = ASSETS + SOUNDS + "hammer.wav";
const PICKAXE = ASSETS + SOUNDS + "pickaxe.wav";
const AXE = ASSETS + SOUNDS + "axe.wav";
const BABELFISH_SQUEAK = ASSETS + SOUNDS + "babelfish-squeak.wav";

/* Other sounds */
const SAD_TROMBONE = ASSETS + SOUNDS + "sad-trombone.wav";

/* List of environment elements and their 'examine' strings */
const ENV = {
		"ship2": `T_SHIP2;${STRINGS["examine_ship"]}`,
		"ship3": `T_SHIP3;${STRINGS["examine_ship"]}`,
		"ship4": `T_SHIP4;${STRINGS["examine_ship"]}`,
		"ship5": `T_SHIP5;${STRINGS["examine_ship"]}`,
		"ship6": `T_SHIP6;${STRINGS["examine_ship"]}`,
		"ship7": `T_SHIP7;${STRINGS["examine_ship"]}`,
		
		"ship2f": `T_SHIP2F;${STRINGS["examine_ship"]}`,
		"ship3f": `T_SHIP3F;${STRINGS["examine_ship"]}`,
		"ship6f": `T_SHIP6F;${STRINGS["examine_ship"]}`,
		
		"debris1": `T_DEBRIS1;${STRINGS["examine_debris"]}`,
		"debris2": `T_DEBRIS2;${STRINGS["examine_debris"]}`,
		
		"fire1": `T_FIRE1;${STRINGS["examine_ship_fire"]}`,
		
		"vegetation1": `T_VEGETATION1;${STRINGS["examine_vegetation"]}`,
		"vegetation2": `T_VEGETATION2;${STRINGS["examine_vegetation"]}`,
		
		"sand_g": `T_SAND_G;${STRINGS["examine_sand"]}`,
		
		"beach1": `T_BEACH1;${STRINGS["examine_beach"]}`,
		
		"ground1": `T_GROUND;${STRINGS["examine_ground"]}`,
		
		"container1": `T_CONTAINER;${STRINGS["examine_container"]}`,
		"container2": `T_CONTAINER;${STRINGS["examine_items"]}`,
		
		"dogfish_r": `T_DOGFISH;${STRINGS["examine_dogfish_r"]}`,
		"dogfish_l": `T_DOGFISH;${STRINGS["examine_dogfish_l"]}`,
		
		"chick": `T_CHICK;${STRINGS["examine_chick"]}`,
		
		"triheadhumanoid": `T_TRIHEADHUMANOID;${STRINGS["examine_triheadhumanoid"]}`,
		
		"tree1": `T_TREE1;${STRINGS["examine_tree1"]}`,
		"tree2": `T_TREE2;${STRINGS["examine_tree2"]}`,
		
		"water1": `T_WATER1;${STRINGS["examine_water"]}`,
		
		"rock": `T_ROCK;${STRINGS["examine_rock"]}`,
		
		"workbench": `T_WORKBENCH;${STRINGS["examine_workbench"]}`,
		"bridge": `T_BRIDGE;${STRINGS["examine_bridge"]}`,
		
		"sign_r": `T_SIGN;${STRINGS["examine_sign"]}`,

		"fishing_spot": `T_FISHING_SPOT;${STRINGS["examine_fishing_spot"]}`,

		"snake_r": `T_SNAKE_R;${STRINGS["examine_snake_r"]}`,
		"snake_l": `T_SNAKE_L;${STRINGS["examine_snake_l"]}`,

		"brick_wall1": `T_BRICK_WALL1;${STRINGS["examine_brick_wall"]}`,

		"urban_floor": `T_URBAN_FLOOR;${STRINGS["examine_urban_floor"]}`,

		"gate": `T_GATE;${STRINGS["examine_gate"]}`,

		"octoman": `T_OCTOMAN;${STRINGS["examine_octoman"]}`
}


/* Returns the description of the environment element */
function getDescription(env) {
	return ENV[env].slice(ENV[env].indexOf(";") + 1);
}