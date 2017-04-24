var idate =2017;
var fdate = 2050;
for (var i = idate; i < fdate; i++) {
  if (i % 4 == 0) {
    console.log("el año " + i + " es bisiesto");
  }
}

//sustituir el 4 por variable leapYearFactor
//En la condición, hay que poner ===
