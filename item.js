// Constant item values.
const MAX_PILE_COINS = 10;

// Item list. 
const ITEMS = {
		"Ration": "Ration;Food;100",
		"Coins":  "Coins;Currency;10"
	};

/*
 *	Class for game items.
 */
class Item {
	
	/* Constructor for Item.
	 * Default construction should be with using only the name of the item from ITEMS as argument.
	 */
	constructor(name, type, value) {
		if(type === undefined) {
			var itemNameLastIndex = ITEMS[name].indexOf(";");
			var itemTypeFirstIndex = ITEMS[name].indexOf(";") + 1;
			var itemTypeLastIndex = ITEMS[name].lastIndexOf(";");
			var itemValueFirstIndex = ITEMS[name].lastIndexOf(";") + 1;

			this.itemName = ITEMS[name].slice(0, itemNameLastIndex);
			this.itemType = ITEMS[name].slice(itemTypeFirstIndex, itemTypeLastIndex);
			this.itemValue = ITEMS[name].slice(itemValueFirstIndex);
		} else {
			this.itemName = name;
			this.itemType = type;
			this.itemValue = value;
		}
	}
	
	get name() {
		return this.itemName;
	}
	get type() {
		return this.itemType;
	}
	get value() {
		return this.itemValue;
	}
	set name(newName) {
		this.itemName = newName;
	}
	set type(newType) {
		this.itemType = newType;
	}
	set value(newValue) {
		this.itemValue = newValue;
	}
}
