console.log("Connected")

// Get 6 square
var square = document.querySelectorAll(".square");

// Get string from html to edit
var colorDisplay = document.getElementById("colorDisplay");

// Get string from html to annouce
var message = document.getElementById("message");

// Get the h1 
var h1 = document.querySelector("h1");

// Get the reset button
var reset = document.querySelector("#reset");

// Get 2 button
var easyBut = document.querySelector("#easyBut");
var hardBut = document.getElementById("hardBut");
var but = document.querySelectorAll("button");


// Generate color
var numSquare = square.length;
var colors = []
var chosenColor = 0; 
gameGenerate()


colorDisplay.textContent = chosenColor.toUpperCase();

// Style easy-hard button
// hardBut in default 
hardBut.classList.add("selected");
easyBut.addEventListener("click", function() {
	numSquare = 3;
	easyBut.classList.add("selected");
	hardBut.classList.remove("selected");

	// Hide 3 below square
	for (var i = 3; i < 6; i++) {
		square[i].style.display = "none";
	}
	gameGenerate()
});
hardBut.addEventListener("click", function() {
	numSquare = 6;
	hardBut.classList.add("selected");
	easyBut.classList.remove("selected");

	// show 3 below square
	for (var i = 3; i < 6; i++) {
		square[i].style.display = "block";
	}
	gameGenerate()
});

// reset Button
reset.addEventListener("click", function() {
	// Generate new square colors
	gameGenerate();
	h1.style.backgroundColor = "steelblue";
	message.textContent = "";
	reset.textContent = "NEW COLOR??"
});

// Add functionalities to the square
for (var i = 0; i < numSquare; i++) {
	// Chang colors
	square[i].style.backgroundColor = colors[i];

	// add todos when click
	square[i].addEventListener("click" , 
		function() {
			if(this.style.backgroundColor === chosenColor) {
				message.textContent = "Correct!";
				h1.style.backgroundColor = chosenColor;

				// Fill everything with the chosenColor
				for(var i = 0; i < numSquare; i++) {
					square[i].style.backgroundColor = chosenColor;
				}
			
				reset.textContent = "PLAY AGAIN?"
			} else {
				message.textContent = "TRY AGAIN!";

				// Turn the clicked square to the same color of the background
				this.style.backgroundColor = "#232323";	
			}
		}
		);
}

function gameGenerate() {
	// Fill array with new colors
	squareColorGenerate(colors);

	// Chose random one value in colors
	chosenColor = colors[Math.floor(Math.random() * numSquare)]; 

	// Fill new colors to squares
	displayColor(colors);
}

function displayColor(color) {
	for(var i = 0; i < numSquare; i++) {
		square[i].style.backgroundColor = color[i];
	}
}

function squareColorGenerate(colorsArr) {
	for(var i = 0; i < numSquare; i++) {
		colorsArr[i] = randowColorGenerate();
	}
}

function randowColorGenerate() {
	var r = Math.floor(Math.random() * 255.9)
	var g = Math.floor(Math.random() * 255.9)
	var b = Math.floor(Math.random() * 255.9)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}