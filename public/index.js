'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

function numberDays(locationNumber) {
	var pickupTime = new Date(rentals[locationNumber].pickupDate);
	var returnTime = new Date(rentals[locationNumber].returnDate);
	var days = (returnTime - pickupTime)/(1000*60*60*24); //cause it's in ms
	
	return days+1;
}

function priceLocation(locationNumber) {
	var priceLoc = 0;
	if(rentals[locationNumber].carId == cars[locationNumber].id){
		return priceLoc = cars[0].pricePerDay * numberDays(locationNumber) + cars[0].pricePerKm * rentals[locationNumber].distance;
	}
	
	else if(rentals[locationNumber].carId ==cars[locationNumber].id) {
		return priceLoc = cars[1].pricePerDay * numberDays(locationNumber) + cars[1].pricePerKm * rentals[locationNumber].distance;
	}
	
	else if(rentals[locationNumber].carId == cars[locationNumber].id) {
		return priceLoc = cars[2].pricePerDay * numberDays(locationNumber) + cars[2].pricePerKm * rentals[locationNumber].distance;
	}
}

function priceReduction(locationNumber) {
	if(numberDays(locationNumber) > 1) {
		cars[locationNumber].pricePerDay = 0.9 * cars[locationNumber].pricePerDay;
	}
	
	else if(numberDays(locationNumber) > 4) {
		cars[locationNumber].pricePerDay = 0.7 * cars[locationNumber].pricePerDay;
	}
	
	else if(numberDays(locationNumber) > 10) {
		cars[locationNumber].pricePerDay = 0.5 * cars[locationNumber].pricePerDay;
	}
}

function replacePrice() {
	for(var locationNumber = 0; locationNumber < rentals.length; locationNumber++) {
		priceReduction(locationNumber);
		deductible(locationNumber);
		rentals[locationNumber].price = priceLocation(locationNumber);
	}
}

function Commission(locationNumber) {
	var commission = rentals[locationNumber].price * 0.3;
	rentals[locationNumber].commission.insurance = commission/2;
	rentals[locationNumber].commission.assistance = numberDays(locationNumber)*1;
	rentals[locationNumber].commission.drivy = commission - (rentals[locationNumber].commission.insurance + rentals[locationNumber].commission.assistance);
}

function replaceCommission() {
	for(var locationNumber = 0; locationNumber < rentals.length; locationNumber++) {
		Commission(locationNumber);
	}
}

function deductible(locationNumber) {
	if(rentals[locationNumber].deductibleReduction == true) {
		rentals[locationNumber].price = rentals[locationNumber].price + numberDays(locationNumber)*4;
	}
}


function ActorsPayment(locationNumber){
  var actor = findActors(locationNumber);

  var driver = findActor(actor,'driver');
  driver.amount = locationNumber.price;

  var owner = findActor(actor,"owner");
  owner.amount = locationNumber.price - locationNumber.commission.insurance- locationNumber.commission.assistance-locationNumber.commission.drivy ;

  var insurance = findActor(actor,"insurance");
  insurance.amount = locationNumber.commission.insurance;

  var assistance = findActor(actor,"assistance");
  assistance.amount = locationNumber.commission.assistance;

  var drivy = findActor(actor,"drivy");
  drivy.amount = locationNumber.commission.drivy;
}

function findActor(actor , actorName){
  for(var i = 0; i <actor.payment.length ;++i){
    if(actor.payment[i].who == actorName){
      return actor.payment[i];
    }
  }
  return;
}

function findActors(locationNumber){

  for(var i =0; i <actors.length; ++i){
    if(actors[i].rentalId == locationNumber.id)
      return actors[i];
  }
  return;
}

function addActorsPayments(){
  for(var i = 0; i < rentals.length ;++i){
    ActorsPayment(rentals[i]);
  }
}

function applyModifications(){
  
  for(var i =0 ; i < rentalModifications.length; ++i){
    applyModification(rentalModifications[i]);
  }
}

function applyModification(rentalModification){
  var rental = findRental(rentalModification.rentalId);
  for(var content in rentalModification){
    if( content != "rentalId"){
      rental[content] = rentalModification[content];
    }
  }
}

function findRental(rentalId){

  for(var i =0; i < rentals.length ; ++i){
    if(rentals[i].id == rentalId)
      return rentals[i];
  }
  return;
}


applyModifications();

replacePrice();
replaceCommission();
addActorsPayments();

applyModifications()
console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
