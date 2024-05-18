let cityData = [{
        city: "Jacksonville",
        state: "North Carolina",
        state_code: "NC",
        population: 67363,
        median_age: 24.2,
        avg_household_size: 2.51
        
    },
    {
        city: "Cary",
        state: "North Carolina",
        state_code: "NC",
        population: 160514,
        median_age: 39.9,
        avg_household_size: 2.61
    },
    {
        city: "Wilmington",
        state: "North Carolina",
        state_code: "NC",
        population: 89270,
        median_age: 35.5,
        avg_household_size: 2.24
    },
    {
        city: "Concord",
        state: "North Carolina",
        state_code: "NC",
        population: 60500,
        median_age: 35.7,
        avg_household_size: 2.72
    },
    {
        city: "Charlotte",
        state: "North Carolina",
        state_code: "NC",
        population: 827121,
        median_age: 34.3,
        avg_household_size: 2.52
    },
    {
        city: "Asheville",
        state: "North Carolina",
        state_code: "NC",
        population: 88507,
        median_age: 37.9,
        avg_household_size: 2.18
    },
    {
        city: "Durham",
        state: "North Carolina",
        state_code: "NC",
        population: 257598,
        median_age: 33.2,
        avg_household_size: 2.40
    },
    {
        city: "Greenville",
        state: "North Carolina",
        state_code: "NC",
        population: 90588,
        median_age: 26.2,
        avg_household_size: 2.40
    },
    {
        city: "Raliegh",
        state: "North Carolina",
        state_code: "NC",
        population: 451949,
        median_age: 32.8,
        avg_household_size: 2.42
    },
    {
        city: "High Point",
        state: "North Carolina",
        state_code: "NC",
        population: 109828,
        median_age: 35.5,
        avg_household_size: 2.65
    },
    {
        city: "Gastonia",
        state: "North Carolina",
        state_code: "NC",
        population: 74550,
        median_age: 36.9,
        avg_household_size: 2.67
    },
    {
        city: "Fayetteville",
        state: "North Carolina",
        state_code: "NC",
        population: 201965,
        median_age: 30.7,
        avg_household_size: 2.50
    },
    {
        city: "Winston-Salem",
        state: "North Carolina",
        state_code: "NC",
        population: 241232,
        median_age: 34.7,
        avg_household_size: 2.47
    },
    {
        city: "Greensboro",
        state: "North Carolina",
        state_code: "NC",
        population: 285344,
        median_age: 35.5,
        avg_household_size: 2.36
    },
    {
        city: "Kernersville",
        state: "North Carolina",
        state_code: "NC",
        population: 24414,
        median_age: 42,
        avg_household_size: 2.31

    }
];

//driver function used for display and passing values.
function citySort() {

    let sortedCityData = sortByPopulation(cityData, "desc");
    
    //extra credit functions
    //sortyByName(cityData);
    //sortByAge(cityData, "asc");
    
    //used for display purposes. not need to change
    tbody = document.getElementById("results");
    let trow = "";
    //display the data 
    sortedCityData.forEach(item => {
        trow += `<tr><td>${item.city}</td><td>${item.state_code}</td><td>${item.population.toLocaleString("en-US")}</td><td>${item.median_age}</td><td>${item.avg_household_size}</td></tr>`;
    });
    tbody.innerHTML = "";
    tbody.innerHTML = trow;
}

//takes an array of objects and sorts by population. 
function sortByPopulation(cityData, sortDir) {
    
    // Declare array to store sorted data into
    let sortedCityData = [];

    // Sort Data
    cityData.forEach(element => {
        
        // No data, just add it to the array
        if (sortedCityData.length == 0) {
            
            sortedCityData.push(element);

        // Second element, add it ether bethind or in front
        } else if (sortedCityData.length == 1) {
            
            // Get first city to compare
            const firstCityComparitor = sortedCityData[0];

            // Compare both populations
            if (element.population > firstCityComparitor.population) {
                
                // New city's population is larger
                sortedCityData.splice(1, 0, element);
                
            } else {
                
                // New city's population is smaller
                sortedCityData.splice(0, 0, element);
            }

        // Start comparing
        } else {
            
            // Loop over each cityData element in pairs and compare value of population with current element
            for (let i = 0; i < sortedCityData.length; i++) {
                
                let firstCityComparitor = sortedCityData[i];
                let secondCityComparitor = sortedCityData[i + 1];

                // Last element, add to the end
                if (secondCityComparitor == null) {
                    sortedCityData.push(element);
                    break;
                }
                
                // The element's population is smaller than the first comparitor element, add it behind
                if (element.population < firstCityComparitor.population) {
                    
                    sortedCityData.splice(i, 0, element);
                    break;

                // The element's population is in the range of both comparitor elements, add it in between
                } else if (element.population >= firstCityComparitor.population && 
                           element.population < secondCityComparitor.population) {
                    
                    sortedCityData.splice((i + 1), 0, element);
                    break;
                
                } 
                // If the element's population is over the range of the second compatitor element, move on to the next pair
            }
        }
    });

    // Return sorted data
    if (sortDir = 'desc') {
        return sortedCityData.reverse();
        
    } else {
        return sortedCityData; 
    }
}

//takes an array of objects and sorts by median age. 
function sortByAge(cityData, sortDir){
  
}

//takes an array of objects and sorts by city name. 
function sortyByName(cityData) {
    
}