//The game object
//keep a library of all the Pokemon cards that can be played
//(see the array in the "The Cards" section)
//create an array
console.log('hello!');

let pokeCards =
[
  {
  name: "Bulbasaur",
  damage:60,
  cardImage: "images/bulbasaur.png"
  },

  {
  name: "Caterpie",
  damage:40,
  cardImage: "images/caterpie.jpg"
  },

  {
  name: "Charmander",
  damage:60,
  cardImage: "images/charmander.jpg"
  },

  {
  name: "Clefairy",
  damage:50,
  cardImage: "images/clefairy.jpg"
  },

  {
  name: "Jigglypuff",
  damage:60,
  cardImage: "images/jigglypuff.jpg"
  },

  {
  name: "Mankey",
  damage:30,
  cardImage: "images/mankey.jpg"
  },

  {
  name: "Meowth",
  damage:60,
  cardImage: "images/meowth.jpg"
  },

  {
  name: "Nidoran - female",
  damage:60,
  cardImage: "images/"
  },

  {
  name: "Nidoran - male",
  damage:50,
  cardImage: "images/"
  },

  {
  name: "Oddish",
  damage:40,
  cardImage: "images/"
  },

  {
  name: "Pidgey",
  damage:50,
  cardImage: "images/"
  },

  {
  name: "Pikachu",
  damage:50,
  cardImage: "images/"
  },

  {
  name: "Poliwag",
  damage:50,
  cardImage: "images/"
  },

  {
  name: "Psyduck",
  damage:60,
  cardImage: "images/"
  },

  {
  name: "Rattata",
  damage:30,
  cardImage: "images/"
  },

  {
  name: "Squirtle",
  damage:60,
  cardImage: "images/"
  },

  {name: "Vulpix",
  damage:50,
  cardImage: "images/"
  },

  {
  name: "Weedle",
  damage:40,
  cardImage: "images/"
  }
]
console.log(pokeCards[5].name);

let cardsPlayed = [];

// The player should be able to:
// see their stats: their points and how many rounds they've won.
// see what cards they have been dealt by the game that round.
// pick a card from the hand that has been dealt to them. Play this card agaist the computer's card. Do this again (3 times total) until the round end.
// recieive new cards given to them by the game each round.
// see the cards that they have played in the past
class Player {
	constructor(name){
		this.name = name;
		this.points = 0;
		this.roundsPlayed = 0;
		this.roundsWon = 0;
		this.cardsDealt = [];
		this.cardsPlayed = [];
	}
	dealCards() {
		//Deal three random pokeCards
		for(let i = 0; i < 3; i++){
			let card = pokeCards[Math.floor(Math.random()*pokeCards.length)];
			//Loop to run the dealt cards against all available cards
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

const player1 = new Player("Zoe");
const player2 = new Player("computer");

player1.dealCards();
//returns an array of three pokeCards
// 0: {name: "Caterpie", damage: 40, cardImage: "images/caterpie.jpg"}
// 1: {name: "Nidoran - female", damage: 60, cardImage: "images/"}
// 2:{name: "Nidoran - male", damage: 50, cardImage: "images/"}

player2.dealCards();
// 0 : {name: "Clefairy", damage: 50, cardImage: "images/clefairy.jpg"}
// 1 : {name: "Charmander", damage: 60, cardImage: "images/charmander.jpg"}
// 2: {name: "Meowth", damage: 60, cardImage: "images/meowth.jpg"}





// const cardsYetToPlay = () => {
//
//   }
//
// const playerPoints = () => {
//
//   }
//
// const computerPoints = () => {
//
//   }
//
// const numOfRounds = () => {
//
//   }
//
// const dealCards = () => {
//   //if no cards left, message null (no cards left!)
//   }
//
// const determineWinner = () => {
//
//   }
// }
//
//
//
//
// var createBoard = function () {
//   for (var i = 0; i  < cards.length; i++) {
//     var cardElement = document.createElement('img');
//     cardElement.setAttribute('src', 'images/pokemon-card.jpg')
//     cardElement.setAttribute('data-id', i);
//     cardElement.addEventListener('click', flipCards)
//     document.getElementById('game-board').appendChild(cardElement);
//   }
// };
//
// createBoard();
