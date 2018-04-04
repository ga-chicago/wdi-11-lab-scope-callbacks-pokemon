console.log("homework")



// class Cardsinplay {
// 	constructor(name, damage)
// 	}
// 	cardCount(){

// 	}
// }

const library = [{name: "Bulbasaur", damage:60}, 
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
// console.log(library)
// for(rows of library) {
// 	// console.log(row)
// 	for (elements of rows) {
// 		console.log(elements)
// 	}
// }

const game = {
	cards: [{name: "Bulbasaur", damage:60}, {name: "Caterpie", damage:40},{name: "Charmander", damage:60},{name: "Clefairy", damage:50},{name: "Jigglypuff", damage:60},{name: "Mankey", damage:30},{name: "Meowth", damage:60},{name: "Nidoran - female", damage:60},{name: "Nidoran - male", damage:50},{name: "Oddish", damage:40},{name: "Pidgey", damage:50},{name: "Pikachu", damage:50},{name: "Poliwag", damage:50},{name: "Psyduck", damage:60},{name: "Rattata", damage:30}, {name: "Squirtle", damage:60}, {name: "Vulpix", damage:50}, {name: "Weedle", damage:40}],
	playedCards: [],
	compPoints: 0,
	currentRound: 0,
	compRoundsWon: 0,
	compHand: [],
	compScore: 0,
	getRandomCard(cardArr){
		const rand = Math.floor((cardArr.length - 1) * Math.random())
		const card = cardArr.splice(rand, 1)

		return card[0];
	},
	comPickCard(){
		return this.getRandomCard(this.compHand)
		
	},
	cardsLeft(){
		return this.cards.length;
	},
	deal(){
		// give 3 cards to player and 3 cards to computer
		// this.cards[]

		// get 1 card

		
		//for 3
		for(i =0; i < 3; i++){
			// 1 card for player
			
			player.hand.push(this.getRandomCard(this.cards))

			//1 card for computer
			
			this.compHand.push(this.getRandomCard(this.cards))
			
		}
			


		//push
	}


}

const player = {
	points: 0,
	roundsWon: 0,
	hand: [],
	score: 0,
	pickCard(){
		//create a string of the player cards

		//show them their cards
		console.log(player.hand)
		//prompt for a card
		const pickName = prompt("Which card would you like to use?");
		for(let i = 0; i < player.hand.length; i++){
			let card = player.hand[i]
			if(pickName === card.name){
				return card;
			}

		//figure out which card they picked
		
		//return the card
		}
	}

}

function startGame (){
	const startPro = prompt("Would you like to play (yes or no)?")
		startPro;
		if (startPro === "yes") {
			newRound();
		}
}

function newRound (){


	game.deal();
			
			
	for(let i =0; i < 3; i++){
		let cpu = game.comPickCard(); 

		let mvp = player.pickCard();
		if(cpu.damage > mvp.damage){
			game.compPoints++;
		}
		else if(mvp.damage > cpu.damage) {
			player.points++;
		}

	}
			//
	game.currentRound++;
	if(player.points > game.compPoints){
		player.roundsWon++
	}
	else if(player.points < game.compPoints){
		game.compRoundsWon++
	}

	if (game.cardsLeft() >= 6) {
		newRound();
	}
	else{
		alert("Game Over");
	}
}
		













































// if (Array.indexOf === undefined) {
//     // doens't exist in oldIE
//     /* Finds the index of the first occurence of item in the array, or -1 if not found */
//     Array.prototype.indexOf = function(v) {
//         for (let i = 0; i < this.length; ++i) {
//             if (this[i] === v) {
//                 return i;
//             }
//         }

// playingCards.prototype.draw = function() {
//         return this.cards.length > 0 ? this.cards.pop() : null;
//     };
//     *
//      * add a card to the top of the deck
     
//     playingCards.prototype.addCard = function(card) {
//         this.cards.push(card);
//     };
    /**
     * get the number of cards remaining in the deck
     * (easy enough just to call cardObject.cards.length but hey)
     */
    // playingCards.prototype.count = function() {
    //     return this.cards.length;
    // };
    // /**
    //  * shuffle the deck
    //  *
    //  * @param int n The number of times to shuffle (defaults to 5)
    //  */
    // playingCards.prototype.shuffle = function(n) {
    //     if (!n) {
    //         n = 5;
    //     }
    //     var l = this.cards.length,
    //         r,tmp,i,j;

    //     for (i = 0; i < n; i++) {
    //         for (j = 0; j < l; j++) {
    //             r = Math.floor(Math.random() * l);
    //             tmp = this.cards[j];
    //             this.cards[j] = this.cards[r];
    //             this.cards[r] = tmp;
    //         }
    //     }
    // };

 // for(row of name) {
 // 	 console.log(row)
 // for (element of row) {
 // 	console.log(element)
	//}
// const arrayCount = () =>{
// 	console.log("yess")
// }
// const arrOfCards = library.name;
// console.log(arrOfCards)
// // }
// const foo77 = [
// 	["0, 0", "0, 1", "0, 2"],
// 	["1, 0", "1, 1", "1, 2"], 
// 	["2, 0", "2, 1", "2, 2"]
// ];
// for(row of foo77) {
// 	// console.log(row)
// 	for (element of row) {
// 		console.log(element)
// 	}
// }



























