const cards = ["queen", "queen", "king", "king"];
let cardOne = cards[0];
const cardsInPlay = [];
cardsInPlay.push('cardOne');
console.log("User flipped queen");
let cardTwo = cards[3];
cardsInPlay.push('cardTwo');
console.log("user flipped king");

if (cardsInPlay.length === 2) {
 if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else if (cardsInPlay[0] !== cardsInPlay[1]) {
	alert("Sorry, try again.");
}
}

