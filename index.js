//! Start by creating the variables for the data recorded
// Temperature data for 30 days
const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
// Conversion functions
function fahrenheitToCelsius(tempF) {
  return (tempF - 32) * 5 / 9;
}

function celsiusToFahrenheit(tempC) {
  return (tempC * 9 / 5) + 32;
}
// Convert all temperatures to Celsius
const day1Celsius = fahrenheitToCelsius(day1TempF);
const day2Celsius = day2TempC;
const day3Celsius = fahrenheitToCelsius(day3TempF);
const day4Celsius = day4TempC;
const day5Celsius = fahrenheitToCelsius(day5TempF);
const day6Celsius = day6TempC;
const day7Celsius = fahrenheitToCelsius(day7TempF);
const day8Celsius = day8TempC;
const day9Celsius = fahrenheitToCelsius(day9TempF);
const day10Celsius = day10TempC;
const day11Celsius = fahrenheitToCelsius(day11TempF);
const day12Celsius = day12TempC;
const day13Celsius = fahrenheitToCelsius(day13TempF);
const day14Celsius = day14TempC;
const day15Celsius = fahrenheitToCelsius(day15TempF);
const day16Celsius = day16TempC;
const day17Celsius = fahrenheitToCelsius(day17TempF);
const day18Celsius = day18TempC;
const day19Celsius = fahrenheitToCelsius(day19TempF);
const day20Celsius = day20TempC;
const day21Celsius = fahrenheitToCelsius(day21TempF);
const day22Celsius = day22TempC;
const day23Celsius = fahrenheitToCelsius(day23TempF);
const day24Celsius = day24TempC;
const day25Celsius = fahrenheitToCelsius(day25TempF);
const day26Celsius = day26TempC;
const day27Celsius = fahrenheitToCelsius(day27TempF);
const day28Celsius = day28TempC;
const day29Celsius = fahrenheitToCelsius(day29TempF);
const day30Celsius = day30TempC;

// Convert all temperatures to Fahrenheit
const day1Fahrenheit = day1TempF;
const day2Fahrenheit = celsiusToFahrenheit(day2TempC);
const day3Fahrenheit = day3TempF;
const day4Fahrenheit = celsiusToFahrenheit(day4TempC);
const day5Fahrenheit = day5TempF;
const day6Fahrenheit = celsiusToFahrenheit(day6TempC);
const day7Fahrenheit = day7TempF;
const day8Fahrenheit = celsiusToFahrenheit(day8TempC);
const day9Fahrenheit = day9TempF;
const day10Fahrenheit = celsiusToFahrenheit(day10TempC);
const day11Fahrenheit = day11TempF;
const day12Fahrenheit = celsiusToFahrenheit(day12TempC);
const day13Fahrenheit = day13TempF;
const day14Fahrenheit = celsiusToFahrenheit(day14TempC);
const day15Fahrenheit = day15TempF;
const day16Fahrenheit = celsiusToFahrenheit(day16TempC);
const day17Fahrenheit = day17TempF;
const day18Fahrenheit = celsiusToFahrenheit(day18TempC);
const day19Fahrenheit = day19TempF;
const day20Fahrenheit = celsiusToFahrenheit(day20TempC);
const day21Fahrenheit = day21TempF;
const day22Fahrenheit = celsiusToFahrenheit(day22TempC);
const day23Fahrenheit = day23TempF;
const day24Fahrenheit = celsiusToFahrenheit(day24TempC);
const day25Fahrenheit = day25TempF;
const day26Fahrenheit = celsiusToFahrenheit(day26TempC);
const day27Fahrenheit = day27TempF;
const day28Fahrenheit = celsiusToFahrenheit(day28TempC);
const day29Fahrenheit = day29TempF;
const day30Fahrenheit = celsiusToFahrenheit(day30TempC);
// Store all Celsius temperatures in an array
const allCelsius = [
  day1Celsius, day2Celsius, day3Celsius, day4Celsius, day5Celsius,
  day6Celsius, day7Celsius, day8Celsius, day9Celsius, day10Celsius,
  day11Celsius, day12Celsius, day13Celsius, day14Celsius, day15Celsius,
  day16Celsius, day17Celsius, day18Celsius, day19Celsius, day20Celsius,
  day21Celsius, day22Celsius, day23Celsius, day24Celsius, day25Celsius,
  day26Celsius, day27Celsius, day28Celsius, day29Celsius, day30Celsius
];

// Store all Fahrenheit temperatures in an array
const allFahrenheit = [
  day1Fahrenheit, day2Fahrenheit, day3Fahrenheit, day4Fahrenheit, day5Fahrenheit,
  day6Fahrenheit, day7Fahrenheit, day8Fahrenheit, day9Fahrenheit, day10Fahrenheit,
  day11Fahrenheit, day12Fahrenheit, day13Fahrenheit, day14Fahrenheit, day15Fahrenheit,
  day16Fahrenheit, day17Fahrenheit, day18Fahrenheit, day19Fahrenheit, day20Fahrenheit,
  day21Fahrenheit, day22Fahrenheit, day23Fahrenheit, day24Fahrenheit, day25Fahrenheit,
  day26Fahrenheit, day27Fahrenheit, day28Fahrenheit, day29Fahrenheit, day30Fahrenheit
];


// Test the conversions with console.log
// Test the conversions
// Display all temperatures in Celsius
console.log("All temperatures in Celsius:");
for (let i = 0; i < allCelsius.length; i++) {
  console.log("Day " + (i + 1) + " = " + allCelsius[i] + " C");
}

// Display all temperatures in Fahrenheit
console.log("\nAll temperatures in Fahrenheit:");
for (let i = 0; i < allFahrenheit.length; i++) {
  console.log("Day " + (i + 1) + " = " + allFahrenheit[i] + " F");
}
//! Start the calculation of the total temperatures
// Sum up all temperatures in Celsius
let tot_temperature_in_celsius = 0;
for (let i = 0; i < allCelsius.length; i++) {
  tot_temperature_in_celsius += allCelsius[i];
}
//* Then apply the conversion to calculate the total in the other unit of measurement
// Sum up all temperatures in Fahrenheit
let tot_temperature_in_fahrenheit = 0;
for (let i = 0; i < allFahrenheit.length; i++) {
  tot_temperature_in_fahrenheit += allFahrenheit[i];
}
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius
// Calculate average temperature in Celsius
const avg_temperature_in_celsius = tot_temperature_in_celsius / allCelsius.length;

// Calculate average temperature in Fahrenheit
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / allFahrenheit.length;


//! Console.log the results for your own inspection if you'd like
// Display the results
console.log("\nTotal temperature in Celsius: " + tot_temperature_in_celsius + " C");
console.log("Total temperature in Fahrenheit: " + tot_temperature_in_fahrenheit + " F");
console.log("\nAverage temperature in Celsius: " + avg_temperature_in_celsius + " C");
console.log("Average temperature in Fahrenheit: " + avg_temperature_in_fahrenheit + " F");


//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
     tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};