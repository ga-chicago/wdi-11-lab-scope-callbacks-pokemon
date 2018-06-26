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
//set the totalCards initial condition as the total cards of the aboslute library
const totalCards = absoluteLibrary.length;

//cardsLeftToPlay intially set to match the absolute library
const cardsLeftToPlay = absoluteLibrary;

//setup the intial array that will hold all the cards that have been played
const allCardsPlayed = [];

//set the intial roundsplayed counter to 0
let roundsPlayed = 0;

//setup the object player hand. this will hold information about the player including: name, score, current hand, cards played and methods to adjust current hand and score
const playerHand = {
	name: 'Fred',//window.prompt('Please enter your name'),
	score: 0,
	currentHand: [],
	cardsPlayed: [],
	roundsWon: 0,
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

//setup the object computer hand. this will hold information about the player including: name, score, current hand, cards played and methods to adjust current hand and score
const computerHand = {
	name: 'Watson',
	score: 0,
	currentHand: [],
	cardsPlayed: [],
	roundsWon: 0,
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

//deals cards to both the player and the computer
const dealCard = (numberOfCards) => {
	if(numberOfCards * 2 > cardsLeftToPlay.length){
		//console.error("There aren't enough cards to deal out");
		return
	}

	for(let i = 0; i < numberOfCards; i++) {
		const firstRandom = randomNumber(cardsLeftToPlay.length);
		playerHand.currentHand.push(cardsLeftToPlay[firstRandom]);
		cardsLeftToPlay.splice(firstRandom, 1);
		const secondRandom = randomNumber(cardsLeftToPlay.length);
		computerHand.currentHand.push(cardsLeftToPlay[secondRandom]);
		cardsLeftToPlay.splice(secondRandom, 1);
	}

}

//generates a random number to use in the dealCard function
const randomNumber = (maxNumber) => {
  return Math.floor(Math.random() * Math.floor(maxNumber));
}

//battle functio to be called each round
const battle = () => {
	//checking to ensure both players have at least 1 card
	if(playerHand.currentHand.length < 1 || computerHand.currentHand.length < 1) {
		//console.log('Not enough cards in hand to battle');
		return
	}
	let userInput;

	//Asking the user to play a card. Prompts the available range
	if(playerHand.currentHand.length === 3){
		userInput = window.prompt(`Which card do you want to play? (between 1 and ${playerHand.currentHand.length})\nOption 1: ${playerHand.currentHand[0].name} with damage of: ${playerHand.currentHand[0].damage}\nOption 2: ${playerHand.currentHand[1].name} with damage of: ${playerHand.currentHand[1].damage}\nOption 3: ${playerHand.currentHand[2].name} with damage of: ${playerHand.currentHand[2].damage}`); 
	} else if(playerHand.currentHand.length === 2){
		userInput = window.prompt(`Which card do you want to play? (between 1 and ${playerHand.currentHand.length})\nOption 1: ${playerHand.currentHand[0].name} with damage of: ${playerHand.currentHand[0].damage}\nOption 2: ${playerHand.currentHand[1].name} with damage of: ${playerHand.currentHand[1].damage}`); 
	} else if(playerHand.currentHand.length === 1){
		userInput = window.prompt(`Which card do you want to play? (between 1 and ${playerHand.currentHand.length})\nOption 1: ${playerHand.currentHand[0].name} with damage of: ${playerHand.currentHand[0].damage}`); 
	}

	//checks that the user input is valid
	while(userInput > playerHand.currentHand.length || userInput < 1){
		userInput = window.prompt(`Error! Please enter a valid number. (between 1 and ${playerHand.currentHand.length})`)
	}
	//use playcard method to move card to "played deck"
	playerHand.playCard(userInput);

	//use random number to play a computer card
	const computerCard = randomNumber(computerHand.currentHand.length);

	//use playcard method to move card to "played deck"
	computerHand.playCard(computerCard+1);

	//making the current player card the last item in the played array
	let currentPlayerCard = playerHand.cardsPlayed[playerHand.cardsPlayed.length-1];

	//making the current computer card the last item in the played array
	let currentComputerCard = computerHand.cardsPlayed[computerHand.cardsPlayed.length-1];

	//compare attack of the last two played card decks
	if(currentPlayerCard.damage > currentComputerCard.damage){
		//log score for Player
		playerHand.wonHand();
		console.log(`%cThe Player Won! Player: ${currentPlayerCard.damage} vs Computer: ${currentComputerCard.damage}.\nCurrent score:\nPlayer: ${playerHand.roundsWon}\nComputer: ${computerHand.roundsWon}`, 'color: green');
		dealCard(1);
		return
	} else if (currentPlayerCard.damage < currentComputerCard.damage) {
		//log score for Computer
		computerHand.wonHand();
		console.log(`%cThe Computer Won! Player: ${currentPlayerCard.damage} vs Computer: ${currentComputerCard.damage}.\nCurrent score:\nPlayer: ${playerHand.roundsWon}\nComputer: ${computerHand.roundsWon}`, 'color: red');
		dealCard(1);
		return
	} else {
		console.log(`Tie! Play another hand for tiebreaker.\nPlayer: ${currentPlayerCard.damage} vs Computer: ${currentComputerCard.damage}.`)
		dealCard(1);
		battle();
	}

}

//intial game start condition. Each player starts with 3 cards
dealCard(3);

//Last Round will be true until there are less than 1 cards left in the deck

let notLastRound = true;
let count = 0; 

//This will be the container for the game once it gets automated
//The game will continue to loop through the steps until the end condition which is when there aren't enough cards left to deal to both players

//game continues playing until notLastRound becomes false
while(notLastRound){
//another break condition that makes sure the while loop doesn't loop more than 15 times
	if(count > 15) {
	break;
	}

	battle();

	if(cardsLeftToPlay < 2 && playerHand.currentHand.length < 1){
		notLastRound = false;
	}	

	roundsPlayed++;
	count++;
}



if (playerHand.roundsWon > computerHand.roundsWon) {
	console.log(`The Player Won, ${playerHand.roundsWon} vs. ${computerHand.roundsWon}`);
} else {
	console.log(`The Computer Won, ${computerHand.roundsWon} vs. ${playerHand.roundsWon}`);
}




