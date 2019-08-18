let cards = ['Queen', 'Queen', 'King', 'King'];

let cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("user flipped queen!");
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("user flipped king!");


if (cardsInPlay[0] === cardsInPlay[2]){
    alert("You found a match!");
}
else {
    alert("Sorry, try again.");
}