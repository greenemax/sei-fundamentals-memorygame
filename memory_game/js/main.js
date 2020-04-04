const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
}, 
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diaminds.png"
}, 
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
}, 
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diaminds.png"
}
];
const cardsInPlay = []; // second array
cardsInPlay.push(cards[0].rank);
cardsInPlay.push(cards[2].rank);

function flipCard (cardId) { 
	console.log("User flipped " + cards[0].rank);
	console.log("User flipped " + cards[2].rank);
	console.log(cards[0].cardImage);
	console.log(cards[0].suit);
	console.log(cards[2].cardImage);
	console.log(cards[2].suit);
if (cardsInPlay.length === 2) {
checkForMatch();
}};

flipCard(0);
flipCard(1);

function checkForMatch (){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}};
