function changeBorderColor(){
  error.style.border = "1px solid red";
}

function checkEmail(){
  var emailElement = document.getElementById("email").value;
  var emailReenterElement = document.getElementById("emailReenter").value;
  var emailEquals = emailElement === emailReenterElement;
  var firstName = document.getElementById("firstName").value;
  console.log(emailElement);
  console.log(emailReenterElement);
  console.log(emailEquals);

  if (emailEquals) {
    console.log("Gracias " + firstName + ", la cuenta se ha creado correctamente.");
    createAccountCheck.innerHTML = "Gracias, " + firstName + ", la cuenta se ha creado correctamente";
  } else {
    console.log("No se ha podido crear la cuenta.");
    createAccountCheck.innerHTML = "No se ha podido crear la cuenta.";
    changeBorderColor();
  }
}

function loadDays(){
  var selectElement=document.getElementById("days");
  var min = 1,
      max = 31;

  var optionElement = document.createElement('option');
  optionElement.value = "Day";
  optionElement.innerHTML = "Day";
  selectElement.appendChild(optionElement);

  for (var i = min; i<=max; i++){
      optionElement = document.createElement('option');
      optionElement.value = i;
      optionElement.innerHTML = i;
      selectElement.appendChild(optionElement);
  }
}

function loadMonths(){
  var selectElement=document.getElementById("months");
  var min = 1,
      max = 12;

  var optionElement = document.createElement('option');
  optionElement.value = "Month";
  optionElement.innerHTML = "Month";
  selectElement.appendChild(optionElement);

  for (var i = min; i<=max; i++){
      optionElement = document.createElement('option');
      optionElement.value = i;
      optionElement.innerHTML = i;
      selectElement.appendChild(optionElement);
  }
}

function loadYears(){
  var selectElement=document.getElementById("years");
  var min = 1900,
      max = 2017;

  var optionElement = document.createElement('option');
  optionElement.value = "Year";
  optionElement.innerHTML = "Year";
  selectElement.appendChild(optionElement);

  for (var i = min; i<=max; i++){
      optionElement = document.createElement('option');
      optionElement.value = i;
      optionElement.innerHTML = i;
      selectElement.appendChild(optionElement);
  }
}

function loadDate(){
  loadDays();
  loadMonths();
  loadYears();
}

function createAccount(){
  checkEmail();
}
