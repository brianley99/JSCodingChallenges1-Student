//driver function used for display and passing values.
function convertIt() {

    //get the user entered value
    let kmValue = parseFloat(document.getElementById("InputValue").value);

    if (isNaN(kmValue)) {
        alert("Please enter a number");

    } else {
        //call your function to conver the vm value to miles
        let milesValue = convertToKm(kmValue);

        //display your name 
        document.getElementById("results").innerHTML = `${kmValue} km = ${milesValue.toFixed(2)} miles`;
    }

}

//takes an array of strings and returns the longest one. 
function convertToKm(kmValue) {

    // Formula to Convert Km to Miles: Km * 0.6214 = Miles
    let milesValue = kmValue * 0.6214;

    return milesValue;
}