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

function flipCard () { 
	let cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[0].rank);
	console.log("User flipped " + cards[2].rank);
	console.log(cards[0].cardImage);
	console.log(cards[0].suit);
	console.log(cards[2].cardImage);
	console.log(cards[2].suit);
	this.getAttribute('cards').setAttribute('src', 'cards[cardId].cardImage');
if (cardsInPlay.length === 2) {
checkForMatch();
}};

function checkForMatch (){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}};

function createBoard (){
for (let i = 0; i < cards.length; i++) {
   let cardElement = document.createElement('img');
   cardElement.setAttribute('src', "images/back.png");
   cardElement.setAttribute('data-id', i);
   cardElement.addEventListener('click', flipCard);
   document.getElementById('game-board').appendChild(cardElement);
}
};
createBoard(0, 2);
