var fuelEconomy = document.getElementById('fuelEconomyForm');
/*var distanceTraveld = parseFloat(document.getElementById('distanceTraveld').value);
var carFuel = parseFloat(document.getElementById('carFuel').value);
var priceOfGasoline = parseFloat(document.getElementById('priceOfGasoline').value);*/

//console.log(priceOfGasoline);

fuelEconomy.addEventListener("submit", function(e){
    e.preventDefault();

    var distanceTraveled = parseFloat(document.getElementById("distanceTraveld").value);
    var carFuel = parseFloat(document.getElementById("carFuel").value);
    var priceOfGasoline = parseFloat(document.getElementById("priceOfGasoline").value);

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

        var addSubmit = document.createElement('input');
            addSubmit.value = 'Enter';
            addSubmit.type = 'button';
            //addSubmit.onclick = generateAdditionalFieldsPtraRide;

        for (var i = 1; i <= numberOfTrips; i++) {
            var label = document.createElement('label');
            label.textContent = 'Enter data for trip ' + i + ':';

            var input = document.createElement('input');
            input.type = 'number';
            input.name = 'tripData';
            input.id = 'tripData' + i;
            input.step ='any'; 

            var br = document.createElement('br');

            additionalFieldsContainer.appendChild(label);
            additionalFieldsContainer.appendChild(input);
            additionalFieldsContainer.appendChild(br);
            
        }
        
        addSubmit.addEventListener("click", function(e){
            e.preventDefault();
            applicationAccounts(getTripData());
        });
       
        additionalFieldsContainer.appendChild(addSubmit);

        var p1 = document.createElement('p');
        p1.id = 'totalTrips';

        var p2 = document.createElement('p');
        p2.id = 'profitTrips';

        var p3 = document.createElement('p');
        p3.id = 'applicationTrips';

        additionalFieldsContainer.appendChild(p1);
        additionalFieldsContainer.appendChild(p2);
        additionalFieldsContainer.appendChild(p3);

        

      /*  var trips = new Array(numberOfTrips);
        for(var i = 0 ; i < numberOfTrips ; i++){
            trips[i] = document.getElementById('tripData'+(i+1));
        }*/

    }
    //////////////////////////
    function getTripData() {
        var trips = [];
        var numberOfTrips = parseInt(document.getElementById('tripsTaxiF').value) || 0;

        for (var i = 1; i <= numberOfTrips; i++) {
            var tripData = parseFloat(document.getElementById('tripData' + i).value) || 0;
            trips.push(tripData);
        }

        return trips;
    }
    ////////////////////////

    function applicationAccounts(tripApp) {
        var sumTrip = 0;
        var sumProfit = 0;

        for (var i = 0; i < tripApp.length; i++) {
            sumTrip += tripApp[i];
            var profitTrip = ((tripApp[i] * 100) - (tripApp[i] * document.getElementById('percentageTaxiF').value)) / 100;
            sumProfit += profitTrip;
        }

        var totalTrips = document.getElementById('totalTrips');
        totalTrips.innerHTML = "Total number of trips without tax = "+sumTrip.toFixed(2)+" JD";

        var profitTrips = document.getElementById('profitTrips');
        profitTrips.innerHTML = "Total net profit with tax         = " + sumProfit.toFixed(2) + " JD";

        var applicationTrips = document.getElementById('applicationTrips');
        applicationTrips.innerHTML = "The sum of the value taken by the application = " + (sumTrip - sumProfit).toFixed(2) + " JD";


        console.log("Total number of trips without tax = " + sumTrip + " JD");
        console.log("Total net profit with tax         = " + sumProfit + " JD");
        console.log("The sum of the value taken by the application = " + (sumTrip - sumProfit) + " JD");
    }
    ///////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////

    