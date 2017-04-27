//Vamos a crear una función que toma un parámetro que es un
//array de números. La función va a devolver un array que
//contiene sólo los números pares del array original.

function encuentraPares(numeros){
  var pares =[];
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares[pares.length] = numeros[i];
    }
  }
  return pares;
}

function program(){
  var numeros = [1, 5, 8, 9, 10];
  var pares = encuentraPares(numeros);
  console.log(pares);
}

program();
