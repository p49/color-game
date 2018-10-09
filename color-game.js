//thirty-fourth
var numSquares = 6;

// first
var colors = generateRandomColors(numSquares);
// eighteenth -- creating var that holds function call for generating x number of colors in array

/* seventeenth--erasing array so we dont keep using same 6 colors
[
	"rgb(255, 0, 0)",   //red
	"rgb(255, 255, 0)", //yellow
	"rgb(0, 255, 0)",   //green
	"rgb(0, 255, 255)", //cyan
	"rgb(0, 0, 255)",   //blue
	"rgb(255, 0, 255)"  //magenta
]
*/

//second
var squares = document.querySelectorAll(".square");

//fourth
//var pickedColor = colors[3];

//fifteenth
var pickedColor = pickColor();

//fifth
var colorDisplay = document.getElementById("colorDisplay");

//eleventh
var messageDisplay = document.querySelector("#message");

//twenty-fourth
var h1 = document.querySelector("h1");

//twenty-fifth
var resetButton = document.getElementById("reset");


//thirtieth
var easyBtn = document.querySelector("#easyBtn");

//thirty-first
var hardBtn = document.querySelector("#hardBtn");


//Final refactor
//Create a function that runs when the page loads


//thirty-second (for easy mode)
easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor
	for(i = 0; i < squares.length; i++) {
		if(colors[i]) {  // saying if there is a next color, give it the color at that index
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
});

//thirty-third (for reg mode)
hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor
	for(i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});


//thirty-fifth --REFACTOR FOR BUTTONS
//change from id to class .mode -> var modeButtons = doc.querySel -> loop through buttons 
/*
for(i = 0; i < modeButtons.length; i++) {
	modeButtons.addEventListener("click", function() {
		//hard code to turn off selected class on button
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		//add selected class to clicked button
		this.classList.add("selected");
		if(this.textContent === "easy") {
			numSquares = 3;
		}
		else {
			numSquares = 6;
		}
		
		//OR -- if this.textContent is equal to easy THEN numsquares is equal to 3, else its 6
		this.textContent === "easy" ? numSquares = 3: numSquares = 6;
		reset();
		
		//figure out how many squares 3 or 6
		//pick new colors
		//pick a new pickedColor
		//update page to reflect changes
		//WE WILL CREATE A NEW FUNCTION TO DO ALL THIS--SINCE WE ARE DOING THIS IN MULTIPLE PLACES
	});
}

functon reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	
	messageDisplay.textContent = "";
	for(i = 0; i < squares.length; i++) {
		//do this so that only 3 squares are DISPLAYED on easy mode
		if(colors[i]) {
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

//Can also acll reset() in resetButton code
*/

//twenty-sixth
resetButton.addEventListener("click", function() {
	//twenty-seventh
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to picked color
	colorDisplay.textContent = pickedColor
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	//twenty-ninth
	h1.style.background = "steelblue";
});

//sixth
colorDisplay.textContent = pickedColor;

//third
for(i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	
	//seventh
	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		
		//eighth
		//grab color of clicked square
		//alert(this.style.background --- changed to a variable)
		var clickedColor = this.style.backgroundColor;
		
		//ninth
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			//twelfth
			messageDisplay.textContent = "Correct!";
			//twenty-eighth
			resetButton.textContent = "Play Again?"
			//fourteenth
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}
		else {
			//tenth
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

//thirteenth --could be written in previous statement also
function changeColors(color) {
	//loop through all squares
	for(i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}	
}

//sixteenth
function pickColor() {
	//this picks a random # between 0 - 1, but doesnt include 1, floor chops off decimal point
	// since the length is 6, but index is 5 math.random will only go up to 6, but won't include 6
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//nineteenth -- creating generateRandomColors function
function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for(i = 0; i < num; i++) {
		//get random color and push into arr
		//twenty-second
		arr.push(randomColor());
	}
	//return that array
	return arr;
}
	
//twentieth -- separate function that generates random color
function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	
//twenty-first -- synthesizing info into string
   return "rgb(" + r + ", "	+ g + ", " + b + ")";
	
//twenty-third --changed spacing with quotations so clicked would match with picked
}
	