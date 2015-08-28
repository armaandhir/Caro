// Test variables are defined here
var testValue = '------------------------------\n';

// Board Limits
var BOARDSIZE_MAX = 15;
var BOARDSIZE_MIN = 0;

var boardArray;

/**
 * Initiates the Board 2d array
 * @var    {String[][]}            Global boardArray()
 * @return {[type]} 			   Nothing for now
 */
function initiate_board(){
	// Declare the board array
	boardArray = new Array(BOARDSIZE_MAX);
	for (var i = 0; i < BOARDSIZE_MAX; i++) {
		boardArray[i] = new Array(BOARDSIZE_MAX);
	}
	for (var i = 0; i < BOARDSIZE_MAX; i++) {
		for (var j = 0; j < BOARDSIZE_MAX; j++) {
			boardArray[i][j] = '*';
		}
	}
}

/**
 * Assigns the value to boardArray at position
 * @param  {int array} position    Has position cordinates
 * @param  {String} playerValue    Either X or O
 * @return {[type]}                Nothing for now
 */
function push_value(position, playerValue) {
	boardArray[position[0]][position[1]] = playerValue;
}

/**
 * Wrapper function for all checks
 * @param  {int array} position    Has position cordinates
 * @param  {String} playerValue    Either X or O
 * @return {[type]}                Nothing for now
 */
function check_win(position, playerValue) {
	check_vertical_win(position, playerValue);
	check_horizontal_win(position, playerValue);
	check_diagonal_win1(position, playerValue);
	check_diagonal_win2(position, playerValue);
}

/**
 * Checks Win condtion in the Vertical direction
 * @param  {int array} position    Has position cordinates
 * @param  {String} playerValue    Either X or O
 * @var    {String[][]}            Global boardArray()
 * @return {bool}                  True if wins
 */
function check_vertical_win(position, playerValue) {
	//console.log("position: " + position);
	count = 1;
	// check for upward direction
	for(var a = 1; a < 5; a++){
		if ((position[0]-a >= BOARDSIZE_MIN)) {
			if (playerValue == boardArray[position[0]-a][position[1]]) {
				count++;
			}
			else{
				break;
			}
		}
		else{
			break;
		}
	}
	// check for downward direction
	for (var a = 1; a < 5; a++) {
		if ((position[0]+a) < BOARDSIZE_MAX) {
			if (playerValue == (boardArray[position[0]+a][position[1]])) {
				count++;
			}
			else{
				break;
			}
		}
		else{
			break;
		}
	}
	//console.log("Verical Count: " + count);
	if (count >= 5) {
		// remove this later
		alert("vertical win");
		return true;
	}
	return false;
}

/**
 * Checks Win condtion in the vertical direction
 * @param  {int array} position    Has position cordinates
 * @param  {String} playerValue    Either X or O
 * @var    {String[][]}            Global boardArray()
 * @return {bool}                  True if wins
 */
function check_horizontal_win(position, playerValue) {
	count = 1;
	// check for left direction
	for(var a = 1; a < 5; a++){
		if ((position[1]-a >= BOARDSIZE_MIN)) {
			if (playerValue == boardArray[position[0]][position[1]-a]) {
				count++;
			}
			else{
				break;
			}
		}
		else{
			break;
		}
	}
	// check for right direction
	for (var a = 1; a < 5; a++) {
		if  ((position[1]+a) < BOARDSIZE_MAX) {
			if (playerValue == (boardArray[position[0]][position[1]+a])) {
				count++;
			}
			else{
				break;
			}
		}
		else{
			break;
		}
	}
	//alert(count);
	if (count >= 5) {
		// remove this later
		alert("horizontal win");
		return true;
	}
	return false;
}

/**
 * Checks Win condtion in the Diagonal '\' direction 
 * @param  {int array} position    Has position cordinates
 * @param  {String} playerValue    Either X or O
 * @var    {String[][]}            Global boardArray()
 * @return {bool}                  True if wins
 */
function check_diagonal_win1(position, playerValue) {
	count = 1;
	// check for top-left direction \
	for(var a = 1; a < 5; a++){
		if ((position[0]-a >= BOARDSIZE_MIN)) {
			if (playerValue == boardArray[position[0]-a][position[1]-a]) {
				count++;
			}
			else{
				break;
			}
		}
		else{
			break;
		}
	}
	// check for bottom-right direction
	for (var a = 1; a < 5; a++) {
		if  ((position[0]+a) < BOARDSIZE_MAX) {
			if (playerValue == (boardArray[position[0]+a][position[1]+a])) {
				count++;
			}
			else{
				break;
			}
		}
		else{
			break;
		}
	}
	//alert(count);
	if (count >= 5) {
		// remove this later
		alert("diagonal win");
		return true;
	}
	return false;
}

/**
 * Checks Win condtion in the Diagonal '/' direction 
 * @param  {int array} position    Has position cordinates
 * @param  {String} playerValue    Either X or O
 * @var    {String[][]}            Global boardArray()
 * @return {bool}                  True if wins
 */
function check_diagonal_win2(position, playerValue) {
	count = 1;
	// check for top-right direction /
	for(var a = 1; a < 5; a++){
		if ((position[1]+a > BOARDSIZE_MAX)) {
			if (playerValue == boardArray[position[0]+a][position[1]-a]) {
				count++;
			}
			else{
				break;
			}
		}
		else{
			break;
		}
	}
	// check for bottom-left direction
	for (var a = 1; a < 5; a++) {
		if  ((position[0]-a) >= BOARDSIZE_MIN) {
			if (playerValue == (boardArray[position[0]-a][position[1]+a])) {
				count++;
			}
			else{
				break;
			}
		}
		else{
			break;
		}
	}
	//alert(count);
	if (count >= 5) {
		// remove this later
		alert("diagonal win");
		return true;
	}
	return false;
}

/**
 * Pushes the values to boardArray and checks win 
 * @param  {int array} position    Has position cordinates
 * @param  {string} playerValue    Either X or O
 * @funct  see push_value()
 * @funct  see check_win()
 * @return {[type]}                nothing for now
 */
function game_logic(position, playerValue) {
	console.log(position);
	//console.log("player: " + playerValue);
	push_value(position, playerValue);
	check_win(position, playerValue);
}

// ********************* TEST FUNCTIONS *********************

// Test function to check the aray values
function print_array() {
	for (var i=0; i<15; i++) {
		for (var j = 0; j < 15; j++) {
			testValue += boardArray[i][j] + " ";
		}
		testValue += "\n";
	}
	//document.getElementById("print").innerHTML = testValue;
	console.log(testValue);
	testValue = '------------------------------\n';
}

// Test Function
function testRun() {
	initiate_board();
	/*
	push_value("01", "0");
	push_value("11", "0");
	push_value("21", "0");
	push_value("31", "0");
	push_value("41", "0");
	check_vertical_win("31", "0");
	
	push_value("00", "0");
	push_value("01", "0");
	push_value("02", "0");
	push_value("03", "0");
	push_value("04", "0");
	check_horizontal_win("04", "0");
	*/
	push_value("00", "0");
	push_value("11", "0");
	push_value("22", "0");
	push_value("33", "0");
	push_value("44", "0");
	check_win("44", "0");
	//check_vertical_win("33", "0");
	//check_horizontal_win("00", "0");
	//check_diagonal_win("44", "0");

	print_array();
}