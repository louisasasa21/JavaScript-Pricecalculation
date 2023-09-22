function toCelsius() 
{
    let fahrenheit = prompt("Fahrenheit:")
    let value = (fahrenheit - 32) * 5 / 9
    document.getElementById("answer_section").innerHTML = value.toFixed(2) + " °C";
}
toCelsius()

function toFahrenheit()
{
    let celsius = prompt("Celsius:")
    let value = (celsius * 9/5) + 32
    document.getElementById("answer_sectionCel").innerHTML = value.toFixed(2) + " °F";
}
toFahrenheit()