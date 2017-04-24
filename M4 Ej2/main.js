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
  var hand = [{suit: "p", value: 1},
              {suit: "c", value: 5},
              {suit: "t", value: 8},
              {suit: "d", value: 2}
            ];
  var result = score(hand);
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = result;
  //console.log(result);
}

program();
