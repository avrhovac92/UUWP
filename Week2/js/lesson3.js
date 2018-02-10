var fruits = ["banana", "orange", "apple", "grape"];

console.log(fruits);
console.log(fruits[1]);
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

for(var i = 0; i < fruits.length; i++){
	console.log(fruits[i]);
}
console.log('----------------------');

var numbers = [-1, 5, 3, 2, 10, 60, -15];

for(var i = numbers.length - 1; i >= 0; i--){
	if(numbers[i] > -5 && numbers[i] < 5){
		console.log(numbers[i]);
	}
}

console.log('--------------');
var word = "alalalalalafbndofbin";
var counter = 0;

for (var i = 0; i < word.length; i++){
	if(word[i] === 'a'){
		counter++;
	}
}

console.log("String '" + word + "' has " + counter + " letters 'a'");

/*
Data type: array
*/