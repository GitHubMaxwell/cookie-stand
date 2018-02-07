'use strict';

/////// global arrays of times, ul IDs, and h2 IDs////////

var opHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Store Total'];
var storeContainer = []; //eddie and shamarke help, this is for the stretch goal hourly totals row
var userForm = document.getElementById('userForm');
var allTotals = [];

/////////////////////////// thead function (this builds the top row of times) /////////////////////////
function times() {
  var newRow = document.getElementById('tableHead');
  var trEl = document.createElement('tr');
  trEl.setAttribute('id', 'timesRow');
  newRow.appendChild(trEl);
  for (var j = 0; j < opHours.length; j++){
    if (j === 0) { //if this is the first column make a blank cell
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
//a lot of help from Josh

function userNewStore() {
  event.preventDefault();

  if (!event.target.location.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.avgCust.value) {
    return alert('Fields cannot be empty!');
  }
  var userLocation = event.target.location.value;
  var userMinCust = parseInt(event.target.minCust.value);
  var userMaxCust = parseInt(event.target.maxCust.value);
  var userAvgCust = parseFloat(event.target.avgCust.value);
  var userStore = new Store(userLocation, userMinCust, userMaxCust, userAvgCust, [], []);
  allTotals = []; // so the bottom right cell doesnt accumulate ontop of the revious one. works
  // storeContainer.push(userStore);
  // storeContainer[storeContainer.length-1].render();//delete the previous
  userStore.render();
  //Store.reset();//call the function that deletes the row / doesnt work
  totals();//re-run the footer hourly totals row. works
  //i have to clear the footer make the arry equal [] before i call the totals() again


  //erase everything at the end of the function
  event.target.location.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgCust.value = null;
}

/////////////////////////// tbody constructor function for stores /////////////////////////
function Store(location, minCust, maxCust, averageSale, randCust, cookiesSold) {

  this.location = location;
  this.minCustomer = minCust;
  this.maxCustomer = maxCust;
  this.avgSale = averageSale;
  this.randCust = randCust;
  this.cookiesSold = cookiesSold;
  this.rowTotal = 0; //each time the Store is called it sets this back to zero for each row to use

  this.hourlyTotal = function() {
    for (var i = 0; i < opHours.length - 1; i++) {
      this.randCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
      var temp = Math.round(this.avgSale * this.randCust[i]);
      this.rowTotal += temp;
      this.cookiesSold.push(temp);
    }
  },

  this.reset = function() {
    var row = document.getElementById('tableFooter');
    var trEl = document.createElement('');
    row.appendChild(trEl);
  };

  this.render = function() { //the totals column totalCounter can be added to from the render function but at the end this needs to call another functin to add that column to the end of the rows
    var row = document.getElementById('tableBody');
    var trEl = document.createElement('tr');
    trEl.setAttribute('id', this.location + 'Row');
    row.appendChild(trEl);
    this.hourlyTotal();
    for (var j = 0; j < opHours.length -1 ; j++){
      //this is adding the counted up store total to the end of the array. when i remove this it deosnt display the last column but everything still works. im wondering if i can combine this with the code at the bottom of this function that i feel does the same thing
      if (j === 0) {
        var location = document.getElementById(this.location + 'Row');
        var thEl = document.createElement('th');
        thEl.textContent = this.location;
        location.appendChild(thEl);
      }
      //this writes it at the end of all the rows being constructed and not at the end of each row
      //this doesnt seem to make a difference when i cross it out and i dont want to remove in order to figure out why
      // if (j === opHours.length - 1) {
      //   tdEl = document.createElement('td');
      //   tdEl.textContent = (this.rowTotal);
      //   trEl.appendChild(tdEl);
      // }
      var list = document.getElementById(this.location + 'Row');
      var tdEl = document.createElement('td');
      tdEl.textContent = (this.cookiesSold[j]);
      list.appendChild(tdEl);
    }
    //this writes the total of each store at the end of the row
    tdEl = document.createElement('td');
    tdEl.textContent = (this.rowTotal);
    trEl.appendChild(tdEl);
  };
  storeContainer.push(this); //eddie and shamarke help, it pushes the entire built object into the array storeContainer
  console.log(storeContainer);
}

////////////////////////////////// tfoot function (all stores hourly totals combined) //////////////////////////////////

function totals() {
  var row = document.getElementById('tableFooter');
  var trEl = document.createElement('tr');
  trEl.setAttribute('id', 'totalsRow');
  row.appendChild(trEl);
  var tableTotal = 0;
  console.log('the footer row is rendering');
  for (var j = 0; j < opHours.length - 1; j++){
    let columnTotal = 0; //eddie and sharmarke help, this is is the variable that we are adding to in order to display at the end
    if (j <= 0) { //this makes the first cell of the totals row named "Hourly Totals"
      var location = document.getElementById('totalsRow');
      var totalThEl = document.createElement('th');
      totalThEl.textContent = 'Hourly Totals';
      location.appendChild(totalThEl);
    }
    for (var i = 0; i < storeContainer.length; i++) {
      let currentStore = storeContainer[i]; //eddie and sharmarke help, assigning the variable currentStore = the value of storeContainer at position i, this is locking in
      columnTotal += currentStore.cookiesSold[j]; //eddie and sharmarke help, this is adding to the total variable
    }
    //this is getting the all totals cell
    allTotals.push(columnTotal);
    var list = document.getElementById('totalsRow');
    var thEl = document.createElement('th');
    thEl.textContent = (columnTotal);
    list.appendChild(thEl);
    //console.log('this is the allTotal: ' + allTotal);
  }
  for (var k = 0; k < allTotals.length; k++) {
    tableTotal += allTotals[k];
  }
  thEl = document.createElement('th');
  thEl.textContent = (tableTotal);
  list.appendChild(thEl);
  return list; //eddie sharmarke help. what is this returning to/whats using it outside the function?
  //console.log('the footer row is rendering'); says this is unreachable code which might indicate the the code block above isnt working either
}

/////////////////////////// creating five instances for constructor function /////////////////////////

/////how to turn this into a function that is called and stores these objects in an array. combine the below//////////
var firstAndPike = new Store('1st and Pike',23,65,6.3,[],[]);
var seatacAirport = new Store('SeaTac Airport',3,24,1.2,[],[]);
var seattleCenter = new Store('Seattle Center',11,38,3.7,[],[]);
var capitolHill = new Store('Capitol Hill',20,38,2.3,[],[]);
var alki = new Store('Alki',2,16,4.6,[],[]);

/////////////////////////// calling the instances/functions to display on the page /////////////////////////

firstAndPike.render();
seatacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();

totals();
times(); //the th of the table
//totals(); //the hourlytotals bottom row function
userForm.addEventListener('submit', userNewStore); //event listener for submit button