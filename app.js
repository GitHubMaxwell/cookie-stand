'use strict';

console.log('this js file is working');

//going to need an array of objects so you can iterate through them

var storeOne = {
  location: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgSale: 6.3,
  hourTotalArray: [],

  //the random math generator should calculate the random number passing in with the min and max customers as the limits, take that number and times it by  and return the 
  hourlyTotal: function(maxCustomer, minCustomer, avgSaleRate) {
    //you do want the random math generator in the for loop so it makes a new one each iteration, also defining the totalCookies in the 
    
    for (var i = 0; i < 15; i++) {
      var rand = (Math.random() * (maxCustomer - minCustomer) + minCustomer);
      console.log(rand);
      var cookieAmount = (rand * avgSaleRate);
    }
  }
};
storeOne.hourlyTotal(storeOne.minCustomer, storeOne.maxCustomer, storeOne.avgSale);
console.log(storeOne.hourTotalArray);

/*
var storeTwo = {
  location: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgSale: 1.2,

  hourlyTotal: function() {
    console.log('My name is ' + storeOne.name + ' and I like to roam around in the ' + storeOne.territory + '.');
  }
};
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