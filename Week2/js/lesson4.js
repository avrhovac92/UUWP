var a = 4;
var b = 3;

function sum(el1, el2){
	return el1 + el2;
}

var value = sum(a, b);
console.log(value);


console.log('----------------');
var numbers = [5, 6, -10, 11, 12, -15];

function sumList(list){
	var zbir = 0;
	for(var i = 0; i < list.length; i++){
		zbir = zbir + list[i];
	}
	return zbir;
}

function productList(list){
	var product = 1;
	for(var i = 0; i < list.length; i++){
		product = product * list[i];
	}
	console.log(product)
	// return product;
}

function findNumber(list, num){
	for(var i = 0; i < list.length; i++){
		if(list[i] === num){
			return i + 1;
		}
	}
}

//This adds items to the list
numbers.push(5);
//This removes items from the list
numbers.splice(0, 2);
console.log(numbers)

console.log(sumList(numbers));
productList(numbers);
console.log(findNumber(numbers, -10))




