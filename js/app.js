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

var colorado = {
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


var Iowa = {
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


var Nebraska = {
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


var Ohio = {
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

