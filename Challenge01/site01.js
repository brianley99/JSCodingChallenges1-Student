const marvelHeroes = [
    "Ant-Man",
    "Black Panther",
    "Black Widow",
    "Captain America",
    "Doctor Strange",
    "Hawkeye",
    "Hulk",
    "Iron Man",
    "Luke Cage",
    "Moon Knight",
    "Ms. Marvel",
    "Scarlet Witch",
    "Spider-Man",
    "Thor",
    "Wasp"
]
//driver function used for display and passing values.
function findHero() {

    //implement the function findLongestString that returns the longest word.
    let lword = findLongestString(marvelHeroes);

    //used for display. no need to change
    document.getElementById("results").innerHTML = lword;

    //extra credit display all of the heroes to the page
    document.getElementById("namelist").innerHTML = formatNames(marvelHeroes);
}

//takes an array of strings and returns the longest one. 
function findLongestString(namesArry) {

    // Set a default string to return
    let longestString = '';

    // Loop over all strings in array
    for (let i = 0; i < namesArry.length; i++) {
        const currentName = namesArry[i];

        // If any is longer than the current string, replace it
        if (currentName.length > longestString.length) {
            longestString = currentName;
        }
    }

    return longestString;
}

//takes an array of strings and formats them as an HTML list
function formatNames(namesArry) {
    
    // Empty sting to store formated elements
    let formatedNames = '<ul>';

    // Loop over each name and format it
    for (let i = 0; i < namesArry.length; i++) {
        const name = namesArry[i];
        
        formatedNames += `<li>${name}</li>`
    }

    // close list
    formatedNames += '</ul>'

    // return
    return formatedNames;
}