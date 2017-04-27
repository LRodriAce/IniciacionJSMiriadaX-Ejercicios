//Creamos una función que tomará como parámetros un número
//y un array de números. La función va a devolver el número
//de veces que está repetido ese número en el array. Por ejemplo,
//si le pasamos un 1 y [1,3,4,2,1,3,4,5],  la función devolverá
//un 2, porque el número 1 aparace dos veces en el array.

function cuentaNumeros(numero, arrayDeNumeros){
  var numeroRepeticiones = 0;
  for (var i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] === numero) {
      numeroRepeticiones++;
    }
  }
  return numeroRepeticiones;
}

function programa(){
  var numero = 5;
  var arrayDeNumeros = [7,3,5,2,5,3,2,5];
  var repeticiones = cuentaNumeros(numero, arrayDeNumeros);
  if (repeticiones > 0) {
    console.log('El número ' + numero + ' se repite ' + repeticiones +
    ' veces en el array.');
  } else {
    console.log('El número ' + numero + ' no se encuentra en el array.');
  }
}

programa();
