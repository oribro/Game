/*
*	Class for a game character
*/
class Character {

	constructor(x=0, y=0){
		this.x = x;
		this.y = y;
		this.hp = DEFAULT_HP;
	}

	get xPos() {
		return this.x;
	}
	get yPos() {
		return this.y;
	}
	get health(){
		return this.hp;
	}
	set xPos(n) {
		this.x = n;
	}
	set yPos(n) {
		this.y = n;
	}
	set health(hp){
		this.hp = hp;
	}
	/* Redraws the ground and sets character at new position.
	*  Returns the new position to draw the character symbol at.
	*/
	moveChar(xPos, yPos) {

		var biDigCurX = getTwoDigits(this.xPos);
		var biDigCurY = getTwoDigits(this.yPos);
		
		// Set current character cell to ground symbol and color.
		document.getElementById("c"+biDigCurY+biDigCurX).innerHTML = GROUND;
		document.getElementById("c"+biDigCurY+biDigCurX).style.color = C_GROUND;
		
		// Set character position properties to new position.
		this.xPos = xPos;
		this.yPos = yPos;
		
		// Increment the turn counter.
		incrementTurnCounter();

		return [
			xPos,
			yPos
		];
	}

}


/*
*	Class for the human player character.
*/
class Player extends Character {

	constructor(x=0, y=0){
		super(x, y);
		this.draw(x, y);
	}

	move(event) {
		var key = event.key;
		// Vars for computing the new position to move the character.
		let newBiDig = [];
		let newPos = [];
		// Obtain the npcs from the storage to check for bounds.
		let npcs = JSON.parse(
			sessionStorage.getItem('npcs')
		); 
		
		switch(key) {
			case "ArrowRight":
				newPos = [this.xPos + 1, this.yPos];
				break;
			case "ArrowLeft":
				newPos = [this.xPos - 1, this.yPos];
				break;
			case "ArrowUp":
				newPos = [this.xPos, this.yPos - 1]
				break;
			case "ArrowDown":
				newPos = [this.xPos, this.yPos + 1]
				break;
			default:
				return;
		}

		if(checkBounds(...newPos, npcs)) {
			newBiDig = this.moveChar(...newPos);
			// Draw the character symbol at the updated location.
			this.draw(...newBiDig);
		}

	}

	/*
	*	Draws the character symbol at the given position. 
	*/
	draw(xPos, yPos){
		const biDigX = getTwoDigits(xPos);
		const biDigY = getTwoDigits(yPos);
		document.getElementById("c"+biDigY+biDigX).innerHTML = PLAYER;
		document.getElementById("c"+biDigY+biDigX).style.color = C_PLAYER;
	}
}

/*
* Class for a Non Playable Character.
*/
class NPC extends Character{

	constructor(x, y){
		super(x, y);
		this.draw(x, y);
	}

	/*
	*	Draws the character symbol at the given position.
	*/
	draw(xPos, yPos){
		const biDigX = getTwoDigits(xPos);
		const biDigY = getTwoDigits(yPos);
		document.getElementById("c"+biDigY+biDigX).innerHTML = NON_PLAYER;
		document.getElementById("c"+biDigY+biDigX).style.color = C_NPC;
	}

}
