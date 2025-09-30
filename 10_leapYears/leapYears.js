const leapYears = function(year) {
  if ((year / 4) % 1 === 0 && Number.isInteger( (year/100) ) === false || Number.isInteger((year/400)) === true)
     {return true}
  else {return false}
}

// Do not edit below this line
module.exports = leapYears;
