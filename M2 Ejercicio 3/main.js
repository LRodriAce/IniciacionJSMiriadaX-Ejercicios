var palo;
for (var i= 1; i <= 4; i= i + 1){
  if (i === 1) {
    palo = "c";
    var j= 1;
    do {
      if (j % 3 === 0) {
        console.log("El " + j + " de " + palo + " es carta roja múltiplo de 3");
      }
      j= j + 1;
    } while (j <= 12);
  } else{
  if (i === 3) {
    palo = "r";
    var j= 1;
    do {
      if (j % 3 === 0) {
        console.log("El " + j + " de " + palo + " es carta roja múltiplo de 3");
      }
      j= j + 1;
    } while (j <= 12);
  }
  }
}
