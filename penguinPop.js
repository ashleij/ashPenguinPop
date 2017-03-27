var readline = require('readline');

var prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var playersName;
var penguinsName;
var penguinsGender;
var penguinsType;
var penguinPebbles = 0;

var usersPenguin = {
	name: "undefined",
	gender: "undefined",
	type: "undefined",
};

var heOrShe = function(x) {
	if (x == "female") {
		return "She";
	} else if (x == "male") {
		return "He";
	}
};

var doMathForPebbles = function() {
    var a = Math.floor(Math.random() * 10) + 1;
    var b = Math.floor(Math.random() * 10) + 1;
    var op = ["*", "+", "-"][Math.floor(Math.random()*4)];
    console.log("How much is " + a + " " + op + " " + b + "?");
    prompt.question("", (inputAnswer) => {
    	if (inputAnswer == eval( a + op + b)) {
			console.log("Correct!");
			penguinPebbles +=5;
			menuOptions();
		} else {
			console.log("Incorrect!");
			penguinPebbles -=5;
			menuOptions();
		}
	});
};

var getPenguinGender = function() {
	prompt.question("What's your penguins gender?: ", (inputPenguinsGender) => {
		inputPenguinsGenderLC = inputPenguinsGender.toLowerCase();
		if (inputPenguinsGenderLC == "male" || inputPenguinsGenderLC == "female") {
			penguinsGender = inputPenguinsGender;
			getPenguinType();
		} else {
			console.log("Please use the words 'male' or 'female'.");
			getPenguinGender();
		}
	});
};

var getPenguinType = function() {
	prompt.question("Is your penguin an emperor, gentoo, or rockhopper?: ", (inputPenguinsType) => {
		if (inputPenguinsType == "emperor") {
			penguinsType = "emperor";
			populatePenguinObject();
		} else if (inputPenguinsType == "gentoo") {
			penguinsType = "gentoo";
			populatePenguinObject();
		} else if (inputPenguinsType == "rockhopper") {
			penguinsType = "rockhopper";
			populatePenguinObject();
		} else {
			console.log("Please enter a valid type.");
			getPenguinType();
		}		
 	});
};

var populatePenguinObject = function() {
	usersPenguin.name = penguinsName;
	usersPenguin.gender = penguinsGender;
	usersPenguin.type = penguinsType;
	console.log("*******************************************");
	console.log("Your penguin: " + usersPenguin.name + " the " + usersPenguin.gender + " " + usersPenguin.type + " penguin!");
	menuOptions();
};

var menuOptions = function() {
	console.log("You have " + penguinPebbles + " penguin pebbles, " + playersName + "!");
	console.log("************* M A I N M E N U *************");
	console.log("1. Do math for penguin pebbles!");
	console.log("2. Make " + usersPenguin.name + " do a trick! (20 pts)");
	console.log("3. Make " + usersPenguin.name + " do an even cooler trick! (35 pts)");
	console.log("4. Make " + usersPenguin.name + " do the most awesome trick! (50 pts)");
	console.log("5. Exit");
	console.log("*******************************************");
	menuChoose();
};

var menuChoose = function() {
	prompt.question('What would you like to do today, ?', (menuChoice) => {
        if (menuChoice == "1") {
      		doMathForPebbles();
        } else if (menuChoice == "2") {
        	doTrick();
        } else if (menuChoice == "3") {
        	doCoolerTrick();
        } else if (menuChoice == "4") {
       		doAwesomeTrick();
        } else if (menuChoice == "5") {
       		console.log("Goodbye, " + playersName + "! " + usersPenguin.name + " will see you again soon, right? :)");
       		prompt.close();
        } else {
        	console.log("Please choose a valid option!");
            menuOptions();
        }
    });    
};

var doTrick = function() {
	if (penguinPebbles >= 20) {
		prompt.question("Are you sure you want to spend 20 penguin pebbles?", (spend20) => {
			spend20LC = spend20.toLowerCase();
			if (spend20LC == "yes") {
				penguinPebbles-=20;
				console.log(usersPenguin.name + " orders a pizza! Thanks, " + playersName + "!");
				menuOptions();
			} else if (spend20LC == "no") {
				console.log("No pebbles spent. Returning to main menu.");
				menuOptions();
			} else {
				console.log("Please use 'yes' or 'no'.");
				doTrick();
			}
		});
	} else {
		console.log("You need 20 penguin points first!");
		menuOptions();
	}
};

var doCoolerTrick = function() {
	if (penguinPebbles >= 35) {
		prompt.question("Are you sure you want to spend 35 penguin pebbles?", (spend35) => {
			spend35LC = spend35.toLowerCase();
			if (spend35LC == "yes") {
				penguinPebbles-=35;
				console.log(usersPenguin.name + " orders a pizza and breadsticks! Thanks, " + playersName + "!");
				menuOptions();
			} else if (spend35LC == "no") {
				console.log("No pebbles spent. Returning to main menu.");
				menuOptions();
			} else {
				console.log("Please use 'yes' or 'no'.");
				doCoolerTrick();
			}
		});
	} else {
		console.log("You need 35 penguin points first!");
		menuOptions();
	}
};

var doAwesomeTrick = function() {
	if (penguinPebbles >= 50) {
		prompt.question("Are you sure you want to spend 50 penguin pebbles?", (spend50) => {
			spend50LC = spend50.toLowerCase();
			if (spend50LC == "yes") {
				penguinPebbles-=50;
				console.log(usersPenguin.name + " orders a pizza, breadsticks, and a soda! " + heOrShe(usersPenguin.gender) + " was even able to tip the driver! Thanks, " + playersName + "!");
				menuOptions();
			} else if (spend50LC == "no") {
				console.log("No pebbles spent. Returning to main menu.");
				menuOptions();
			} else {
				console.log("Please use 'yes' or 'no'.");
				doAwesomeTrick();
			}
		});
	} else {
		console.log("You need 50 penguin points first!");
		menuOptions();
	}
};

var getPenguinName = function() {
	prompt.question("What will you name your penguin?: ", (inputPenguinsName) => {
		if (inputPenguinsName.length <= 10) {
		penguinsName = inputPenguinsName;
		getPenguinGender();
		} else {
			console.log("Please use 10 or less characters in the name.");
			getPenguinName();
		}
	});

};

var getPlayersName = function() {
	prompt.question("What's your name?: ", (inputPlayersName) => {
		if (inputPlayersName.length <= 10) {
			playersName = inputPlayersName;
			getPenguinName();
		} else {
			console.log("Please use 10 or less characters in the name.");
			getPlayersName();
		}
	});
};

getPlayersName();