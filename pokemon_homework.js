console.log("Let's play a game.")

let pokeCards = [{name: "Bulbasaur", damage:60}, {name: "Caterpie", damage:40},{name: "Charmander", damage:60},{name: "Clefairy", damage:50},{name: "Jigglypuff", damage:60},{name: "Mankey", damage:30},{name: "Meowth", damage:60},{name: "Nidoran - female", damage:60},{name: "Nidoran - male", damage:50},{name: "Oddish", damage:40},{name: "Pidgey", damage:50},{name: "Pikachu", damage:50},{name: "Poliwag", damage:50},{name: "Psyduck", damage:60},{name: "Rattata", damage:30}, {name: "Squirtle", damage:60}, {name: "Vulpix", damage:50}, {name: "Weedle", damage:40}];
let cardsPlayed = [];

class Player {
	constructor(name){
		this.name = name;
		this.points = 0;
		this.roundsPlayed = 0;
		this.roundsWon = 0;
		this.cardsDealt = [];
		this.cardsPlayed = [];
	}
	dealCards(){
		//Deal 3 random cards
		for(let i = 0; i < 3; i++){
			let card = pokeCards[Math.floor(Math.random()*pokeCards.length)];
			//Loop to run dealt cards against all cards
			for(let j = 0; j < pokeCards.length; j++){
				let cardCompare = pokeCards[j];
				//remove cards that have been played
				if(cardCompare === card){
				pokeCards.splice(j, 1);
				}
			}
			this.cardsDealt.push(card);
			cardsPlayed.push(card);
		} console.log(this.cardsDealt);
	}
}

const marie = new Player ('Marie');
const computer = new Player ('Computer');

//Create Game

//What cards have been played?

//how many cards are left?

//how many points does the player have?

//how many points does the computer have?

//how many rounds have been played?

//how many rounds has the player won?

//how many rounds has the computer won?

//Deal 3 cards from the library to the player

//deal three cards from the library to the computer

//Grab random card from player

//grab random card from computer

//compare cards. Winner has card with higher damage value

// assign point to winning player

// add round played to both players

// add round won to winning player

// stop when there are not enough cards left