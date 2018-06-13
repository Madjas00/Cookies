'use strict';


function store (minCust, maxCust, name, saleAvg) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.name = name;
  this.saleAvg = saleAvg; 
}


var california = {
  minCust: 15,
  maxCust: 40,
  salesHourly: [],
  saleAvg: 10.06,

  randomNum: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  purchaseHour: function(){
    for(var i = 0; i < 15; i++) {
      this.salesHourly[i] = Math.floor(this.randomNum() * this.saleAvg);
    }
  },
};



var colorado = {
  minCust: 11,
  maxCust: 37,
  salesHourly: [],
  saleAvg: 3.4,

  randomNum: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  purchaseHour: function(){
    for(var i = 0; i < 15; i++) {
      this.salesHourly[i] = Math.floor(this.randomNum() * this.saleAvg);
    }
  },
};


var iowa = {
  minCust: 9,
  maxCust: 27,
  salesHourly: [],
  saleAvg: 4.1,

  randomNum: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  purchaseHour: function(){
    for(var i = 0; i < 15; i++) {
      this.salesHourly[i] = Math.floor(this.randomNum() * this.saleAvg);
    }
  },
};


var nebraska = {
  minCust: 16,
  maxCust: 38,
  salesHourly: [],
  saleAvg: 6.2,

  randomNum: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  purchaseHour: function(){
    for(var i = 0; i < 15; i++) {
      this.salesHourly[i] = Math.floor(this.randomNum() * this.saleAvg);
    }
  },
};


var ohio = {
  minCust: 8,
  maxCust: 23,
  salesHourly: [],
  saleAvg: 5.06,

  randomNum: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  purchaseHour: function(){
    for(var i = 0; i < 15; i++) {
      this.salesHourly[i] = Math.floor(this.randomNum() * this.saleAvg);
    }
  },
};

var hours = ['6am', '7am' , '8am' , '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm' , '8pm' ];
california.purchaseHour();

var caliElem = document.getElementById ('california');
for (var i = 0; i<15; i++) {
  var liElem = document.createElement ('li');
  var fullList = hours[i] + ': ' +california.salesHourly[i] + ' Cookies.';
  liElem.textContent = fullList;
  caliElem.appendChild(liElem);
}

var caltotal =california.salesHourly.reduce(function(acc, val) { return acc + val; });
var totalElem = document.getElementById ('california');
var cElem = document.createElement('li');
cElem.textContent = 'TOTAL: ' + caltotal;
totalElem.appendChild(cElem);



colorado.purchaseHour();
var colElem = document.getElementById ('colorado');
for (var c = 0; c<15; c++) {
  var liCol = document.createElement ('li');
  var colList = hours[c] + ': ' + colorado.salesHourly[c] + ' Cookies';
  liCol.textContent = colList;
  colElem.appendChild(liCol);
}

