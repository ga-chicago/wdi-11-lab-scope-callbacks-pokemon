// 1. keep a library of all the Pokemon cards that can be played (see the array in the "The Cards" section)

let cardsLibrary = [{
	name: "Bulbasaur", 
	damage:60
}, 
{
	name: "Caterpie", 
	damage:40
},
{
	name: "Charmander", 
	damage:60
},
{
	name: "Clefairy", 
	damage:50
},
{
	name: "Jigglypuff", 
	damage:60
},
{
	name: "Mankey", 
	damage:30
},
{
	name: "Meowth", 
	damage:60
},
{
	name: "Nidoran - female", 
	damage:60
},
{
	name: "Nidoran - male", 
	damage:50
},
{
	name: "Oddish", 
	damage:40
},
{
	name: "Pidgey", 
	damage:50
},
{
	name: "Pikachu", 
	damage:50
},
{
	name: "Poliwag", 
	damage:50
},
{
	name: "Psyduck", 
	damage:60
},
{
	name: "Rattata", 
	damage:30
},
{
	name: "Squirtle", 
	damage:60
},
{
	name: "Vulpix", 
	damage:50
},
{
	name: "Weedle", 
	damage:40
}]



//GAME OBJECT


// class Game = {
// 	// 3. know how many cards are left to be played overall
// 	availableCardsRemaining () {
// 		for(element of this.availableCards) {
// 			console.log(availableCards.length)
// 		}
// 	}
// 	points() {

// 	}
// 	cardstoPlay () {

// 	}
// 	roundsWon () {

// 	}
// }





// 2. know what cards have been played

// 4. track points for both the player and the computer Note: Points are determine by the following: If the player's card beats the computer's card, the player gets one point (and vice versa). If there is a tie, no one gets a point.
		//earn one point if player damage > then computer card
		// if player damage === computer damage no points
		//if / else statement

// let cardsInPlay = [];
// let checkForMatch = function () {
// if (cardsInPlay[0] === cardsInPlay[1]) {
//     alert("You found a match!");
//   } else {
//     alert("Sorry, try again.");
//   }
// };

// 5. track rounds

// 6. track number of rounds won for both player and computer

// 7. automatically deal 3 cards from the library to the player and 3 cards to the computer each round
			//each class should receive cards from array into their cards function
class Player{
	constructor() {
		cardsDealt: [];
	}
}

class Computer {
	constructor () {
		cardsDealt: [];
	}
	dealCards () {
		for(let i = 0; i < 3; i++){
			let cards = cardsLibrary[Math.floor(Math.random()*cardsLibrary.length)];
		}
		console.log(this.cardsDealt.push(cards));	
	}
}


// 8. determine the winner of each play

// 9. stop once there are no cards left or not enough to deal 3 to each the player and computer


//PLAYER OBJECT
// The player should be able to:
//1. see their stats: their points and how many rounds they've won.
//2. see what cards they have been dealt by the game that round.
//3. pick a card from the hand that has been dealt to them. Play this card 
// 	 agaist the computer's card. Do this again (3 times total) until the round end.
//4. recieive new cards given to them by the game each round.
//5. see the cards that they have played in the past.

class Player = {
	constructor() {
		this.name = 'Eggbert';
		this.points = 0;
		this.roundsPlayed = 0;
		this.roundsWon = 0;
		this.cardsPlayed = [];
	}
	points() {

	}
	cardsDealt () {

	}
	roundsWon () {

	}
}

