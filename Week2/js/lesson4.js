var a = 4;
var b = 3;

function sum(el1, el2){
	return el1 + el2;
}

var value = sum(a, b);
console.log(value);


console.log('----------------')
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

// function napraviListu(list) {
const napraviListu = (list) => {
	var result = [];
	var items = list.split(',');
	//foreach uzima svaki element iz liste i obradjuje ga u zadatoj funkciji
	//(item, index) => {}
	items.forEach((item, index) => {
		result.push(parseInt(item.trim()));
	})
	return result;
}

var list1 = prompt("Napisite prvu listu sa brojevima odvojenim zapetom");
var list2 = prompt("Napisite drugu listu sa brojevima odvojenim zapetom");

list1 = napraviListu(list1);
list2 = napraviListu(list2);

var presjek = [];
list1.forEach(item1 => {
	list2.forEach(item2 => {
		if(item1 === item2){
			presjek.push(item1);
		}
	})
})

 
console.log('------------------------')
console.log("Prva lista: ", list1);
console.log("Druga lista: ", list2);
console.log("Presjek: ", presjek);

console.log('------------------------');
var unija = list1.concat(list2);
var razlika = [];
unija.forEach((item, index) => {
	var uslov = true;
	presjek.forEach((item1, index1) => {
		if(item === item1){
			uslov = false;
		}
	})
	if(uslov){
		razlika.push(item);
	}
});

console.log("Razlika: ", razlika);







