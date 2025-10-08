const fibonacci = function(num) {
// Had to google for a reference formula on the web to adapt to this one :/
// Guest there would be times when one will need to get inspired from somewhere.

   if (num < 0) {return "OOPS"}
   if (num == 0) {return 0}
   let numberNum = Number(num)
    let num1 = 1;
    let num2 = 1;

    let total;
    if (num === 1) {
        return num1;
    } else if (num === 2) {
        return num2;
    } else {
        for (let i = 3; i <= num; i++) {
            total = num1 + num2;
            num1 = num2;
            num2 = total;
        }
        return num2;
    }
};

// Do not edit below this line
module.exports = fibonacci;
