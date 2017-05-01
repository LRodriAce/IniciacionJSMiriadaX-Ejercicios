//Desarrolla una librería Croupier que tenga una función para barajar
//cartas. Para barajar, intercambiamos una carta aleatoria dentro de
//nuestra baraja por otra. Y esto lo hacemos 100 veces. Se recomienda
//usar la librería Math.random. Por ejemplo, intercambiar la carta en
//la posición 7 por la carta en la posición 24.

//Desarrolla nuevas funciones de la librería Croupier:
//- Repartir, que toma la carta en primera posición de la baraja y la elimina
//del array.
//- Puntuar que, dada una mano de 4 cartas sume su valor. Pero si todas las
//cartas son iguales, multiplica el valor por 10.


var cartas = [{palo: 'c', valor: 1},
              {palo: 'd', valor: 1},
              {palo: 't', valor: 1},
              {palo: 'p', valor: 1},
              {palo: 'c', valor: 2},
              {palo: 'd', valor: 2},
              {palo: 't', valor: 2},
              {palo: 'p', valor: 3},
              {palo: 'c', valor: 3},
              {palo: 'd', valor: 3},
              {palo: 't', valor: 3}
            ];

var mano = [];
var totalMano = 0;
var cartasMano = 4;

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

function repartirUna (cartas){
  var carta = cartas.shift();
  return carta;
}

function iguales(elemento, indice, array){
  if (indice === array.length -1) {
    return elemento === array[0];
  } else {
    return elemento === array[indice + 1];
  }
}

function puntuar(mano) {
  var igual = 10;
  var resultado = 0;

  for (var i = 0; i < mano.length; i++) {
    resultado = resultado + mano[i];
  }

  if (mano.every(iguales)) {
     return resultado * igual;
  } else {
     return resultado;
  }
}

var Croupier = {
  baraja: barajar,
  reparte: repartirUna,
  puntua: puntuar};

Croupier.baraja(cartas);

for (var i = 1; i <= cartasMano; i++) {
  var carta = Croupier.reparte(cartas);
  console.log('Número de carta: ' + i + ' Valor: ' + carta.valor);
  mano[mano.length]= carta.valor;
}

totalMano = Croupier.puntua(mano);
console.log('Total mano: ' + totalMano);
