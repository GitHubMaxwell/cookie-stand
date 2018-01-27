'use strict';

//going to need an array of objects so you can iterate through them
var opHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeOne = {
  location: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgSale: 6.3,
  randCust: [],
  cookiesSold: [],

  //the random math generator should calculate the random number passing in with the min and max customers as the limits, take that number and times it by  and return the 
  hourlyTotal: function() {
    //you do want the random math generator in the for loop so it makes a new one each iteration, also defining the totalCookies in the
    for (var i = 0; i < opHours.length; i++) {
      this.randCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
      //console.log(this.hourTotalArray);
      //var cookieAmount = (rand * avgSaleRate);
      this.cookiesSold.push(Math.round(this.avgSale * this.randCust[i]));
    }
  },
  render: function () {
    this.hourlyTotal();
    var location = document.getElementById('location1');
    //why do i have to create the element (thats empty and doesnt have any text or content in it) if its already defined in the html. maybe i dont and all i have to do is target it and fill in the text with
    var h2El = document.createElement('h2');
    //then you add the content that is defined here in the object
    h2El.textContent = this.location;
    //then you have to take 
    location.appendChild(h2El);
    for (var j = 0; j < opHours.length; j++){
      var list = document.getElementById('firstandpike');
      var liEl = document.createElement('li');
      liEl.textContent = (opHours[j] + ': ' + this.cookiesSold[j]);
      list.appendChild(liEl);
    }
  },
};
storeOne.render();
console.log(storeOne.randCust);
console.log(storeOne.cookiesSold);

var storeTwo = {
  location: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgSale: 1.2,
  randCust: [],
  cookiesSold: [],
  //get a random number of customers push to array
  //times the avgSale. push to array
  hourlyTotal: function() {
    for (var i = 0; i < length.opHours; i++) {
      this.randCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
      this.cookiesSold.push(Math.round(this.avgSale * this.randCust[i]));
    }
  },
  render: function() {
    //you have to locate the element that is the title of the list. it doesn have to be in the for loop because its just a title theres no need to iterate it
    //you have to store the location of the element by its id in a variable,
    var location = document.getElementById('location2');
    //then you have to
    var h3El = document.textContent;
    //you then have to declare a variable to store the textContent that you wish to put in the title in a variable
    h3El.textContent = storeTwo.location;
    location.appendChild(h3El);
    for(var j = 0; j < length.opHours; j++) {
      //call other methods and build the list
    }
  },
};
storeTwo.render();
/*
var storeThree = {
  location: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgSale: 3.7,

  hourlyTotal: function() {
    console.log('My name is ' + storeOne.name + ' and I like to roam around in the ' + storeOne.territory + '.');
  }
};
var storeFour = {
  location: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgSale: 2.3,

  hourlyTotal: function() {
    console.log('My name is ' + storeOne.name + ' and I like to roam around in the ' + storeOne.territory + '.');
  }
};
var storeFive = {
  location: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgSale: 4.6,

  hourlyTotal: function() {
    console.log('My name is ' + storeOne.name + ' and I like to roam around in the ' + storeOne.territory + '.');
  }
};
*/
/*
var storeLoc = document.getElementByClass('location');
var minimumCust = document.getElementByClass('minCust');
var maximumCust = document.getElementByClass('maxCust');
var avgSale = document.getElementByClass('avgCookieSale');
*/

/*
hourlyTotal: function(maxCustomer, minCustomer, avgSaleRate) {
    for (var i = 0; i < 15; i++) {
      var totalCookies = (Math.random() * (maxCustomer - minCustomer) + minCustomer) * avgSaleRate;
    }
    return totalCookies;
  }
};
*/