const game = {
	// original object of cards to reference
	cardsLibrary: {cards},
	cardsUsed: {
	// use this array to track all the cards that have been used
		cards: []
	},
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
	cardsPlayed(playerCard, computerCard){
		// create array to store cards chosen to be played
		// push cards chosen to array
		this.cardsUsed.push(playerCard);
		this.cardsUsed.push(computerCard);
		// subtract cards played from cards remaining value, which starts at total card amount
		this.currentCardsNumber -= 2;
		return(playHand(playerCard, computerCard));
	},
	playHand (playerCard){
		if (this.cardsInDeck.deck.length === 0) {
			return (this.gameOver());
		}
		// made it random at first to test it out
		// let playerCard = this.playerCards.cards[0];
		let computerCard = this.computerCards.cards[0];
		console.log(this.playerCards);
		console.log(this.computerCards);
		console.log(this.cardsInDeck.deck);
		// playHand needs to be called somewhere, as a button maybe?
		// set condition in case there are 0 cards left
		if (this.playerCards.cards.length === 0 || this.computerCards.cards.length === 0) {
			return(this.roundOver());
		}
		// set conditions for each player to score
		if (playerCard.damage > computerCard.damage){
			this.playerScore += 1;
			this.playerRoundPoints +=1;
			// remove cards from player's hands
			this.playerCards.cards.shift();
			this.computerCards.cards.shift();
			return (this.playerName + " has earned 1 point! " + this.playerName + " has a total score of " + this.playerScore);
		} else if (computerCard.damage > playerCard.damage) {
			this.computerScore += 1;
			this.computerRoundPoints += 1;
			this.playerCards.cards.shift();
			this.computerCards.cards.shift();
			// remove cards from player's hands
			return (this.computerName + " has earned 1 point! " + this.computerName + " has a total score of " + this.computerScore);
		} else {
			// if neither player scores
			this.playerCards.cards.shift();
			this.computerCards.cards.shift();
			return ("Tie. No points awarded.");
		}
		// if cards in hand are 0, call endRound function?
	},
	gameOver (){
		// if 0 cards left, game over.
		if (this.cardsInDeck.currentCardsNumber === 0) {
			// game over
			// display both player's total points and rounds won
			if (this.playerScore > this.computerScore) {
				return (this.playerName + " wins with " + this.playerScore + " points and " + this.playerRoundsWon + " rounds won!");
			} else if (this.computerScore > this.playerScore) {
				return (this.computerName + " wins with " + this.computerScore + " points and " + this.computerRoundsWon + " rounds won!");
			} else {
				return ("Tie game!")
			} 
		}
	},
	deal(){
		let deck = this.cardsInDeck.deck;
		if (this.cardsInDeck.currentCardsNumber >= 6){
			// give three cards to each player
			// assigning variables to everything to make this easier to understand
			let dealAmount = 3;
			let playerHand = this.playerCards.cards;
			let computerHand = this.computerCards.cards;
			for (i = 0; i < dealAmount; i++){
				// update each cards array
				playerHand.push(deck[i]);
				// update cardsInDeck
				deck.shift(i);
				this.cardsInDeck.currentCardsNumber -= 1;
			}
			for (i = 0; i < dealAmount; i++){
				computerHand.push(deck[i]);
				deck.shift(i);
				this.cardsInDeck.currentCardsNumber -= 1;
			}
			// display cards for each player

			// point to playHand method when finished
			return (this.playHand());
		} else {
			// this should happen automatically if 0 cards are left
			return this.gameOver();
		}
	},
	roundOver(){
		// grab each player's points for the round
		if (this.cardsInDeck.deck.length === 0) {
			return (this.gameOver());
		}
		playerPoints = this.playerCurrentRoundPoints;
		computerPoints = this.computerCurrentRoundPoints;
		// add 1 to rounds won if they earned more points that round.
		if (playerPoints > computerPoints) {
			this.playerRoundsWon += 1;
		} else if (computerPoints > playerPoints) {
			this.computerRoundsWon += 1;
		} else {
			console.log("Tie round. No points awarded.")
		}
		// reset each player's points for the round
		playerPoints = 0;
		computerPoints = 0;
		// maybe calling deal() will eventually be a button?
		return this.deal();
	},
	shuffleCards(){
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
	}
};
console.log(game.cardsInDeck.deck);

const player = {
	playerPoints: game.playerScore,
	playerRoundsWon: game.playerRoundsWon,
	cardsPrevUsed: [],
	displayCurrentHand () {
		return game.PlayerCards.cards
	},
	playCard(playerCard) {
		cardsPrevUsed.push(playerCard);
		// to play a card, put it in the game method playHand
		return (game.playHand(playerCard));
	},
	shuffleDeck() {
		return game.shuffleCards();
	}
};