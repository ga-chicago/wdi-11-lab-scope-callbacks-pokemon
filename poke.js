console.log("HI")




const game = {
    library:[
    {
        name: "Bulbasaur",
        damage:60
    }, {
        name: "Caterpie",
        damage:40
    },{
        name: "Charmander",
        damage:60
    },{
        name: "Clefairy",
        damage:50
    },{
        name: "Jigglypuff",
        damage:60
    },{
        name: "Mankey", 
        damage:30
    },{
        name: "Meowth", 
        damage:60
    },{
        name: "Nidoran - female", 
        damage:60
    },{
        name: "Nidoran - male", 
        damage:50
    },{
        name: "Oddish",
        damage:40
    },{
        name: "Pidgey", 
        damage:50
    },{
        name: "Pikachu", 
        damage:50
    },{
        name: "Poliwag", 
        damage:50
    },{
        name: "Psyduck", 
        damage:60
    },{
        name: "Rattata", 
        damage:30
    }, {
        name: "Squirtle", 
        damage:60
    }, {
        name: "Vulpix", 
        damage:50
    }, {
        name: "Weedle", 
        damage:40
    }],
    cardsPlayed: [],
    playerPoints: 0,
    computerPoints: 0,
    currentRound: 0,
    playerRoundsWon: 0,
    computerRoundsWon: 0,
    randomArr: [],
    computerHand: [],


    randomNum(){
        return Math.floor((Math.random() * this.library.length))
    },
    
    deal(card){
        // call randomNum 3 times
       
        for(let i = 0; i < card; i++) {

        		player.hand.push(this.library.splice(this.randomNum(),1))
        		// console.log(what ever you are changing )
        		//pushing the dealt cards into the players hand
            	console.log(player.hand);

            	
        		this.computerHand.push(this.library.splice(this.randomNum(),1))
        		// pushing the dealt cards into the computerhand
            	console.log(this.computerhand);
           
        }

       
   	},
   	playCard1(){
   		

   		this.cardsPlayed.push(player.hand.pop());
   		// this is moving the cards that were played from playCard1 into the cardsPlayed array
   		// this is coming from the players hand
   		console.log(this.cardsPlayed)

   		

		this.cardsPlayed.push(this.computerHand.pop());

   		console.log(this.cardsPlayed)


   		if(this.cardsPlayed[0][0].damage > this.cardsPlayed[1][0].damage){
   			console.log("Player Win")
   		} else if(this.cardsPlayed[0][0].damage < this.cardsPlayed[1][0].damage){
   			console.log("Computer Win")
   		} else {
   			console.log("Its a Tie")
   		}	
   	
},

	playCard2(){

   		this.cardsPlayed.push(player.hand.pop());

   		console.log(this.cardsPlayed)

		this.cardsPlayed.push(this.computerHand.pop());

   		console.log(this.cardsPlayed)

   		
   		if(this.cardsPlayed[2][0].damage > this.cardsPlayed[3][0].damage){
   			console.log("Player Win")
   		} else if(this.cardsPlayed[2][0].damage < this.cardsPlayed[3][0].damage){
   			console.log("Computer Win")
   		} else {
   			console.log("Its a Tie")
   		}	
   	},

   	playCard3(){
   		
   		this.cardsPlayed.push(player.hand.pop());

   		console.log(this.cardsPlayed)

	this.cardsPlayed.push(this.computerHand.pop());

   		console.log(this.cardsPlayed)
   		
   		if(this.cardsPlayed[4][0].damage > this.cardsPlayed[5][0].damage){
   			console.log("Player Win")
   		} else if(this.cardsPlayed[4][0].damage < this.cardsPlayed[5][0].damage){
   			console.log("Computer Win")
   		} else {
   			console.log("Its a Tie")
   		}	
   	},

   	roundWin() {

   		
   	}
   	// dont know if I need a method but every time a winner is decided
   	// log it in the computer or player points
   	// need to get "win" working first though 



    
}

const player = {
	hand: [], // the players hand once the cards are dealt 
	// receive (card) {
	// 	this.hand.push(card) // Not sure I need this here // What is it doing 
	// }
}







//





// Extra Challenge:
// Instructions
// Your job is to write a program that loops over an array of objects. Using the example array below, do the following:

// Iterate over each item in the array
// Filter out all objects where the Language property does not equal to en (stands for English)
// Loop over the filtered array and...
// Output each array item's key and value



// make a function 

// const funct = (element) => {
// 	if(element.Language === "en") {
// 		return true;
// } 	else {
// 		return false;

// 	}
// }

// let englishMap = [];
// for (let object of tagMap) { // using a FOR OF Loop. 
// 	englishMap = tagMap.filter(funct) // // filter needs a callback // // funct is the callback from the function we made earlier where we used element as parameter
// 	// new array with elements that pass the test. the test was earlier when we did the if statement 

// }

// for (let i in englishMap) {
// 	console.log(i, englishMap[i])  // loging every item that has 'language as en '
// }




