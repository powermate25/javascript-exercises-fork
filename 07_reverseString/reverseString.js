const reverseString = function(userInput) {
   
    splittedInput = userInput.split("");
    reversedInput = splittedInput.reverse();
    JoinReversedInput = reversedInput.join("");

return JoinReversedInput;



};

// Do not edit below this line
module.exports = reverseString;
