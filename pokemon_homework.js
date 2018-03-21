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
		if (pokeCards.length >= 3){
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
	} else {
		console.log("Sorry Charlie! You're out of cards!");
		}
	}
}

const marie = new Player ('Marie');
const computer = new Player ('Computer');

class Game {
	constructor(player1, player2){
		this.gameRounds = 0;
		this.player1 = player1;
		this.player2 = player2;
		this.cardsPlayed = cardsPlayed;
		this.cardsRemaining = pokeCards;
	}
	gameRound(){
			let player1RPs = 0;

			let player2RPs = 0;

		for(let i = 0; i < 3; i++){
			// grab damage value of player 1's card
			let player1Damage = this.player1.cardsDealt[i].damage;
			//console.log(player1Damage);
			//grab damage value of player 2's card
			let player2Damage = this.player2.cardsDealt[i].damage;
			//console.log(player2Damage);
			//compare and award points accordingly
			
			//compare cards/assign points
			if(player1Damage > player2Damage){
				console.log(this.player1.cardsDealt[i].name + " beats " + this.player2.cardsDealt[i].name + ". " + this.player1.name + " Wins.");
				this.player1.points += 1;
				player1RPs +=1;
			} else if (player2Damage > player1Damage){
				console.log(this.player2.cardsDealt[i].name + " beats " + this.player1.cardsDealt[i].name + ". " + this.player2.name + " Wins.");				
				this.player2.points += 1;
				player2RPs +=1;
			} else {
				console.log("Tie. No points awarded this hand.");
			}
		} 	
			if(player1RPs > player2RPs){
				console.log(this.player1.name +  " wins Round.");
				this.player1.roundsWon +=1;
			} else if (player2RPs > player1RPs){
				console.log(this.player2.name + " wins Round.");
				this.player2.roundsWon +=1;
			} else {
				console.log("Tie. No points awarded this round.")
			}
			//clear player1 hand
			this.player1.cardsDealt = [];
			//clear player 2 hand
			this.player2.cardsDealt = [];
			//add to the rounds
			this.gameRounds += 1;
	}	

}

const game1 = new Game(marie, computer);

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