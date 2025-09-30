const removeFromArray = function (arr, ...args){
/* console.log(prm.slice(...index)) */

    return arr.filter(i => !args.includes(i))
} ;



// Do not edit below this line
module.exports = removeFromArray;





