'use strict';
var hours = ['6am', '7am' , '8am' , '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm' , '8pm' ];

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
  for(var i = 0; i < hours.length; i++) {
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
  var total = this.salesHourly.reduce(function(acc, val) {
    return acc + val;
  });
  td = document.createElement ('td');
  td.textContent = total;
  tr.appendChild (td);
};

function headelements() {
  var thead = document.getElementById ('headtr');
  var tr = document.createElement ('tr');
  thead.appendChild (tr);
  var td = document.createElement ('td');
  tr.appendChild (td);
  for (var i = 0; i< hours.length; i++) {
    td = document.createElement ('td');
    td.textContent = hours[i] ;
    tr.appendChild (td);
  }
  td = document.createElement ('td');
  td.textContent = '-Total Sales-';
  tr.appendChild (td);
}

headelements();


var california = new Store (15, 40, 'California', 10.06);
california.render();
var colorado = new Store (11, 37, 'Colorado', 3.4);
colorado.render();
var iowa = new Store (9, 27, 'Iowa', 4.1);
iowa.render();
var nebraska = new Store (16, 38, 'Nebraska', 6.2);
nebraska.render();
var ohio = new Store (8, 23, 'Ohio', 5.06);
ohio.render();
