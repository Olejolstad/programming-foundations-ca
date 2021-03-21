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


for (var i = 15; i <= 25; i++) {
    if (i === 17 || i === 20) {
        console.log(i);
    }
}

// Question 3

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

function subtr(number1, number2) {
    var convert1 = parseFloat(number1);
    var convert2 = parseFloat(number2);

    if (isNaN(convert1) || isNaN(convert2)) {
         return "Invalid arguments"
    }
    return convert1 - convert2;
}

var id = document.querySelector ("#subtraction");

var sum = subtr("56", 8);

id.innerHTML = sum;


// Question 6

var buttonClick = document.querySelector (".page");
var body = document.querySelector ("body");
var heading = document.querySelector ("h1");
var list = document.querySelector("ul");

function change() {
    document.title = "Updated title";			// Change the title of the page
    body.style.backgroundColor = "yellow";		// Change the background colour of the whole page to "yellow".
    heading.style.fontFamily = "impact"; 		// Change the h1 element's font to "impact".
    heading.innerHTML = ("<a href = # >" + "Programming Foundations Course Assignement" + "</a>"); // Change the value of the h1 element to be a link.
    heading.style.color = "green"; 				// Change the color of the h1 element to "green".

    // Decided to comment out this code. It turns the link green and removes the line. it will still act as a link, but the text will stay green as the asignement asked:
	//heading.childNodes[0].style.color = "green";
    //heading.childNodes[0].style.textDecoration = "none"; 

	list.style.padding = "0px"; 		// Remove the list style and padding from the ul element.
    list.style.listStyleType = "none";

}

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
	}
];


var buttonAnswer = document.querySelector (".price");
var finalAnswer = document.querySelector ("#total");

function answer() {
	var totalPrice = 0;

	for (var i = 0; i < toys.length; i++){

		var thing = toys[i];
   	 	var toyPrice = toys[i].price;
		toyPrice = parseFloat(toyPrice);
		

		if (!isNaN(toyPrice)){
			totalPrice += toyPrice;

		}
	}
	console.log(totalPrice)
	finalAnswer.innerHTML = totalPrice;

}

buttonAnswer.onclick = answer;