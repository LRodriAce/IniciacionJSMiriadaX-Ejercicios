//Desarrolla una función que puntúe una mano de cartas, que
//tenga como parámetro un array de cartas, cada una representada
//por un diccionario con palo y valor. Al puntuar, las cartas
//suman su valor excepto si es un as que suma 20. Prueba a invocarla
//con varias manos de cartas con y sin ases.

function score(hand){
  var total = 0;
  var asValue = 20;
  for (var i = 0; i < hand.length; i++) {
    if (hand[i].value === 1) {
      total = total + asValue;
    } else {
      total = total + hand[i].value;
    }
  }
  return total;
}

function program(){
  var hand = [{suit: "p", value: 11},
              {suit: "c", value: 5},
              {suit: "t", value: 8}
            ];
  var result = score(hand);
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = result;
  //console.log(result);
}

program();
