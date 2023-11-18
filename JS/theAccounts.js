var fuelEconomy = document.getElementById('fuelEconomyForm');

fuelEconomy.addEventListener("submit", function(e){
    e.preventDefault();

    var distanceTraveled = parseFloat(document.getElementById("distanceTraveld").value);
    var carFuel = parseFloat(document.getElementById("carFuel").value);
    var priceOfGasoline = parseFloat(document.getElementById("priceOfGasoline").value);

 
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

        ///////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////
    function generateAdditionalFields(index) {
        var a = index;
        var tripsInput = document.getElementsByClassName('numberTrip')[index];
        var numberOfTrips = parseInt(tripsInput.value) || 0;

        var additionalFieldsContainer = document.getElementsByClassName('additionalFieldsContainer')[index];
        additionalFieldsContainer.innerHTML = ''; // Clear existing fields

        var addSubmit = document.createElement('input');
            addSubmit.value = 'Enter';
            addSubmit.type = 'button';
            addSubmit.onclick = function() {
                
                addApp((index+1));
            };

            

        for (var i = 1; i <= numberOfTrips; i++) {
            var label = document.createElement('label');
            label.textContent = 'Enter data for trip ' + i + ':';

            var input = document.createElement('input');
            input.type = 'number';
            input.name = 'tripData';
            input.id = 'tripData' + i;
            input.className = 'tripData';
            input.step ='any'; 

            var br = document.createElement('br');

            additionalFieldsContainer.appendChild(label);
            additionalFieldsContainer.appendChild(input);
            additionalFieldsContainer.appendChild(br);
            
        }
        
        addSubmit.addEventListener("click", function(e){
            e.preventDefault();
            applicationAccounts(getTripData(a),index);
        });
       
        additionalFieldsContainer.appendChild(addSubmit);

        var p1 = document.createElement('p');
        p1.className = 'totalTrips';

        var p2 = document.createElement('p');
        p2.className = 'profitTrips';

        var p3 = document.createElement('p');
        p3.className = 'applicationTrips';

        additionalFieldsContainer.appendChild(p1);
        additionalFieldsContainer.appendChild(p2);
        additionalFieldsContainer.appendChild(p3);

        

      

    }
    //////////////////////////
    function getTripData(index) {
        var trips = [];
        var numberOfTrips = parseInt(document.getElementsByClassName('numberTrip')[index].value) || 0;

       /* for (var i = 1; i <= numberOfTrips; i++) {
            var tripData = parseFloat(document.getElementsByClassName('tripData')[i-1].value) || 0;
            trips.push(tripData);}*/
        
        var tripsTaxiF = parseInt(document.getElementById('tripsTaxiF').value) || 0;
        var tripsPetra = parseInt(document.getElementById('tripsPetra').value ) || 0;
        var tripsZainCar = parseInt(document.getElementById('tripsZainCar').value)  || 0;
        var tripsTicram = parseInt(document.getElementById('tripsTicram').value ) || 0;
        var tripsGoJo = parseInt(document.getElementById('tripsGoJo').value)  || 0;
        
        if(index == 0){
            for (var i = 1; i <= numberOfTrips; i++) {
            var tripData = parseFloat(document.getElementsByClassName('tripData')[i-1].value) || 0;
            trips.push(tripData);
        }}
        else if(index == 1){
            for (var i = tripsTaxiF; i <= (tripsTaxiF+numberOfTrips)-1; i++) {
                var tripData = parseFloat(document.getElementsByClassName('tripData')[i].value) || 0;
                trips.push(tripData);
        }}
        else if(index == 2){
            for (var i = tripsTaxiF+tripsPetra; i <= (tripsTaxiF+tripsPetra+tripsZainCar)-1; i++) {
                var tripData = parseFloat(document.getElementsByClassName('tripData')[i].value) || 0;
                trips.push(tripData);
        }}
        else if(index == 3){
            for (var i = tripsTaxiF+tripsPetra+tripsZainCar; i <= (tripsTaxiF+tripsPetra+tripsZainCar+tripsTicram)-1; i++) {
                var tripData = parseFloat(document.getElementsByClassName('tripData')[i].value) || 0;
                trips.push(tripData);
        }}
        else if(index == 4){
            for (var i = tripsTaxiF+tripsPetra+tripsZainCar+tripsTicram; i <= (tripsTaxiF+tripsPetra+tripsZainCar+tripsTicram+tripsGoJo)-1; i++) {
                var tripData = parseFloat(document.getElementsByClassName('tripData')[i].value) || 0;
                trips.push(tripData);
        }}

        

        return trips;
    }
    ////////////////////////

    function applicationAccounts(tripApp,index) {
        var sumTrip = 0;
        var sumProfit = 0;

        for (var i = 0; i < tripApp.length; i++) {
            sumTrip += tripApp[i];
            var profitTrip = ((tripApp[i] * 100) - (tripApp[i] * document.getElementsByClassName('percentage')[index].value)) / 100;
            sumProfit += profitTrip;
        }

        var totalTrips = document.getElementsByClassName('totalTrips')[index];
        totalTrips.innerHTML = "Total number of trips without tax = "+sumTrip.toFixed(2)+" JD";

        var profitTrips = document.getElementsByClassName('profitTrips')[index];
        profitTrips.innerHTML = "Total net profit with tax         = " + sumProfit.toFixed(2) + " JD";

        var applicationTrips = document.getElementsByClassName('applicationTrips')[index];
        applicationTrips.innerHTML = "The sum of the value taken by the application = " + (sumTrip - sumProfit).toFixed(2) + " JD";


        //console.log("Total number of trips without tax = " + sumTrip + " JD");
        //console.log("Total net profit with tax         = " + sumProfit + " JD");
        //console.log("The sum of the value taken by the application = " + (sumTrip - sumProfit) + " JD");
    }
    
    function addApp(index){
        var taxiFFields = document.getElementsByClassName('tripFields')[index];
        taxiFFields.style.display = 'block';

        if(index == 1)
        document.getElementsByClassName('percentage')[index].value = "16";
        else if(index == 2)
        document.getElementsByClassName('percentage')[index].value = "13";
        else if(index == 3)
        document.getElementsByClassName('percentage')[index].value = "11";
        else if(index == 4)
        document.getElementsByClassName('percentage')[index].value = "12";

        generateAdditionalFields(index);
    }

    