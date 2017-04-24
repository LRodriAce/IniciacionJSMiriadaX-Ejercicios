//2. Partiendo de la función anterior, modíficala para que además
//las cartas rojas sumen el doble. Prueba a invocarla con varias
//manos de cartas.

function score(hand){
  var total = 0;
  var asValue = 20;
  for (var i = 0; i < hand.length; i++) {
    if (hand[i].value === 1) {
      total = total + asValue;
    } else if (hand[i].suit === "c" || hand[i].suit === "d") {
        total = total + (hand[i].value * 2);
    } else {
        total = total + hand[i].value;
    }
  }
  return total;
}

function program(){
  var hand1 = [{suit: "p", value: 1},
              {suit: "c", value: 5},
              {suit: "t", value: 8},
              {suit: "d", value: 2}
            ];
  var hand2 = [{suit: "p", value: 2},
              {suit: "c", value: 1},
              {suit: "t", value: 8},
              {suit: "d", value: 1}
            ];
  var result1 = score(hand1);
  var result2 = score(hand2);
  if (result1 > result2) {
    console.log("Gana el jugador 1 con los puntos: " + result1);
  } else if (result1< result2) {
    console.log("Gana el jugador 2 con los puntos: " + result2);
  } else {
    console.log("Empatan los dos jugadores con los puntos: " + result1);
  }
}

program();
