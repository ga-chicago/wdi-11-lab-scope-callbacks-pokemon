//The game object
//keep a library of all the Pokemon cards that can be played
//(see the array in the "The Cards" section)
//create an array
const cardLibrary =
[
  {
  name: "Bulbasaur",
  damage:60,
  cardImage: "images/bulbasaur.png",
  },

  {
  name: "Caterpie",
  damage:40,
  cardImage: "images/caterpie.jpg",
  },

  {
  name: "Charmander",
  damage:60,
  cardImage: "images/charmander.jpg",
  },

  {
  name: "Clefairy",
  damage:50,
  cardImage: "images/clefairy.jpg",
  },

  {
  name: "Jigglypuff",
  damage:60,
  cardImage: "images/jigglypuff.jpg",
  },

  {
  name: "Mankey",
  damage:30,
  cardImage: "images/mankey.jpg",
  },

  {
  name: "Meowth",
  damage:60,
  cardImage: "images/meowth.jpg",
  },

  {
  name: "Nidoran - female",
  damage:60,
  cardImage: "images/",
  },

  {
  name: "Nidoran - male",
  damage:50,
  cardImage: "images/",
  },

  {
  name: "Oddish",
  damage:40,
  cardImage: "images/",
  },

  {
  name: "Pidgey",
  damage:50,
  cardImage: "images/",
  },

  {
  name: "Pikachu",
  damage:50,
  cardImage: "images/",
  },

  {
  name: "Poliwag",
  damage:50,
  cardImage: "images/",
  },

  {
  name: "Psyduck",
  damage:60,
  cardImage: "images/",
  },

  {
  name: "Rattata",
  damage:30,
  cardImage: "images/",
  },

  {
  name: "Squirtle",
  damage:60,
  cardImage: "images/",
  },

  {name: "Vulpix",
  damage:50,
  cardImage: "images/",
  },

  {
  name: "Weedle",
  damage:40,
  cardImage: "images/",
  }
]

console.log(cardLibrary[5].name);

const cardsPlayed = {
  numberInDeck = 18
  cardsInPlay(pokemonCard) {
    let cardInPlay =
  }
}

const cardsYetToPlay = () => {

  }

const playerPoints = () => {

  }

const computerPoints = () => {

  }

const numOfRounds = () => {

  }

const dealCards = () => {
  //if no cards left, message null (no cards left!)
  }

const determineWinner = () => {

  }
}

var cardsInPlay = [];
var checkForMatch = function () {
if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
};

var flipCards = function () {
var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    checkForMatch ();
  }
};

var createBoard = function () {
  for (var i = 0; i  < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/pokemon-card.jpg')
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCards)
    document.getElementById('game-board').appendChild(cardElement);
  }
};

createBoard();
