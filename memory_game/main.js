let cards = [
    {   rank: "Queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {   rank: "Queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {   rank: "King",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {   rank: "King",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

let cardsInPlay = [];
function checkForMatch() {

    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }

}
function flipCard() {
    let cardId = this.getAttribute('data-id');
    this.setAttribute('src', cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    checkForMatch()
};


function createBoard(){
    for (let i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
}

createBoard();




