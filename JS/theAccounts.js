/*var fuelEconomy = parseFloat(document.getElementById('fuelEconomy'));
var distanceTraveld = parseFloat(document.getElementById('distanceTraveld').value);
var carFuel = parseFloat(document.getElementById('carFuel').value);
var priceOfGasoline = parseFloat(document.getElementById('priceOfGasoline').value);*/

//console.log(priceOfGasoline);

function calculateFuelConsumption() {
    // Get input values
    var distanceTraveled = parseFloat(document.getElementById("distanceTraveled").value);
    var carFuel = parseFloat(document.getElementById("carFuel").value);
    var priceOfGasoline = parseFloat(document.getElementById("priceOfGasoline").value);

    // Check if inputs are valid numbers
    if (isNaN(distanceTraveled) || isNaN(carFuel) || isNaN(priceOfGasoline)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Perform calculations
    var vDistanceTraveled = distanceTraveled / 100.0;
    var carFuelPrice = carFuel * priceOfGasoline;
    var fuelConsumption = vDistanceTraveled * carFuelPrice;

    // Display the result
    document.getElementById("fuelConsumptionResult").innerHTML = "Amount of fuel consumption in Jordanian dinars JD: " + fuelConsumption + " JD.";
}