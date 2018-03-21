//const cards = [{name: "Bulbasaur", damage:60}, {name: "Caterpie", damage:40},{name: "Charmander", damage:60},{name: "Clefairy", damage:50},{name: "Jigglypuff", damage:60},{name: "Mankey", damage:30},{name: "Meowth", damage:60},{name: "Nidoran - female", damage:60},{name: "Nidoran - male", damage:50},{name: "Oddish", damage:40},{name: "Pidgey", damage:50},{name: "Pikachu", damage:50},{name: "Poliwag", damage:50},{name: "Psyduck", damage:60},{name: "Rattata", damage:30}, {name: "Squirtle", damage:60}, {name: "Vulpix", damage:50}, {name: "Weedle", damage:40}];
const player = {
	hand: [],
	points: 0,
	rounds: 0,
	viewHand() {
		console.log("Your hand: ");
		console.log("-----------------");
		for (let card of player.hand) {
			console.log(card.name + " " + card.damage);
		}
	},
	getPlayerCard() {
		let input = prompt("What will you play?");
		let playerCard = {};
		let cardName = "";

		if (input === null || input.toUpperCase() === "QUIT") {
			return null
		}

		input = input.toUpperCase();

		for (let i in player.hand) {
			playerCard = player.hand[i];
			cardName = playerCard.name.toUpperCase()
			if (input === cardName) {
				return playerCard;
			}
		}
		
		alert("You don't have that card.");
		player.getPlayerCard();
	},
	viewPastGames() {
		let input = prompt("Enter game number to view");
		console.log(gameFactory.findGame(input));
	}
}

class Game {
	constructor(number) {
		this.number	= number;
		this.cards = [{name: "Bulbasaur", damage:60}, {name: "Caterpie", damage:40},{name: "Charmander", damage:60},{name: "Clefairy", damage:50},{name: "Jigglypuff", damage:60},{name: "Mankey", damage:30},{name: "Meowth", damage:60},{name: "Nidoran - female", damage:60},{name: "Nidoran - male", damage:50},{name: "Oddish", damage:40},{name: "Pidgey", damage:50},{name: "Pikachu", damage:50},{name: "Poliwag", damage:50},{name: "Psyduck", damage:60},{name: "Rattata", damage:30}, {name: "Squirtle", damage:60}, {name: "Vulpix", damage:50}, {name: "Weedle", damage:40}];
		this.playerPoints = 0;
		this.computerPoints = 0;
		this.playerRounds = 0;
		this.computerRounds = 0;
		this.compPlayedCards = [];
		this.playerPlayedCards = [];
		this.hand = [];
	}
	newRound() {
		let cardToDeal = 0;
		let card = [];
		player.hand = [];
		this.playerPoints = 0;
		this.computerPoints = 0;

		this.hand = [];
		if (this.cards.length < 6) {
			this.endGame();
			return
		}
		for(let i = 0; i < 6; i++) {
			cardToDeal = Math.round(Math.random()*(this.cards.length-1));
			card = this.cards.splice(cardToDeal,1)[0];
			if (i%2 === 0) {
				player.hand.push(card);
			}
			else {
				this.hand.push(card);
			}
		}
		
		let that=this;
		setTimeout(that.playCard,5000,that);
	}
	viewHand() {
		console.log("The computer's hand: ");
		console.log("-----------------");
		for (let card of this.hand) {
			console.log(card.name + " " + card.damage);
		}
	}
	playCard(that) {
		if (that.hand.length === 0) {
			that.endRound();
			return
		}

		player.viewHand();
		console.log(" ");
		that.viewHand();

		let cardToPlay = Math.round(Math.random()*(that.hand.length-1))
		let card = that.hand.splice(cardToPlay,1)[0];
		let playerCard = {};
		console.log("The computer plays: ");
		console.log(card);
		that.compPlayedCards.push(card);

		playerCard = player.getPlayerCard();

		if (playerCard === null) {
			that.endGame();
			return
		}

		console.log("You played: ");
		console.log(playerCard);

		player.hand.splice(player.hand.indexOf(playerCard),1);
		that.playerPlayedCards.push(playerCard);

		console.log(" ");
		that.determineWin(playerCard,card);
		console.log(" ");

		
		setTimeout(that.playCard,3000,that);
	}
	determineWin(playerCard,computerCard) {
		if (playerCard.damage > computerCard.damage) {
			console.log("Your card wins.");
			this.playerPoints++;
			console.log("Player: "+this.playerPoints+" Computer: "+this.computerPoints);
		}
		else if (playerCard.damage === computerCard.damage) {
			console.log("Neither card wins.");
			console.log("Player: "+this.playerPoints+" Computer: "+this.computerPoints);
		}
		else {
			console.log("The computer's card wins.");
			this.computerPoints++;
			console.log("Player: "+this.playerPoints+" Computer: "+this.computerPoints);
		}
	}
	endRound() {
		console.log("Round over. You got "+this.playerPoints+" points.");
		console.log("The computer got "+this.computerPoints+" points.");
		if (this.playerPoints > this.computerPoints) {
			console.log("You win this round!");
			this.playerRounds++;
			console.log("Player Rounds: "+this.playerRounds+" Computer Rounds: "+this.computerRounds);
		}
		else if (this.playerPoints === this.computerPoints) {
			console.log("It's a tie!");
			console.log("Player Rounds: "+this.playerRounds+" Computer Rounds: "+this.computerRounds);
		}
		else {
			console.log("The computer wins this round.");
			this.computerRounds++;
			console.log("Player Rounds: "+this.playerRounds+" Computer Rounds: "+this.computerRounds);
		}

		player.points += this.playerPoints;

		console.log(" ");
		this.newRound();
	}
	endGame() {
		
		player.rounds += this.playerRounds;

		console.log("The game is over. You won "+this.playerRounds+" overall.");
		console.log("The computer won "+this.computerRounds+" overall.");
		if (this.playerRounds > this.computerRounds) {
			console.log("You win!");
		}
		else if (this.playerRounds === this.computerRounds) {
			console.log("It's a tie!");
		}
		else {
			console.log("The computer wins.");
		}

		let input = prompt("Start a new game? (Y/N)");
		if (input !== null) {
			input = input.toUpperCase();
		}
		if (input === "Y" || input === "YES") {
			gameFactory.newGame();
		}
		else {
			console.log("Bye! Refresh this page to start another game.");
		}
	}
}

const gameFactory = {
	games: [],
	newGame() {
		this.games.push(new Game(this.games.length));
		this.games[this.games.length-1].newRound();
	},
	findGame(number) {
		return games[number];
	}
}

gameFactory.newGame();
