const dropdown = document.getElementById("dropdown");
const taskLabel = document.getElementById("taskLabel");
const button = document.getElementById("button");
const solutionBox = document.getElementById("solutionBox");
const input = document.getElementById("input");

const findTask = () => tasks.find(task => dropdown.value === task.name);
const formatList = (list) => {
    let result = [];
    let items = list.split(',');
    items.forEach((item, index) => {
        result.push(parseInt(item.trim()));
    })
    return result;
};

//Solution to tasks start here

const getGreatest = () => {
    const list = formatList(input.value);
    let theGreatest = list[0];
    for (let i = 1; i < list.length; i++) {
        if (theGreatest < list[i]) {
            theGreatest = list[i]
        }
    }
    return theGreatest;
};

const getPrime = () => {
    const number = parseInt(input.value);
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return 'Number is not prime';
        }
    }
    return 'Number is prime';
};

const sortList = () => {
    const list = formatList(input.value);
    return list.sort((a, b) => a > b ? 1 : -1);
};

const getSeconds = () => {
    const sortedList = sortList();
    return `${sortedList[1]}, ${sortedList[sortedList.length - 2]}`;
}

const checkPalindrome = () => {
    const str = input.value;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return 'String is not a palindrome';
        }
    }
    return 'String is a palindrome';
}

const sortLettersObject = () => {
    const str = input.value;
    let result = {};
    for (let i = 0; i < str.length; i++) {
        if (result[str[i]]) {
            result[str[i]] += 1;
        } else {
            result[str[i]] = 1;
        }
    }
    return JSON.stringify(result);
}

const reverseNumber = () => {
    const str = input.value;
    const result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

const longestWord = () => {
	const str = input.value;
	const words = str.split(" ");
	let longest = words[0];
	let counter = 0;
	for(let i = 1; i < words.length; i++){
		if(words[i].length > longest.length){
			longest = words[i]
		}
	}
	return longest;
}

//Solution to tasks end here

const tasks = [{
        name: "get Greatest",
        function: getGreatest,
        text: "Write a Javascript function which will take an array of numbers stored and find the greatest number."
    },
    {
        name: "get Prime",
        function: getPrime,
        text: "Write a JavaScript function that accepts a number as a parameter and check the number is prime or not."
    },
    {
        name: "sort List",
        function: sortList,
        text: "Write a Javascript function which will take an array of numbers stored and sort them from lowest to greatest."
    },
    {
        name: "Second lowest and greatest",
        function: getSeconds,
        text: "Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively."
    },
    {
        name: "Palindrome",
        function: checkPalindrome,
        text: "Write a Javascript function which will take a string and return true if string is palindrome. Otherwise return false."
    },
    {
        name: "Object of letter occurences",
        function: sortLettersObject,
        text: "Write a JavaScript function to get the number of occurrences of each letter in specified string."
    },
    {
        name: "Reverse a number",
        function: reverseNumber,
        text: "Write a Javascript function that reverse a number"
    },
    {
        name: "Longest word",
        function: longestWord,
        text: "Write a JavaScript function that accepts a string as a parameter and find the longest word within the string."
    }
];

taskLabel.innerHTML = tasks[0].text;

dropdown.onchange = e => {
    const task = findTask();
    taskLabel.innerHTML = task.text;
}


button.onclick = e => {
    const task = findTask();
    const result = task.function();
    solutionBox.innerHTML = result;
}