//Question 1

var outOfStock;

outOfStock = false;

if (outOfStock) {
    console.log("Out of stock");
}
else {
    console.log("in stock");
}

// Question 2

// Create a for loop that counts from 15 to 25. Console log the value of 
// the counter variable inside the loop only if it's equal to 17 or 20.


for (var i = 15; i <= 25; i++) {
    if (i === 17 || i === 20) {
        console.log(i);
    }
}

// Question 3

// Loop through the array below and add an li item to 
// the ul element in the HTML containing the title and rating of each 
// game only if the rating for the game is below 3.5.

// Here i made it so the rating of Null would not show up as under a 3.5 
//rating. If i wanted it included i would just remove:  
//&& games[i].rating !== null

var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];

var listeContainer = document.querySelector("ul");

for (var i =0; i < games.length; i++) {

    var item = games[i];
    var titleRank = games[i].title + " : " + games[i].rating;

    if (games[i].rating < 3.5 && games[i].rating !== null){
    console.log(titleRank);

    listeContainer.innerHTML = listeContainer.innerHTML + "<li>" + titleRank + "</li>";
    }

}

// Question 4

// Create a function called whatIDontLike that accepts one argument. 
// Choose a good name for the argument.

// Inside the function, check if the argument has a string value. 
// If it doesn't log the message "Please send in a string".

// If the argument is a string value, log the message 
// "I don't like " together with the argument.

// Call the function and pass in a value of your choice.

function whatIDontLike(animal){
    var typeOfThing = typeof animal;

    if (typeOfThing !== "string"){
        return "Please send in a string";
    }
    else {
        return "I dont like" + " " + animal;
    }
}

var result = whatIDontLike("cats");

console.log(result);


// Question 5

// Create a function that accepts two arguments.

// Inside the function, try to convert the arguments to numbers.

// If either of the arguments cannot be converted to a number, 
// return the value: "Invalid argument(s)".

// If both arguments are number values or can be converted to number values, 
// subtract the second argument from the first and 
// return the result from the function.

// Call the function, pass in to two values and assign the return
// value to be the innerHTML value of the element with the id subtraction.


function subtr(number1, number2) {
    var convert1 = parseFloat(number1);
    var convert2 = parseFloat(number2);

    if (isNaN(convert1) || isNaN(convert2)) {
         return "Invalid arguments"
    }
    return convert1 - convert2;
}

var id = document.querySelector ("#subtraction");

var sum = subtr("56", 8)

id.innerHTML = sum;


// Question 6

// Select the button with the class page.

// When the button is clicked do the following:

// Change the title of the page (the value of the title element in the head) 
// to "Updated title".

// Change the background colour of the whole page to "yellow".
// Change the color of the h1 element to "green".
// Change the h1 element's font to "impact".
// Change the value of the h1 element to be a link.
// Remove the list style and padding from the ul element.

var buttonClick = document.querySelector (".page");
var body = document.querySelector ("body");
var heading = document.querySelector ("h1");
var list = document.querySelector("ul");

function change() {
    document.title = "Updated title";
    body.style.backgroundColor = "yellow";
    heading.style.fontFamily = "impact";
    heading.innerHTML = ("<a href = # >" + "Programming Foundations Course Assignement" + "</a>")
    heading.style.color = "green";
    list.style.padding = " ";
    body.style.removeProperty = ('padding');
}

// ???????????????
buttonClick.onclick = change;








// Question 7
// Select the button with the class price.

// When the button is clicked, loop through the array below, 
// add all the prices and assign the total to be the innerHTML 
// value of the element with the id total.

var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];