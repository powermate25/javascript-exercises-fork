const repeatString = function(theString, theNumber) {

    let userString = "";
if (theNumber >= 0) {
    for(i = 1; i <= theNumber; i++ ) {
 userString += theString;
    }
    return userString; }
    else {return "ERROR"}

};



// Do not edit below this line
module.exports = repeatString;
