const cards = ["queen", "queen", "king", "king"]; // first array
const cardsInPlay = []; // second array
cardsInPlay.push(cards[0]);
cardsInPlay.push(cards[2]);

function flipCard (cardId) { 
	console.log("User flipped " + cards[0]);
	console.log("User flipped " + cards[2]);
if (cardsInPlay.length === 2) {
checkForMatch();
}};

flipCard(0);
flipCard(1);

function checkForMatch (){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}};