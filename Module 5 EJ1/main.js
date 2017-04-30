//Desarrolla una librería Croupier que tenga una función para barajar
//cartas. Para barajar, intercambiamos una carta aleatoria dentro de
//nuestra baraja por otra. Y esto lo hacemos 100 veces. Se recomienda
//usar la librería Math.random. Por ejemplo, intercambiar la carta en
//la posición 7 por la carta en la posición 24.

var cartas = [{palo: 'c', valor: 1},
              {palo: 'd', valor: 1},
              {palo: 't', valor: 1},
              {palo: 'p', valor: 1},
              {palo: 'c', valor: 2},
              {palo: 'd', valor: 2},
              {palo: 't', valor: 2},
              {palo: 'p', valor: 2}
            ];

function barajar (cartas){
  var nVeces = 100;
  var nCartas = cartas.length;
  var posicionInicial;
  var cartaTemporal;
  for (var i = 1; i <= nVeces; i++) {
    for (var j = 0; j < nCartas; j++) {
      posicionInicial = parseInt(Math.random()*nCartas);
    	cartaTemporal = cartas[j];
    	cartas[j] = cartas[posicionInicial];
    	cartas[posicionInicial] = cartaTemporal;
    }
  }
}

var Croupier = {baraja: barajar};

Croupier.baraja(cartas);
console.log(cartas);
