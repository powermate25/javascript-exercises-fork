const removeFromArray = function (prm, ...index){
/* console.log(prm.slice(...index)) */

    return prm.filter(x => !index.includes(x))
} ;



// Do not edit below this line
module.exports = removeFromArray;





