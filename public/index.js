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

function nbrDay(locNumber)
{
	
	var BeginTime =  new Date(rentals[i].pickupDate);
	var EndTime = new Date(rentals[i].returnDate);
	var day=((EndTime-BeginTime)/(1000*60*60*24))+1;//cause it's in Ms
  
	return day;
}

function CalculPrix()
{
for(var i=0; i< rentals.length;i++){

	if(rentals[i].carId==cars[i].id){
		//console.log(rentals[i].carId);	//to get the price for eatch cars
		var priceKm = rentals[i].distance*cars[i].pricePerKm;		
		var BeginTime =  new Date(rentals[i].pickupDate);
		var EndTime = new Date(rentals[i].returnDate);
		var day=((EndTime-BeginTime)/(1000*60*60*24))+1;//cause it's in Ms

		if (day => 1){
		var dayPrice=(day*cars[i].pricePerDay)*0.90;	
		}
		else if (day > 4)
		{
		var dayPrice=(day*cars[i].pricePerDay)*0.70;
		}
		else if(day > 10)
		{
		var dayPrice=(day*cars[i].pricePerDay)*0.50;
		}
		else //if we don't match the day to avoid crash
		{
		var dayPrice=day*cars[i].pricePerDay;
		
		}
		var prices= dayPrice+priceKm;
		
		}
	
	return prices;
	}
	rentals.price[i]=prices;
}

function Commission(prix)
{
	var com= prix*0.7;
	return com;
}
function insurance(locNumber,com)
{
	var insurance = com/2;
	rentals[locNumber].commission.insurance=insurance;
	return insurance;
}

function roadside(locNumber,day)
{
	var road= day*1;
	rentals[locNumber].commission.assistance=road;
	return road;
	
}

function drivy(locNumber,com,insurance,road)
{
	var drivy =com-insurance-road;
	rentals[locNumber].commision.drivy=drivy;
	return drivy;
	
}
function replace()
{
	for(var locNumber=0;locNumber<rentals.lenght;locNumber++)
	{
		insurance(locNumber,com);
		roadside(locNumber,nbrDay);
		drivy(locNumber,com,insurance,rod);
	}
	
}

CalculPrix();
console.log(CalculPrix());
Commission(CalculPrix());



console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
