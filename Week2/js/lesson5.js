var izbaciIme = (object) => {
    return object.godine;
}

var covjek = {
    ime: "Aleksandar",
    prezime: "Vrhovac",
    godine: 25,
    izbaciIme: () => izbaciIme(covjek)
};

console.log(covjek);
console.log(covjek.ime);
console.log('----------------')

for (var kljuc in covjek) {
    console.log("kljuc: ", kljuc);
    console.log("vrijednost: ", covjek[kljuc]);
}


console.log('-------------')
console.log(izbaciIme(covjek));
console.log(covjek.izbaciIme());

var ljudi = [{
        ime: "Aleksandar",
        prezime: "Vrhovac",
        godine: 25,

    },
    {
        ime: "Slaven",
        prezime: "Vrhovac",
        godine: 30,

    },
    {
        ime: "Ognjen",
        prezime: "Milivojevic",
        godine: 24,

    },
    {
        ime: "Nikola",
        prezime: "Malesevic",
        godine: 28,

    },
];

console.log('----------------')
console.log(ljudi);

var div = document.getElementById("container");
var pTags = document.getElementsByTagName('p');

console.log(pTags);
console.log(pTags[0].className)
div.onclick = () => {
	if(div.className === 'background-plavi test text'){
		div.className = 'background-crveni test text';
	} else {
		div.className = 'background-plavi test text';
	}
}



var element1 = document.getElementById('numberOne');
var element2 = document.getElementById('numberTwo');
var zbir = document.getElementById('zbir');
var proizvod = document.getElementById("proizvod");

element1.addEventListener("keyup", (e) => {
	var el1, el2;
	if(element1.value !== ""){
		el1 = parseInt(element1.value);
	} else {
		el1 = 0;
	}
	if(element2.value !== ""){
		el2 = parseInt(element2.value);
	} else {
		el2 = 0;
	}
	zbir.innerHTML = el1 + el2;
	proizvod.innerHTML = el1 * el2;
});

element2.addEventListener("keyup", (e) => {
	var el1, el2;
	if(element1.value !== ""){
		el1 = parseInt(element1.value);
	} else {
		el1 = 0;
	}
	if(element2.value !== ""){
		el2 = parseInt(element2.value);
	} else {
		el2 = 0;
	}
	zbir.innerHTML = el1 + el2;
	proizvod.innerHTML = el1 * el2;
})
