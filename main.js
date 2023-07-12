let degreeCelsius = document.querySelector("#cel");
let degreeFahrenheit = document.querySelector("#fahren");

let clearAll = document.querySelector("#clear");
let calculate = document.querySelector("#calculate");

let celsius = "";
let fahrenheit = "";

clearAll.addEventListener("click", (e) => {
  if (degreeCelsius.value != "" || degreeFahrenheit.value != "") {
    degreeCelsius.value = "";
    degreeFahrenheit.value = "";
  }
});

calculate.addEventListener("click", (e) => {
  if (degreeCelsius.value != "") {
    function calculateFahrenheit() {
      fahrenheit = degreeCelsius.value * (9 / 5) + 32;
      degreeFahrenheit.value = fahrenheit.toFixed(1);
    }
    calculateFahrenheit();
  } else if (degreeFahrenheit.value != "") {
    function calculateCelsius() {
      celsius = (degreeFahrenheit.value - 32) * (5 / 9);
      degreeCelsius.value = celsius.toFixed(1);
    }
    calculateCelsius();
  }
});
