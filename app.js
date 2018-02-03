'use strict';

/////// global arrays of times, ul IDs, and h2 IDs////////

var opHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Store Total'];
var ulLocation = ['firstandpike','seaTac','seaCenter','capHill','alki'];
var h2Location = ['location1','location2','location3','location4','location5'];
var storeContainer = []; //eddie and shamarke help, this is for the stretch goal hourly totals row


/////////////////////////// thead function /////////////////////////
function times() {
  var newRow = document.getElementById('tableHead');
  var trEl = document.createElement('tr');
  trEl.setAttribute('id', 'timesRow');
  newRow.appendChild(trEl);
  for (var j = 0; j < opHours.length; j++){
    if (j <= 0) { //if this is the first column make a blank cell
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
/////////////////////////// event handler function for user input NEW stores /////////////////////////
function newStore() {
  event.preventDefault();
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
  this.rowTotal = 0; //each time the Store is called it sets this back to zero for each row to use

  this.hourlyTotal = function() {
    for (var i = 0; i < opHours.length; i++) {
      this.randCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
      var temp = Math.round(this.avgSale * this.randCust[i]);
      this.rowTotal += temp;
      this.cookiesSold.push(temp);
      console.log(this.rowTotal);
      //for (var j = 0; j < storeContainer.length; j++) {
      //let currentStore = storeContainer[i];
      //rowTotal += currentStore.cookiesSold[j];//says cookiesSold is undefined, mayeb the order in which is is called in the render functio is causing the error im moving it to the end of the function
      //console.log(totalCounter);
      //}
    }
    console.log('after the for loop: ' + this.rowTotal);
  },

  this.render = function() { //the totals column totalCounter can be added to from the render function but at the end this needs to call another functin to add that column to the end of the rows
    var row = document.getElementById('tableBody');
    var trEl = document.createElement('tr');
    trEl.setAttribute('id', this.location + 'Row');
    row.appendChild(trEl);
    this.hourlyTotal();
    for (var j = 0; j < opHours.length -1 ; j++){
      //removed the storeTotal if statement and placed it in its own function below
      if (j <= 0) { //this is adding the counted up store total to the end of the array
        var location = document.getElementById(this.location + 'Row');
        var thEl = document.createElement('th');
        thEl.textContent = this.location;
        location.appendChild(thEl);
        console.log('the first column');
      }
      if (j === opHours.length) {
        tdEl = document.createElement('td'); //its writing it at the end of all the row being constructed and not at the end of each row
        tdEl.textContent = (this.rowTotal);
        trEl.appendChild(tdEl);
        console.log('the last column: ' + this.rowTotal);
      }
      var list = document.getElementById(this.location + 'Row');
      var tdEl = document.createElement('td');
      tdEl.textContent = (this.cookiesSold[j]);
      list.appendChild(tdEl);
      console.log('table cell: ' + j);
    }
    tdEl = document.createElement('td'); //its writing it at the end of all the row being constructed and not at the end of each row
    tdEl.textContent = (this.rowTotal);
    trEl.appendChild(tdEl);
    console.log('the last column: ' + this.rowTotal);
  };
  storeContainer.push(this); //eddie and shamarke help, it pushes the entire built object into the array storeContainer
}
/////////////////////////// tfoot function /////////////////////////

function totals() {
  var row = document.getElementById('tableFooter');
  var trEl = document.createElement('tr');
  trEl.setAttribute('id', 'totalsRow');
  row.appendChild(trEl);
  for (var j = 0; j < opHours.length; j++){
    let columnTotal = 0; //eddie and shamarke help, this is is the variable that we are adding to in order to display at the end
    if (j <= 0) { //this make the first cell of the totals named Hourly Totals
      var location = document.getElementById('totalsRow');
      var totalThEl = document.createElement('th');
      totalThEl.textContent = 'Hourly Totals';
      location.appendChild(totalThEl);
    }
    for (var i = 0; i < storeContainer.length; i++) {
      let currentStore = storeContainer[i]; //eddie and shamarke help, assigning the variable currentStore = the value of storeContainer at position i, this is locking in
      columnTotal += currentStore.cookiesSold[j]; //eddie and shamarke help, this is adding to the total variable
    }
    var list = document.getElementById('totalsRow');
    var thEl = document.createElement('th');
    thEl.textContent = (columnTotal);
    list.appendChild(thEl);
  }
  return list; //what is this returning
}

/////////////////////////// creating five instances for constructor function /////////////////////////
/////how to turn this into a function that is called and stores these objects in an array. combine the below//////////
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


times(); //the th of the table
totals(); //the hourlytotals bottom row function

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