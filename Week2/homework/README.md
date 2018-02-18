# Examples references
 - https://stackoverflow.com/questions/17650776/add-remove-html-inside-div-using-javascript
 - https://www.sitepoint.com/access-parent-element-javascript-jquery/
 - https://jsfiddle.net/Dunkel85/d4c9d6en/
 - NOTE: Example 3 is a bit hard to understand, but give it your best! :)

# Homework

## Javascript only tasks
 1. Write a Javascript function which will take an array of numbers stored and find the greatest number.
 	- Sample array: [5, 4, 2, 1, 3]
 	- Expected output: 5
 2. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
 	- Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 3. Write a Javascript function which will take an array of numbers stored and sort them from lowest to greatest.
 	- Sample array: [6, 1, 2, 5, 10, 11, -1]
 	- Expected output: [-1, 1, 2, 5, 6, 10, 11]
 4. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
 	- Sample array : [1,2,3,4,5]
 	- Expected output : 2,4
 5. Write a Javascript function which will take a string and return true if string is palindrome. Otherwise return false.
	- Sample string: "anavolimilovana" => reading backwards "anavolimilovana"
	- Expected output: true
 6. Write a JavaScript function to get the number of occurrences of each letter in specified string.
 	- Sample string: "aleksandar"
 	- Expected Output: {a: 3, d:1, e: 1, k: 1, l: 1, n: 1, s: 1, r: 1}
 7. Write a Javascript function that reverse a number
 	- Example x = 32243;
 	- Expected output x = 34223;
 8. Write a JavaScript function that returns a passed string with letters in alphabetical order.
 	- Example string : 'webmaster'
 	- Expected Output : 'abeemrstw'
 9. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
 	- Example string : 'Web Development Tutorial'
 	- Expected Output : 'Development'

## HTML, CSS, Javascript tasks
  1. Create a form with validation. If validation is not satisfied it should appear with their respective messages("Name field must not be empty", "Please type a valid email", etc).Warning Message(lightish red background color) appears in green box below submit button that has fateIn/fadeOut animation. In case all validations are satisfied Success Message should appear telling user he submitted form successfuly. Form contains next fields:
 	- First Name (validation: can't submit empty)
 	- Last Name (validation: can't submit empty)
 	- Email (validation: check if it's a valid email)
	- Phone number (no validation)
	- Message (no validation)
	- NOTE: You must use bootstrap classes for styling a form in addition to writting custom css(if needed). Validation should be manually written(no bootstrap validation).
	- Reference: https://bootstrapious.com/ck_resources/img/contact-form.PNG
	- Tutorial: https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form
  2. Create three div fields:
	- day => Represents day of the month(format: 01, 02, 03, 04,... 31)
	- month => Represents month(format: January, February, March,... December)
	- year => Represents Year (2011, 2012,...)
	Clicking on "Day" div should change day to tomorow(01 => 02, 05 => 06, 10 => 11, 31 => 1 + move a month)
	Clicking on "Month" div should change to next month (January => February, December => January + move a year)
	Clicking on "Year" should add another year (2011 => 2012, ...)
	- NOTE: Watch on day/month transitions so the month/year move accordingly. February also has 28/29 days.
	- HINT: var date = new Date(); 
	- Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  3. Create a quiz with offered answers. All questions should be on the same page but only one is shown at the start. If user answers correctly, answer background should go light green and next question should appear bellow. In case user answer incorrect, background of selected choice should go light red and retry button should appear and process repeats. If users answers correctly, write a congratulations notification.





