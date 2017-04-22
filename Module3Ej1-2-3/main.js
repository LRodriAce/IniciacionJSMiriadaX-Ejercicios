//crear un array para guardar todas las cartas de una baraja
//y que las cartas sean un diccionario con su palo y su valor
var deck = [];
var suits = ["c", "t", "p", "d"];
var cardMaxValue = 13;
var currentCardIndex = 0;
var currentCard = {};

for (var suitsCounter = 0; suitsCounter < suits.length; suitsCounter++){
  for (var cardValue = 1; cardValue <= cardMaxValue; cardValue++) {
    currentCard = {suit: suits[suitsCounter], value: cardValue};
    deck[currentCardIndex] = currentCard;
    //console.log(deck[currentCardIndex]);
    currentCardIndex++;
  }
}
//Construir un algoritmo que filtre en un nuevo array solo las cartas rojas
//y en otro array las cartas negras
var redCards = [];
var blackCards = [];
for (var deckCounter = 0; deckCounter < deck.length; deckCounter++) {
  if (deck[deckCounter].suit === "c" || deck[deckCounter].suit === "d") {
    redCards[redCards.length] = deck[deckCounter];
  } else {
    blackCards[blackCards.length] = deck[deckCounter];
  }
}
//Construye un algoritmo que filtre en un nuevo array las cartas rojas y pares.
//Luego imprime en la consola la última carta de ese nuevo array.

var pairRedCards = [];
var pair = 2;
for (var redCardsCounter = 0; redCardsCounter < redCards.length; redCardsCounter++) {
  if (redCards[redCardsCounter].value % pair === 0) {
    pairRedCards[pairRedCards.length] = redCards[redCardsCounter];
  }
}
console.log(pairRedCards[pairRedCards.length -1]);
