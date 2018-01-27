'use strict';

/////// global arrays of times, ul IDs, and h2 IDs////////

var opHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var ulLocation = ['firstandpike','seaTac','seaCenter','capHill','alki'];
var h2Location = ['location1','location2','location3','location4','location5'];

/////////////////////////// constructor function for stores /////////////////////////

function Store(location, minCust, maxCust, averageSale, randCust, cookiesSold, ulLoc, h2Loc) {

  this.location = location;
  this.minCustomer = minCust;
  this.maxCustomer = maxCust;
  this.avgSale = averageSale;
  this.ulLoc = ulLoc;
  this.h2Loc = h2Loc;
  this.randCust = randCust;
  this.cookiesSold = cookiesSold;

  this.hourlyTotal = function() {
    for (var i = 0; i < opHours.length; i++) {
      this.randCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
      this.cookiesSold.push(Math.round(this.avgSale * this.randCust[i]));
    }
  },

  this.render = function() {
    this.hourlyTotal();
    var location = document.getElementById(h2Loc);// location1 this needs to be some kind of variable/array
    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    location.appendChild(h3El);
    for (var j = 0; j < opHours.length; j++){
      var list = document.getElementById(ulLoc); //ulLocation needs better targeting / this needs to be some kind of variable/array
      var liEl = document.createElement('li');
      liEl.textContent = (opHours[j] + ': ' + this.cookiesSold[j]);
      list.appendChild(liEl);
    }
  };
}

/////////////////////////// creating five instances for constructor function /////////////////////////

var firstAndPike = new Store('1st and Pike',23,65,6.3,[],[], ulLocation[0],h2Location[0]);
var seatacAirport = new Store('SeaTac Airport',3,24,1.2,[],[], ulLocation[1],h2Location[1]);
var seattleCenter = new Store('Seattle Center',11,38,3.7,[],[], ulLocation[2],h2Location[2]);
var capitolHill = new Store('Capitol Hill',20,38,2.3,[],[], ulLocation[3],h2Location[3]);
var alki = new Store('Alki',2,16,4.6,[],[], ulLocation[4], h2Location[4]);

/////////////////////////// calling the instances to display on the page /////////////////////////

firstAndPike.render();
seatacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();

/////////////////////////// old Lab 6 code /////////////////////////
/*
var storeOne = {
  location: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgSale: 6.3,
  randCust: [],
  cookiesSold: [],

  hourlyTotal: function() {
    for (var i = 0; i < opHours.length; i++) {
      this.randCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
      this.cookiesSold.push(Math.round(this.avgSale * this.randCust[i]));
    }
  },
  render: function () {
    this.hourlyTotal();
    var location = document.getElementById('location1');
    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    location.appendChild(h3El);
    for (var j = 0; j < opHours.length; j++){
      var list = document.getElementById('firstandpike');
      var liEl = document.createElement('li');
      liEl.textContent = (opHours[j] + ': ' + this.cookiesSold[j]);
      list.appendChild(liEl);
    }
  },
};
storeOne.render();

/////////////////////////// second object for second store /////////////////////////
var storeTwo = {
  location: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgSale: 1.2,
  randCust: [],
  cookiesSold: [],

  hourlyTotal: function() {
    for (var i = 0; i < opHours.length; i++) {
      this.randCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
      this.cookiesSold.push(Math.round(this.avgSale * this.randCust[i]));
    }
  },
  render: function() {
    this.hourlyTotal();
    var location = document.getElementById('location2');
    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    location.appendChild(h3El);

    for(var j = 0; j < opHours.length; j++) {
      var list = document.getElementById('seaTac');
      var liEl = document.createElement('li');
      liEl.textContent = (opHours[j] + ': ' + this.cookiesSold[j]);
      list.appendChild(liEl);
    }
  },
};
storeTwo.render();

/////////////////////////// third object for third store /////////////////////////
var storeThree = {
  location: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgSale: 3.7,
  randCust: [],
  cookiesSold: [],

  hourlyTotal: function() {
    for (var i = 0; i < opHours.length; i++) {
      this.randCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
      this.cookiesSold.push(Math.round(this.avgSale * this.randCust[i]));
    }
  },
  render: function() {
    this.hourlyTotal();
    var location = document.getElementById('location3');
    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    location.appendChild(h3El);

    for(var j = 0; j < opHours.length; j++) {
      var list = document.getElementById('seaCenter');
      var liEl = document.createElement('li');
      liEl.textContent = (opHours[j] + ': ' + this.cookiesSold[j]);
      list.appendChild(liEl);
    }
  },
};
storeThree.render();

/////////////////////////// fourth object for fourth store /////////////////////////
var storeFour = {
  location: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgSale: 2.3,
  randCust: [],
  cookiesSold: [],

  hourlyTotal: function() {
    for (var i = 0; i < opHours.length; i++) {
      this.randCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
      this.cookiesSold.push(Math.round(this.avgSale * this.randCust[i]));
    }
  },
  render: function() {
    this.hourlyTotal();
    var location = document.getElementById('location4');
    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    location.appendChild(h3El);

    for(var j = 0; j < opHours.length; j++) {
      var list = document.getElementById('capHill');
      var liEl = document.createElement('li');
      liEl.textContent = (opHours[j] + ': ' + this.cookiesSold[j]);
      list.appendChild(liEl);
    }
  },
};
storeFour.render();

/////////////////////////// fifth object for fifth store /////////////////////////
var storeFive = {
  location: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgSale: 4.6,
  randCust: [],
  cookiesSold: [],

  hourlyTotal: function() {
    for (var i = 0; i < opHours.length; i++) {
      this.randCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
      this.cookiesSold.push(Math.round(this.avgSale * this.randCust[i]));
    }
  },
  render: function() {
    this.hourlyTotal();
    var location = document.getElementById('location5');
    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    location.appendChild(h3El);

    for(var j = 0; j < opHours.length; j++) {
      var list = document.getElementById('alki');
      var liEl = document.createElement('li');
      liEl.textContent = (opHours[j] + ': ' + this.cookiesSold[j]);
      list.appendChild(liEl);
    }
  },
};
storeFive.render();

*/