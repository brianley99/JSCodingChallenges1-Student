//driver function used for display and passing values.
function findVowels() {

    //getting values from the page no need to change.
    let str = document.getElementById("wordOne").value;

    if (str == "") {
        alert("Please enter a word or phrase");
        return;
    }

    //implement getVowelCount
    let vowelObj = getVowelCount(str);
    
    //used for display no need to change
    //check if the obj returned is empty
    if (Object.keys(vowelObj).length === 0){
        alert("Error: Vowel Object is Empty");
        return;
    }

    document.getElementById("results").innerHTML = `You entered <strong>"${str}"</strong> it has ${vowelObj.vCount} vowels.<br>The vowels found are ${vowelObj.vFound.toString()}`;

}

//takes an string and returns the vowel count and the vowels found as an object.
function getVowelCount(str) {
    
    // Initalize voul object
    let voulsCount = 0;

    // Initialize voul array
    let voulsFound = [];

    // Normalize text
    let normalizedStr = str.replace(/[^a-zA-Z]/g, '');
    normalizedStr.toLowerCase();

    // Initialize the given string as an array
    let strAsArray = normalizedStr.split('');

    // Loop through each string to see if it is a voul (a, e, i, o, u)
    strAsArray.forEach(element => {
        
        // If it's a voul, increase counter by one
        if (element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u') {
            
            voulsCount += 1;
            voulsFound.push(element);
        }
    });


    // Return count
    return { vCount : voulsCount, vFound : voulsFound};
}