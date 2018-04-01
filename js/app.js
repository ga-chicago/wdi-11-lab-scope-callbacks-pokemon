// IMPORTANT NOTE:







// PLEASE input game.startGame(); in console to begin game sequence.
// if I had it start when index.html loaded, the first prompt would
// prevent the player from opening the javascript console.
// that is, until I program a functioning start button in html

const game = {
	// original object of cards to reference
	cardsLibrary: {cards},
	cardsUsed: [],
	cardsInDeck: {
		// deck starts from source, then depletes every hand
		deck: cards,
		// a number value that tracks the amount of cards left
		currentCardsNumber: cards.length
	},
	playerName: "Eggbert",
	playerCards: {
		cards: []
	},
	playerScore: 0,
	playerCurrentRoundPoints: 0,
	playerRoundsWon: 0,
	computerName: "Master Trainer 2000",
	computerCards: {
		cards: []
	},
	computerScore: 0,
	computerCurrentRoundPoints: 0,
	computerRoundsWon: 0,
	startGame(){
		const startPrompt = prompt("Would you like to shuffle the deck (Yes or No)?");
		startPrompt;
		if (startPrompt === "Yes") {
			return this.shuffleDeck();
		} else if (startPrompt === "No") {
			return this.deal();
		} else {
			// if player responds with anything other than yes or no
			alert ("Please answer 'Yes' or 'No'");
			return this.startGame();
		}
	},
	deal(){
		let deck = this.cardsInDeck.deck;
		let deckNum = this.cardsInDeck.currentCardsNumber;
		if (deckNum < 6) {
			return this.gameOver();
		} else if (deckNum >= 6){
			// give three cards to each player
			// assigning variables to everything to make this easier to understand
			let dealAmount = 3;
			let playerHand = this.playerCards.cards;
			let computerHand = this.computerCards.cards;
			for (i = 0; i < dealAmount; i++){
				// update each cards array
				playerHand.push(deck[i]);
				// update cardsUsed array and deck
				this.cardsUsed.push(deck[i]);
				deck.shift(i);
				deckNum -= 1;
			}
			for (i = 2; i > -1; i--){
				// have to deal to computer in reverse so the last card at index 0 gets distributed properly
				computerHand.push(deck[i]);
				// update cardsUsed array and deck
				this.cardsUsed.push(deck[i]);
				deck.shift(i);
				deckNum -= 1;
			}
			// display cards for each player

			// point to chooseCard method when finished
			return (this.chooseCard());
		}
	},
	chooseCard() {
		// let player choose card
		if (player.displayCurrentHand()) {
			console.log(player.displayCurrentHand());
		}
		if (this.playerCards.cards.length === 0) {
			if (this.cardsInDeck.currentCardsNumber === 0) {
				return this.gameOver();
			} else {
				return this.roundOver();
			}
		};
		let cardChosen = prompt("Which card would you like to play? Card 1, Card 2, or Card 3? Cards displayed in console.");
		// assign answer (which card player wants to use) to a variable
		let card1 = this.playerCards.cards[0];
		let card2 = this.playerCards.cards[1];
		let card3 = this.playerCards.cards[2];
		if (cardChosen === "Card 1") {
			console.log();
			return this.playHand(card1);
		} else if (cardChosen === "Card 2") {
			if (!card2) {
				alert("Player doesn't have a 2nd card in hand.");
				return this.chooseCard();
			} else {
				return this.playHand(card2);
			}
		} else if (cardChosen === "Card 3") {
			if (!card3) {
				alert("Player doesn't have a 3rd card in hand.");
				return this.chooseCard();
			} else {
			return this.playHand(card3);
			}
		} else {
			alert("Please respond Card 1, Card 2, or Card 3.");
			return this.chooseCard();
		}
		
		// let cardChosen = this.playerCards.cards[0]
		// use chosen card as the parameter for the playHand function
		console.log(this.playerCards.cards, this.computerCards.cards);
		return this.playHand(cardChosen);
	},
	playHand (playerCard) {
		// if (this.cardsInDeck.deck.length === 0) {
		// 	return (this.gameOver());
		// }
		// made it random at first to test it out
		// let playerCard = this.playerCards.cards[0];
		let computerCard = this.computerCards.cards[0];
		// console.log(this.cardsInDeck.deck);
		// playHand needs to be called somewhere, as a button maybe?
		// set condition in case there are 0 cards left
		// set conditions for each player to score
		if (playerCard.damage > computerCard.damage){
			this.playerScore += 1;
			this.playerRoundPoints +=1;
			// remove cards from player's hands
			this.playerCards.cards.shift();
			this.computerCards.cards.shift();
			console.log(this.playerName + " has earned 1 point! " + this.playerName + " has a total score of " + this.playerScore);
			if (this.cardsInDeck.currentCardsNumber === 0){
				return this.gameOver();
			} else {
				return this.chooseCard();
			}
		} else if (computerCard.damage > playerCard.damage) {
			this.computerScore += 1;
			this.computerRoundPoints += 1;
			this.playerCards.cards.shift();
			this.computerCards.cards.shift();
			// remove cards from player's hands
			console.log((this.computerName + " has earned 1 point! " + this.computerName + " has a total score of " + this.computerScore));
			return this.chooseCard();
		} else {
			// if neither player scores
			this.playerCards.cards.shift();
			this.computerCards.cards.shift();
			console.log("Tie. No points awarded.");
			return this.chooseCard();
		}
		// if cards in hand are 0, call endRound function?
	},
	gameOver (){
		// if 0 cards left, game over.
			// game over
			// display both player's total points and rounds won
			if (this.playerRoundsWon === this.computerRoundsWon) {
				if (this.playerScore > this.computerScore) {
					return (console.log (this.playerName + " wins with " + this.playerScore + " points and " + this.playerRoundsWon + " rounds won!"));
				} else if (this.computerScore > this.playerScore) {
					return (console.log (this.computerName + " wins with " + this.computerScore + " points and " + this.computerRoundsWon + " rounds won!"));
				} else {
					return (console.log ("Tie game!"));
				}
			} else {
				if (this.playerRoundsWon > this.computerRoundsWon) {
					return (console.log (this.playerName + " wins with " + this.playerScore + " points and " + this.playerRoundsWon + " rounds won!"));
				} else if (this.computerRoundsWon > this.playerRoundsWon) {
					return (console.log (this.computerName + " wins with " + this.computerScore + " points and " + this.computerRoundsWon + " rounds won!"));
				} else {
					return (console.log ("Tie game!"));
				}
			} 
	},
	roundOver(){
		// grab each player's points for the round
		playerPoints = this.playerCurrentRoundPoints;
		computerPoints = this.computerCurrentRoundPoints;
		if (this.cardsInDeck.deck.length === 0) {
			return (this.gameOver());
		} else {
			// add 1 to rounds won if they earned more points that round.
			if (playerPoints > computerPoints) {
				this.playerRoundsWon += 1;
				console.log(this.playerName + " wins the round!");
				playerPoints = 0;
				computerPoints = 0;
				return this.deal();
			} else if (computerPoints > playerPoints) {
				this.computerRoundsWon += 1;
				console.log(this.computerName + " wins the round!");
				playerPoints = 0;
				computerPoints = 0;
				return this.deal();
			} else {
				console.log("Tie round. No points awarded.")
				playerPoints = 0;
				computerPoints = 0;
				return this.deal();
			}
		}
	},
	shuffleDeck(){
		// found a version of this on the internet. it totally works.
			let deck = this.cardsInDeck.deck;
  			let i = 0;
    		let j = 0;
    		let temp = null;

  		for (let i = deck.length - 1; i > 0; i -= 1) {
   			j = Math.floor(Math.random() * (i + 1));
    		temp = deck[i];
    		deck[i] = deck[j];
    		deck[j] = temp;
  		}
  		// after cards are shuffled, cards need to be dealt THEN choose the card
  		return this.deal();
	}
};

const player = {
	playerPoints: game.playerScore,
	playerRoundsWon: game.playerRoundsWon,
	cardsPrevUsed: [],
	displayCurrentHand () {
		let playerHand = game.playerCards.cards;
		// set conditions for amount of cards in player hand
		if (playerHand.length === 3) {
			let card1 = playerHand[0].name;
			let card2 = playerHand[1].name;
			let card3 = playerHand[2].name;
			return ["Card 1: " + card1, "Card 2: " + card2, "Card 3: " + card3];
		} else if (playerHand.length === 2) {
			let card1 = playerHand[0].name;
			let card2 = playerHand[1].name;
			return ["Card 1: " + card1, "Card 2: " + card2];
		} else if (playerHand.length === 1) {
			let card1 = playerHand[0].name;
			return ["Card 1: " + card1];
		} else if (game.cardsInDeck.currentCardsNumber === 0) {
			return game.gameOver();
		}
	},
	shuffleDeck() {
		return game.shuffleDeck();
	}
};
// NEXT TO CODE:
// display a start game button, reset button, points + round scoreboard in html