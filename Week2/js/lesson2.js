/*
Data type: boolean
*/

var age = prompt("Koliko imate godina?");
var height = prompt("Koliko ste visoki?");
var conditionOne = age < 16;
var conditionTwo = parseInt(age) === 16;

if(conditionOne){
	console.log('Vi imate manje godina od 16.');
} else if(conditionTwo){
	console.log("Vi imate 16 godina.");
} else {
	console.log("Vi imate vise od 16 godina.");
}

if(age > 18 && height < 150){
	console.log("Vi ste niski u odnosu na godine.");
} else if (age < 18 && height > 180){
	console.log("Vi ste visoki u odnosu na godine.");
} else {
	console.log("Vi ste normalni.");
}

if(height < 130 || height > 200){
	console.log("Vi niste prosjek.");
}


/*
 if condition example:
 if(condition){
	operations if true
 } else {
	operations if false
 }
*/