const getTheTitles = function(obj) {
// for (let i in obj){ return ( obj[i]["title"] ) }
 result = obj.map( i => i.title )
 return result
};

// Do not edit below this line
module.exports = getTheTitles;
