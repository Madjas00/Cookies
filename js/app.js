'use strict';

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

california.purchaseHour();
console.log(california.salesHourly);

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


var Iowa = {
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


var Nebraska = {
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


var Ohio = {
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

