console.log('Javascript is linked')


const absoluteLibrary = [{name: "Bulbasaur", damage:60}, 
				{name: "Caterpie", damage:40},
				{name: "Charmander", damage:60},
				{name: "Clefairy", damage:50},
				{name: "Jigglypuff", damage:60},
				{name: "Mankey", damage:30},
				{name: "Meowth", damage:60},
				{name: "Nidoran - female", damage:60},
				{name: "Nidoran - male", damage:50},
				{name: "Oddish", damage:40},
				{name: "Pidgey", damage:50},
				{name: "Pikachu", damage:50},
				{name: "Poliwag", damage:50},
				{name: "Psyduck", damage:60},
				{name: "Rattata", damage:30}, 
				{name: "Squirtle", damage:60}, 
				{name: "Vulpix", damage:50}, 
				{name: "Weedle", damage:40}];

const totalCards = absoluteLibrary.length;

const cardsLeftToPlay = absoluteLibrary;

const allCardsPlayed = [];

let roundsPlayed = 0;


const playerHand = {
	name: 'Fred',//window.prompt('Please enter your name'),
	score: 0,
	currentHand: [1,2,3,4,5],
	cardsPlayed: [],
	roundsWon = 0,
	playCard(cardNumber){
		//console.log(this.currentHand[cardNumber-1]);
		this.cardsPlayed.push(this.currentHand[cardNumber-1]);
		allCardsPlayed.push(this.currentHand[cardNumber-1]);
		this.currentHand.splice(cardNumber-1, 1);
	},
	wonHand(){
		this.score++;
		this.roundsWon++;
	}
}



const computerHand = {
	name: 'Watson',
	score: 0,
	currentHand: [],
	cardsPlayed: [],
	roundsWon = 0,
	playCard(cardNumber){
		//console.log(this.currentHand[cardNumber-1]);
		this.cardsPlayed.push(this.currentHand[cardNumber-1]);
		allCardsPlayed.push(this.currentHand[cardNumber-1]);
		this.currentHand.splice(cardNumber-1, 1);
	},
	wonHand(){
		this.score++;
		this.roundsWon++;
	}
}




//This will be the container for the game once it gets automated
//The game will continue to loop through the steps until the end condition which is when there aren't enough cards left to deal to both players


/*while(cardsLeftToPlay.length > 1){





roundsPlayed++;
}

*/


