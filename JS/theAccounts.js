var fuelEconomy = document.getElementById('fuelEconomyForm');
/*var distanceTraveld = parseFloat(document.getElementById('distanceTraveld').value);
var carFuel = parseFloat(document.getElementById('carFuel').value);
var priceOfGasoline = parseFloat(document.getElementById('priceOfGasoline').value);*/

//console.log(priceOfGasoline);

fuelEconomy.addEventListener("submit", function(e){
    e.preventDefault();

    var distanceTraveled = parseFloat(document.getElementById("distanceTraveld").value);
    var carFuel = parseFloat(document.getElementById("carFuel").value)/10;
    var priceOfGasoline = parseFloat(document.getElementById("priceOfGasoline").value)/100;

    // Check if inputs are valid numbers
    if (isNaN(distanceTraveled) || isNaN(carFuel) || isNaN(priceOfGasoline)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }
    else if(distanceTraveled <=0 || carFuel <= 0 || priceOfGasoline <= 0){
        alert("Please enter the value correctly because you are giving a negative value");
        return ; 
    }

    // Perform calculations
    var vDistanceTraveled = distanceTraveled / 100.0;
    var carFuelPrice = carFuel * priceOfGasoline;
    var fuelConsumption = vDistanceTraveled * carFuelPrice;

    // Display the result
    document.getElementById("fuelConsumption").innerHTML = "Amount of fuel consumption in Jordanian dinars JD: " + fuelConsumption.toFixed(2)  + " JD.";


    var taxiFFields = document.getElementById('taxiFFields');
    taxiFFields.style.display = 'block';

    // Set values for additional fields
    //document.getElementById('field1').value = "Enter the number of trips you have completed on ((TaxiF))";
    document.getElementById('percentageTaxiF').value = "14";

    
});
//////////////////////////////////////////

    function generateAdditionalFields() {
        var tripsTaxiFInput = document.getElementById('tripsTaxiF');
        var numberOfTrips = parseInt(tripsTaxiFInput.value) || 0;

        var additionalFieldsContainer = document.getElementById('additionalFieldsContainer');
        additionalFieldsContainer.innerHTML = ''; // Clear existing fields

        for (var i = 1; i <= numberOfTrips; i++) {
            var label = document.createElement('label');
            label.textContent = 'Enter data for trip ' + i + ':';

            var input = document.createElement('input');
            input.type = 'number';
            input.name = 'tripData';
            input.id = 'tripData' + i;

            var br = document.createElement('br');

            additionalFieldsContainer.appendChild(label);
            additionalFieldsContainer.appendChild(input);
            additionalFieldsContainer.appendChild(br);
        }

        
    }
    //////////////////////////
