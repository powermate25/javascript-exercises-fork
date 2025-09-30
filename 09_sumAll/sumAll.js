const sumAll = function(x, y) {
  let total = 0;
 if (x < 0 || y < 0 || x !== Math.floor(x) || y !== Math.floor(y) || typeof(x) == !Number || typeof(y) == !Number ) {return "ERROR"}
  else if (x < y) {
  for (i = x; i <= y; i++){ total += i;}
  } 
  else if (x > y) {
    for (i = x; i >= y; i--){ total += i;}
  }
return total



};

// Do not edit below this line
module.exports = sumAll;
