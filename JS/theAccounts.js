var fuelEconomy = document.getElementById('fuelEconomyForm');
/*var distanceTraveld = parseFloat(document.getElementById('distanceTraveld').value);
var carFuel = parseFloat(document.getElementById('carFuel').value);
var priceOfGasoline = parseFloat(document.getElementById('priceOfGasoline').value);*/

//console.log(priceOfGasoline);

fuelEconomy.addEventListener("submit", function(e){
    e.preventDefault();

    var distanceTraveled = document.getElementById("distanceTraveld");
    var carFuel = document.getElementById("carFuel");
    var priceOfGasoline = document.getElementById("priceOfGasoline");

    // Check if inputs are valid numbers
    if (isNaN(distanceTraveled.value) || isNaN(carFuel.value) || isNaN(priceOfGasoline.value)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Perform calculations
    var vDistanceTraveled = distanceTraveled.value / 100.0;
    var carFuelPrice = carFuel.value * priceOfGasoline.value;
    var fuelConsumption = vDistanceTraveled * carFuelPrice;

    // Display the result
    document.getElementById("fuelConsumption").innerHTML = "Amount of fuel consumption in Jordanian dinars JD: " + fuelConsumption + " JD.";


});

/*function calculateFuelConsumption() {


    // Get input values
    var distanceTraveled = document.getElementById("distanceTraveld");
    var carFuel = document.getElementById("carFuel");
    var priceOfGasoline = document.getElementById("priceOfGasoline");

    // Check if inputs are valid numbers
    if (isNaN(distanceTraveled.value) || isNaN(carFuel.value) || isNaN(priceOfGasoline.value)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Perform calculations
    var vDistanceTraveled = distanceTraveled.value / 100.0;
    var carFuelPrice = carFuel.value * priceOfGasoline.value;
    var fuelConsumption = vDistanceTraveled * carFuelPrice;

    // Display the result
    document.getElementById("fuelConsumption").innerHTML = "Amount of fuel consumption in Jordanian dinars JD: " + fuelConsumption + " JD.";
}*/