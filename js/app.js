'use strict';

var california = {
  minCust: 15,
  maxCust: 40,
  salesHourly: [3,6,8,4,10,12,10,15,13,15,20,10,13,7,5],
  saleTotal: 151,
  saleAvg: 10.06,
}

function getsum(array){
  return array.reduce(function(sum, value) {
    return sum + value;
  }, 0);
}

