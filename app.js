'use strict';

/////// global arrays of times, ul IDs, and h2 IDs////////

var opHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var ulLocation = ['firstandpike','seaTac','seaCenter','capHill','alki'];
var h2Location = ['location1','location2','location3','location4','location5'];
//var arrayForObjects = [];
//var

/////////////////////////// thead function /////////////////////////
function times() {
  var newRow = document.getElementById('tableHead');
  var trEl = document.createElement('tr');
  trEl.setAttribute('id', 'timesRow');
  newRow.appendChild(trEl);
  for (var j = 0; j < opHours.length; j++){
    if (j <= 0) {//if this is the first column make a blank cell
      var location = document.getElementById('timesRow');
      var blankThEl = document.createElement('th');
      blankThEl.textContent = '';
      location.appendChild(blankThEl);
    }
    var list = document.getElementById('timesRow');
    var thEl = document.createElement('th');
    thEl.textContent = (opHours[j]);
    list.appendChild(thEl);
  }
  return list;
}

/////////////////////////// tbody constructor function for stores /////////////////////////

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
    var row = document.getElementById('tableBody');
    var trEl = document.createElement('tr');
    trEl.setAttribute('id', this.location + 'Row');
    row.appendChild(trEl);
    for (var j = 0; j < opHours.length; j++){
      if (j <= 0) {
        var location = document.getElementById(this.location + 'Row');
        var thEl = document.createElement('th');
        thEl.textContent = this.location;
        location.appendChild(thEl);
      }
      var list = document.getElementById(this.location + 'Row');
      var tdEl = document.createElement('td');
      tdEl.textContent = (this.cookiesSold[j]);
      list.appendChild(tdEl);
    }
  };
}

/////////////////////////// tfoot function /////////////////////////

function totals() {
  var row = document.getElementById('tableFooter');
  var trEl = document.createElement('tr');
  trEl.setAttribute('id', 'totalsRow');
  row.appendChild(trEl);
  for (var j = 0; j < opHours.length; j++){
    if (j <= 0) { //if this is the first column make a blank cell
      var location = document.getElementById('totalsRow');
      var blankThEl = document.createElement('th');
      blankThEl.textContent = '';
      location.appendChild(blankThEl);
    }
    var list = document.getElementById('totalsRow');
    var thEl = document.createElement('th');
    thEl.textContent = (opHours[j]);
    list.appendChild(thEl);
  }
  return list;
}

/////////////////////////// creating five instances for constructor function /////////////////////////
/////how to turn this into a function that is called and stores these objects in an array//////////

var firstAndPike = new Store('1st and Pike',23,65,6.3,[],[], ulLocation[0],h2Location[0]);
var seatacAirport = new Store('SeaTac Airport',3,24,1.2,[],[], ulLocation[1],h2Location[1]);
var seattleCenter = new Store('Seattle Center',11,38,3.7,[],[], ulLocation[2],h2Location[2]);
var capitolHill = new Store('Capitol Hill',20,38,2.3,[],[], ulLocation[3],h2Location[3]);
var alki = new Store('Alki',2,16,4.6,[],[], ulLocation[4], h2Location[4]);

/////////////////////////// calling the instances/functions to display on the page /////////////////////////

firstAndPike.render();
seatacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();


times();
totals();

/////////////////////////// backup constructor code ////////////////////////////////
/*
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
    var location = document.getElementById(h2Loc);
    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    location.appendChild(h3El);
    for (var j = 0; j < opHours.length; j++){
      var list = document.getElementById(ulLoc);
      var liEl = document.createElement('li');
      liEl.textContent = (opHours[j] + ': ' + this.cookiesSold[j]);
      list.appendChild(liEl);
    }
  };
}
*/