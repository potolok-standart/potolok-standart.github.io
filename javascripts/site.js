"use strict";

//count ceilingArea

var ceilingArea = 10;

function minusCeilingArea() {
	ceilingArea--;
	document.getElementById('ceilingArea').innerHTML = ceilingArea;
	calculatePrice();

	if (ceilingArea < 1) {
		ceilingArea = 1;
		document.getElementById('ceilingArea').innerHTML = ceilingArea;
		calculatePrice();
	}
}	

function plusCeilingArea() {
	ceilingArea++;
	document.getElementById('ceilingArea').innerHTML = ceilingArea;
	calculatePrice();
}

//count lights

var lightCount = 1;

function minusLight() {
	lightCount--;
	document.getElementById('lightCount').innerHTML = lightCount;
	calculatePrice();

	if (lightCount < 1) {
		lightCount = 0;
		document.getElementById('lightCount').innerHTML = lightCount;
		calculatePrice();
	}
}	

function plusLight() {
	lightCount++;
	document.getElementById('lightCount').innerHTML = lightCount;
	calculatePrice();
}

function calculatePrice() {
	let currentSelect = document.getElementById('brandSelect').selectedIndex;
	let brandPriceValue = document.getElementById('brandSelect').options[currentSelect].value;

	if (ceilingArea > 20) {
		brandPriceValue = brandPriceValue - 50;
	}

	let	result = (ceilingArea * brandPriceValue) + (lightCount * 250);

    document.getElementById("result").innerHTML = `${ result } рублей`;

	    if (result < 4000) {
			document.getElementById("result").innerHTML = "4000 рублей";    	
		};
}
