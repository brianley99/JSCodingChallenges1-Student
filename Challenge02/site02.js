//balanced
const testbrackets1 = "[()]{}{[()()]()}";
//balanced
const testbrackets2 = `([{}])`;
//not balanced
const testbrackets3 = "{(})[]";
//not balanced
const testbrackets4 = "[(])";
//not balanced
const testbrackets5 = "[()";

//driver function used for display and passing values.
function checkBrackets() {

    //change testbrackets here. makes easire to change in one place.
    let testbrackets = testbrackets1;

    //implement isBalanced function. checks if the bracket string is balanced.
    let results = isBalanced(testbrackets);

    //used for display no need to change
    let msg = "";

    if (results == true) {
        msg = `Brackets are balanced ==> ${testbrackets}`;
    } else {
        msg = `Brackets are NOT balanced ==> ${testbrackets}`;
    }

    //display the message
    document.getElementById("results").innerHTML = msg;

}

//takes an array of strings and returns the longest one. 
function isBalanced(brackets) {

    // Declare array to store open brackets into
    let stackOfBrackets = [];

    // Define open/closed brackets
    const openTypeBrackets = ['(', '{', '['];
    const closedTypeBrackets = [')', '}', ']'];

    // Loop over all the brackets
    for (let i = 0; i < brackets.length; i++) {
        
        const currentBracket = brackets[i];
        
        if (openTypeBrackets.includes(currentBracket)) {
            
            // Add open brackets to array
            stackOfBrackets.push(currentBracket);
        }
        else{

            // Compare closed bracket to the last one in the array
            
            // Get last open bracket (this also removes it from the stack)
            const lastOpenBracket = stackOfBrackets.pop();;

            // Find what type is the last open bracket
            const isTypeOfOpenBracket = (element) => element == lastOpenBracket;
            let indexOfLastOpenBracket = openTypeBrackets.findIndex(isTypeOfOpenBracket);

            // Find what type is the current bracket
            const isTypeOfClosedBracket = (element) => element == currentBracket;
            let indexOfCurrentBracket = closedTypeBrackets.findIndex(isTypeOfClosedBracket);

            // Check if the match
            if (indexOfLastOpenBracket != indexOfCurrentBracket) {
                
                // It's a not match, therefore brackets are unbalanced
                return false;
            }
        }
        
    }

    // Check if there were any brackets left over
    if (stackOfBrackets.length == 0) {
        
        return true;

    } else {
        
        return false;
    }


}