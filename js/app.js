'use strict';


function Store (minCust, maxCust, name, saleAvg) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.name = name;
  this.saleAvg = saleAvg;
  this.salesHourly = [];
}

Store.prototype.randomNum = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

Store.prototype.purchaseHour = function(){
  for(var i = 0; i < 15; i++) {
    this.salesHourly[i] = Math.floor(this.randomNum() * this.saleAvg);
  }
};

Store.prototype.render = function() {
  var tbody = document.getElementById('bodytr');
  var tr = document.createElement ('tr');
  tbody.appendChild(tr);
  var td = document.createElement ('td');
  td.textContent = this.name;
  tr.appendChild (td);
  this.purchaseHour();
  for (var i=0; i<this.salesHourly.length; i++) {
    td = document.createElement ('td');
    td.textContent = this.salesHourly[i];
    tr.appendChild (td);
  }
  //totals
  
};

var california = new Store (15, 40, 'california', 10.06);
california.render();
var colorado = new Store (11, 37, 'colorado', 3.4);
colorado.render();
var iowa = new Store (9, 27, 'iowa', 4.1);
iowa.render();
var nebraska = new Store (16, 38, 'nebraska', 6.2);
nebraska.render();
var ohio = new Store (8, 23, 'ohio', 5.06);
ohio.render();
var hours = ['6am', '7am' , '8am' , '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm' , '8pm' ];


// california.purchaseHour();

// var caliElem = document.getElementById ('california');
// for (var i = 0; i<15; i++) {
//   var liElem = document.createElement ('li');
//   var fullList = hours[i] + ': ' +california.salesHourly[i] + ' Cookies.';
//   liElem.textContent = fullList;
//   caliElem.appendChild(liElem);
// }

// var caltotal =california.salesHourly.reduce(function(acc, val) { return acc + val; });
// var totalElem = document.getElementById ('california');
// var cElem = document.createElement('li');
// cElem.textContent = 'TOTAL: ' + caltotal;
// totalElem.appendChild(cElem);



// colorado.purchaseHour();
// var colElem = document.getElementById ('colorado');
// for (var c = 0; c<15; c++) {
//   var liCol = document.createElement ('li');
//   var colList = hours[c] + ': ' + colorado.salesHourly[c] + ' Cookies';
//   liCol.textContent = colList;
//   colElem.appendChild(liCol);
// }

