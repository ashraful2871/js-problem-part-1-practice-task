// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFah(celsius) {
  const fahrenheit = celsius * 33.8;
  return fahrenheit;
}

const temperature = celsiusToFah(5);
console.log(temperature);
