console.log("homework")


const library = [{name: "Bulbasaur", damage:60}, {name: "Caterpie", damage:40},{name: "Charmander", damage:60},
{name: "Clefairy", damage:50},{name: "Jigglypuff", damage:60},{name: "Mankey", damage:30},
{name: "Meowth", damage:60},{name: "Nidoran - female", damage:60},{name: "Nidoran - male", damage:50},
{name: "Oddish", damage:40},{name: "Pidgey", damage:50},{name: "Pikachu", damage:50},{name: "Poliwag", damage:50},
{name: "Psyduck", damage:60},{name: "Rattata", damage:30},
{name: "Squirtle", damage:60}, {name: "Vulpix", damage:50}, {name: "Weedle", damage:40}];
console.log(library)

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
    playingCards.prototype.count = function() {
        return this.cards.length;
    };
    /**
     * shuffle the deck
     *
     * @param int n The number of times to shuffle (defaults to 5)
     */
    playingCards.prototype.shuffle = function(n) {
        if (!n) {
            n = 5;
        }
        var l = this.cards.length,
            r,tmp,i,j;

        for (i = 0; i < n; i++) {
            for (j = 0; j < l; j++) {
                r = Math.floor(Math.random() * l);
                tmp = this.cards[j];
                this.cards[j] = this.cards[r];
                this.cards[r] = tmp;
            }
        }
    };












































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
	







	for (let i = 0; i >= library.length; i++) {
	library[i].name
	}



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



























