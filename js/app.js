const theCards = [
	{name: "Bulbasaur", damage:60}, 
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
	{name: "Weedle", damage:40}
]

// each round, the game needs to deal three cards to the computer and three cards to the player
const theGame = {
	library: theCards,
	computerPlayer: {
		computerCardsAvailable: [],
		points: 0,
		roundsWon: 0,
		cardsPlayedPreviously: []
	},
	
	cardsInPlay: [],
	rounds: 0,
	// cardsRemaining: this.theCards.length - this.cardsInPlay.length, // will eventually need to fix this once I figure out how to move them from the cards in play array
	dealCards() {
		if (thePlayer.cardsAvailable.length === 0 && theGame.computerPlayer.computerCardsAvailable.length === 0) {
			theGame.rounds += 1;
			for (let i = 0; i < 3; i++) {
				// select a random card and push it into the player's card array
				let rand1 = Math.floor(Math.random() * theCards.length)

				thePlayer.cardsAvailable.push(theCards[rand1]);
				// also put it in the cards in play array
				this.cardsInPlay.push(theCards[rand1])
				// remove that same card from the cards array because it is no longer available
				this.library.splice(rand1, 1);
			}
			// do the same for the computer
			for (let i = 0; i < 3; i ++) {
				let rand1 = Math.floor(Math.random() * theCards.length)

				this.computerPlayer.computerCardsAvailable.push(theCards[rand1]);

				this.cardsInPlay.push(theCards[rand1])

				this.library.splice(rand1, 1);
			}
		} else {
			console.log("You still have cards available. Please play remaining cards.");
		}

		if (theGame.library.length === 0 && thePlayer.cardsAvailable.length === 0) {
			console.log("No cards remaining.");
			if (theGame.computerPlayer.roundsWon > thePlayer.roundsWon) {
				console.log("The computer player wins the game.");
			} else {
				console.log("You won the game. ");
			}
		}
		
	},
	checkScore () {
		console.log(" Player: " + thePlayer.points + " points. \n ComputerPlayer: " + theGame.computerPlayer.points + " points. \n --------------- \n You've won " + thePlayer.roundsWon + " rounds. \n The computer has won " + theGame.computerPlayer.roundsWon + " rounds. \n --------------- \n There are " + (3-theGame.rounds) + " rounds remaining.");
	}
	
}
	// create a cards remaining array, cards remaining value
	// points for the player and the computer
		// if the player's card beats the computer, the player gets a point
		// if the computer card beats the player card, computer gets a point
	// track rounds
	// track rounds won by player and computer
	// automatically deal three ards to the player and 3 cards to the computer
	// determine the winner of each play
	// stop once there are no cards left or not enough to deal three to each player


const thePlayer = {
	cardsAvailable: [],
	points: 0,
	roundsWon: 0,
	cardsPlayedPreviously: [],
	playCard() {
		if (this.cardsAvailable.length > 0) {
			const userInput = prompt("Pick a number between 1 and " + this.cardsAvailable.length);
			indexNo = userInput - 1;
			let playerDamage = this.cardsAvailable[indexNo].damage;

			// computer also needs to play a card
			let rand2 = Math.floor(Math.random() * theGame.computerPlayer.computerCardsAvailable.length)
			let computerDamage = theGame.computerPlayer.computerCardsAvailable[rand2].damage;

			if (playerDamage > computerDamage) {
				thePlayer.points += 10;
				console.log("Your attack was victorious. You earned 10 points. You now have " + thePlayer.points + " points.")
			} else if (computerDamage > playerDamage) {
				theGame.computerPlayer.points += 10;
				console.log("Your attack was unsuccessful. The computer earned 10 points.");
			} if (playerDamage === computerDamage) {
				console.log("Neither attack was successful. No points awarded.");
			}
		
			//move the played card out of the cards in play array and into the cards played previously array
			this.cardsPlayedPreviously.push(this.cardsAvailable[indexNo])
			this.cardsAvailable.splice(indexNo, 1);

			//then do the same for the computer player
			theGame.computerPlayer.cardsPlayedPreviously.push(theGame.computerPlayer.computerCardsAvailable[rand2]);
			theGame.computerPlayer.computerCardsAvailable.splice(rand2, 1)

			// also remove the cards from the cards in play array
			// THIS DOESN'T WORK BECAUSE THOSE INDEX NUMBERS ARE DIFFERENT. FOR THIS I'D NEED TO LOOP OVER THE ARRAY TO FIND A MATCH AND REMOVE THAT MATCH.
			// theGame.cardsInPlay.splice(indexNo, 1);
			// theGame.cardsInPlay.splice(rand2, 1);
			
			// console.log(theGame.computerPlayer.cardsPlayedPreviously, theGame.computerPlayer.computerCardsAvailable);
		}

		const checkGameOver =  () => {

			if (theGame.rounds === 3) {

				if (thePlayer.roundsWon > theGame.computerPlayer.roundsWon) {
					console.log("You win the game.");
				} else if (theGame.computerPlayer.roundsWon > thePlayer.roundsWon) {
					console.log("The computer player wins the game. You lose.");
				}
			} else if (theGame.rounds < 3) { 
				console.log("Please deal more cards to begin the next round.");
			}
		}
		// if (this.cardsAvailable.length === 0 && (this.points != 0 || theGame.computerPlayer.points != 0)){ 
		// 	// if the player has a higher score, add 1 to the player's round 1 counter
		// } else {
		// 	console.log("Please deal the cards to begin the game.");
		// }
		
		if (theGame.rounds != 0 && thePlayer.cardsAvailable.length === 0) {
			if (thePlayer.points > theGame.computerPlayer.points) {
				thePlayer.roundsWon += 1;
				console.log("You won this round.");
				checkGameOver();
				// thePlayer.points = 0;
				// theGame.computerPlayer.points = 0
			// if the computer has a higher score, add 1 to the computer's round counter
			} else if (theGame.computerPlayer.points > thePlayer.points) {
				theGame.computerPlayer.roundsWon += 1;
				console.log("The computer wins this round.")
				checkGameOver()
			}
		} else if (this.cardsAvailable.length === 0) {
			console.log("Please deal more cards.");
		}

		// if theGame.rounds > 1, check who has a higher score and give them a point for winning the round if there are no more cards in the cards in play array

	},
	checkStats() {
		console.log(" You have " + this.points + " points. \n You've won " + this.roundsWon + " rounds.")
	}
	// see how many points and how many rounds they've won 
	// see what cards they have been dealt by the game that round
	//pick one of the three cards they've been dealt to play against the compter card (need to do three times)
	// receive new cards each round
	// see the cards they have played in the past
}




/// EXTRA CHALLENGE 
const isEnglish = () => {
	tagMap["Language"] = "en";
}

	// const filteredStuff = tagMap.filter(isEnglish)
	// console.log(filteredStuff);

const filteredStuff = []

for (row of tagMap) {
	if (row["Language"] === "en") {
		filteredStuff.push(row)
	}

}
console.log(filteredStuff);

let keys, values;

for (item in filteredStuff) {
	keys = Object.keys(item)
	values = Object.values(item)
	
}

console.log(keys);
console.log(values);