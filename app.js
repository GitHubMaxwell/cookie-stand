'use strict';

//going to need an global array of times so you can iterate through them in all the below objects
var opHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

/////////////////////////// first object for first store /////////////////////////
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