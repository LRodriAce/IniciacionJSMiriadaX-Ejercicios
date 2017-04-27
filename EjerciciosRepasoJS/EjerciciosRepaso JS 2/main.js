//Vamos a crear una función JavaScript que toma un parámetro
//que es una cadena (texto). Si la cadena es de longitud impar,
//devuelve el caracter central. Si la longitud de la cadena es
//par, devuelve "Sólo funciono con cadenas de longitud impar".

function caracterCentral(cadena){
  if (cadena.length % 2 === 0) {
    return 'Sólo funciono con cadenas de longitud impar';
  } else {
      var central = (cadena.length / 2) + 0.5;
      return cadena[central - 1];
  }
}

function program(){
  var cadena = "tres";
  var caracter = caracterCentral(cadena);
  console.log(caracter);
}

program();
