//3. Desarrolla una librería Calculadora que calcula las longitudes de varias figuras
//geométricas como cuadrados, rectángulos y círculos.

function circulos(radio){
  var longitudCirculo = 2 * Math.PI * radio;
  return longitudCirculo;
}

function cuadrados(lado){
  var longitudCuadrado = lado * 4;
  return longitudCuadrado;
}

function rectangulos(lado1, lado2){
  var longitudRectangulo = (2 * lado1) + (2 * lado2);
  return longitudRectangulo;
}

var Calculdora = {
  calculaCuadrados: cuadrados,
  calculaRectangulos: rectangulos,
  calculaCirculos: circulos
};

function program() {
  var lado = 2;
  var longitudCuadrado = cuadrados(lado);
  var lado1 = 4, lado2 = 2;
  var longitudRectangulo = rectangulos(lado1, lado2);
  var radio = 5;
  var longitudCirculo = circulos(radio);
  console.log('La longitud del cuadrado con lado ' + lado + ' es: ' + longitudCuadrado);
  console.log('La longitud del rectángulo con lados ' + lado1 +
    ' y ' + lado2 + ' es: ' + longitudRectangulo);
  console.log('La longitud de la circunferencia con radio ' + radio + ' es: ' + longitudCirculo);
}

program();
