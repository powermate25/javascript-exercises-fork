const palindromes = function (str) {
//A trick to separate normal punctuation if there's any by isolating first character, middle word & last character
   let firstChar = Array.from(str).slice(0, 1)
   let middleContent = Array.from(str).slice(1, -1)
   let lastChar = Array.from(str).splice(-1)

   // proceed to manually reverse isolated elements from above and join back

   let reversedMiddle = middleContent.reverse().join("").toLowerCase()
   let fullyReversedStr = lastChar.concat(reversedMiddle).concat(firstChar)
   let JoinedReversedStr = fullyReversedStr.join("").toLowerCase()

   // Converting user reversed string to one-word string (preparing for one-word test)
   let oneWordStr = JoinedReversedStr.split(",").join("").split(" ").join("")

   // Converting user string to one-word string (preparing for one-word test)
   let strLowCase = str.toLowerCase()
   let strLowCaseOneWord = str.toLowerCase().split(" ").join("").split(",").join("")


// Running comparison ( from strings converted to lowercase above): 
// Palindromes Case 1: test the oneword string against the OneWord Reversed string.
// Palindromes Case 2 : double check previous comparison ignoring punctuation if there's any.

  if(strLowCase == oneWordStr || strLowCaseOneWord.slice(0, -1) == oneWordStr.slice(1) ){ return true}
  else {return false}
};

// Do not edit below this line
module.exports = palindromes;
