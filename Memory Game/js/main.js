console.log("Up and running!");

var cards = ["queen","queen","king","king"];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push('cardOne');

var cardTwo = cards[2];

cardsInPlay.push('cardTwo');

if (cardsInPlay === 0) {
     alert("you found the match!")
}  else {
    alert("Sorry, try again")
};

console.log("User flipped" + cardTwo);