/*
    Created by Kenny Nguyen, Keon Hee Park, and Mona Shittul
    Project 2: Game of Fifteen
    fifteen.js
	Course: CSC 4370 - Web Programming
	Instructor: Louis Henry
	Date: November 7, 2016
*/

/*global $*/

var memory_array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', 'A'];
var memory_arrayAns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', 'A'];
var move = [0, 0, 0, 0];
var totalMoves = 0;
var time = 0;
var timer;
var pic = 0;
var leaderboard = [];

function myTimer() {
	time++;
	document.getElementById("timer").innerHTML = time;
}

function createPicOption() {
	var picOptions = '';
	if (pic == 0) {
		picOptions = '<select id="pictures" onchange="newPic()"><option value="0" selected>Henry</option><option value="1">Anu</option><option value="2">Bhola</option><option value="3">Zelikovsky</option></select>';
	}
	if (pic == 1) {
		picOptions = '<select id="pictures" onchange="newPic()"><option value="0">Henry</option><option value="1" selected>Anu</option><option value="2">Bhola</option><option value="3">Zelikovsky</option></select>';
	}
	if (pic == 2) {
		picOptions = '<select id="pictures" onchange="newPic()"><option value="0">Henry</option><option value="1">Anu</option><option value="2" selected>Bhola</option><option value="3">Zelikovsky</option></select>';
	}
	if (pic == 3) {
		picOptions = '<select id="pictures" onchange="newPic()"><option value="0">Henry</option><option value="1">Anu</option><option value="2">Bhola</option><option value="3" selected>Zelikovsky</option></select>';
	}
	document.getElementById('selectPic').innerHTML = picOptions;
}

function newPic()
{
		pic=document.getElementById('pictures').value;
		updateboard();
}


function newBoard() {
	document.getElementById("objective").innerHTML="Solve this puzzle before your classes for next semester are full.";
	pic = Math.floor((Math.random() * 4));
	var output = '';

	for (var i = 0; i < memory_array.length; i++) {
		output += '<div id="tile_' + i + '" class="tile" onclick="swap(' + i + ')"></div>';
	}
	
	document.getElementById('memory_board').innerHTML = output;
	updateboard();
	disablediv();
	createPicOption();

	document.getElementById("clock").className = "hide";
	document.getElementById("lb").className = "hide";
	document.getElementById("btn4").className = "hide";
	document.getElementById("btn1").className = "";
	document.getElementById("btn2").className = "";
	document.getElementById("btn1").disabled = false;
	document.getElementById("btn2").disabled = false;
	
	$("#memory_board").show();
	document.getElementById("after_game").innerHTML = "";
}

function removehoverall() {
	for (var i = 0; i < memory_array.length; i++) {
		document.getElementById("tile_" + i).className = "tile";
	}
}

function addhover() {
	var blank = memory_array.indexOf("A");
	getTile(blank);
	if (move[0] == 1) {
		document.getElementById("tile_" + (blank - 4)).className += " movablepiece";
	}
	if (move[1] == 1) {
		document.getElementById("tile_" + (blank + 1)).className += " movablepiece";
	}
	if (move[2] == 1) {
		document.getElementById("tile_" + (blank + 4)).className += " movablepiece";
	}
	if (move[3] == 1) {
		document.getElementById("tile_" + (blank - 1)).className += " movablepiece";
	}
}

function defaultShuffle() {
	for (var a = 0; a < 1000000; a++) {
		var blank = memory_array.indexOf("A");
		getTile(blank);
		var counter = 0;
		for (var b = 0; b < 4; b++) {
			if (move[b] == 1) {
				counter++;
			}
		}
		var doSwap = Math.floor((Math.random() * counter));
		var counter2 = 0;
		for (var b = 0; b < 4; b++) {
			if (move[b] == 1) {
				if (counter2 == doSwap) {
					if (b == 0) {
						var placeholder = memory_array[blank];
						memory_array[blank] = memory_array[(blank - 4)];
						memory_array[(blank - 4)] = placeholder;
					}
					else if (b == 1) {
						var placeholder = memory_array[blank];
						memory_array[blank] = memory_array[(blank + 1)];
						memory_array[(blank + 1)] = placeholder;
					}
					else if (b == 2) {
						var placeholder = memory_array[blank];
						memory_array[blank] = memory_array[(blank + 4)];
						memory_array[(blank + 4)] = placeholder;
					}
					else if (b == 3) {
						var placeholder = memory_array[blank];
						memory_array[blank] = memory_array[(blank - 1)];
						memory_array[(blank - 1)] = placeholder;
					}
					counter2 = 5;
				}
				else {
					counter2++;
				}
			}
		}
	}
	while(memory_array.indexOf("A")!=15)
	{
		var blank = memory_array.indexOf("A");
		if(blank<12)
		{
			var placeholder = memory_array[blank];
			memory_array[blank] = memory_array[(blank + 4)];
			memory_array[(blank + 4)] = placeholder;
		}
		else
		{
			var placeholder = memory_array[blank];
			memory_array[blank] = memory_array[(blank + 1)];
			memory_array[(blank + 1)] = placeholder;
		}
	}
}

function start() {
	time = 0;
	totalMoves = 0;
	defaultShuffle();
	updateboard();
	document.getElementById("btn1").disabled = true;
	document.getElementById("btn2").disabled = true;
	document.getElementById("timer").innerHTML = time;
	timer = setInterval(myTimer, 1000);
	document.getElementById("clock").className = "";
	removehoverall();
	addhover();
	enablediv();
}

function startE() {
	totalMoves = 0;
	time = 0;
	memory_array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', 'A', '15']; //replace with better easy shuffle
	updateboard();
	document.getElementById("btn1").disabled = true;
	document.getElementById("btn2").disabled = true;
	document.getElementById("timer").innerHTML = time;
	timer = setInterval(myTimer, 1000);
	document.getElementById("clock").className = "";
	removehoverall();
	addhover();
	enablediv();
}

function disablediv() {
	for (var c = 0; c < memory_array.length; c++) {
		document.getElementById('tile_' + c).style.pointerEvents = "none"
	}
}

function enablediv() {
	for (var d = 0; d < memory_array.length; d++) {
		document.getElementById('tile_' + d).style.pointerEvents = "auto"
	}
}

function refreshPic() {
	var imgs = ["henry.jpg", "anu.jpg", "bhola.jpg", "zelikovsky.jpg"];
	for (var a = 0; a < memory_array.length; a++) {
		document.getElementById('tile_' + a).style.backgroundImage = "url(images/" + imgs[pic] + ")";
	}
}

function updateboard() {
	refreshPic();
	for (var a = 0; a < memory_array.length; a++) {
		switch (memory_array[a]) {
			case "1":
				document.getElementById('tile_' + a).style.backgroundPosition = "0px 0px";
				document.getElementById('tile_' + a).innerHTML = memory_array[a];
				break;
			case "2":
				document.getElementById('tile_' + a).style.backgroundPosition = "-100px 0px";
				document.getElementById('tile_' + a).innerHTML = memory_array[a];
				break;
			case "3":
				document.getElementById('tile_' + a).style.backgroundPosition = "-200px 0px";
				document.getElementById('tile_' + a).innerHTML = memory_array[a];
				break;
			case "4":
				document.getElementById('tile_' + a).style.backgroundPosition = "-300px 0px";
				document.getElementById('tile_' + a).innerHTML = memory_array[a];
				break;
			case "5":
				document.getElementById('tile_' + a).style.backgroundPosition = "0px -100px";
				document.getElementById('tile_' + a).innerHTML = memory_array[a];
				break;
			case "6":
				document.getElementById('tile_' + a).style.backgroundPosition = "-100px -100px";
				document.getElementById('tile_' + a).innerHTML = memory_array[a];
				break;
			case "7":
				document.getElementById('tile_' + a).style.backgroundPosition = "-200px -100px";
				document.getElementById('tile_' + a).innerHTML = memory_array[a];
				break;
			case "8":
				document.getElementById('tile_' + a).style.backgroundPosition = "-300px -100px";
				document.getElementById('tile_' + a).innerHTML = memory_array[a];
				break;
			case "9":
				document.getElementById('tile_' + a).style.backgroundPosition = "0px -200px";
				document.getElementById('tile_' + a).innerHTML = memory_array[a];
				break;
			case "10":
				document.getElementById('tile_' + a).style.backgroundPosition = "-100px -200px";
				document.getElementById('tile_' + a).innerHTML = memory_array[a];
				break;
			case "11":
				document.getElementById('tile_' + a).style.backgroundPosition = "-200px -200px";
				document.getElementById('tile_' + a).innerHTML = memory_array[a];
				break;
			case "12":
				document.getElementById('tile_' + a).style.backgroundPosition = "-300px -200px";
				document.getElementById('tile_' + a).innerHTML = memory_array[a];
				break;
			case "13":
				document.getElementById('tile_' + a).style.backgroundPosition = "0px -300px";
				document.getElementById('tile_' + a).innerHTML = memory_array[a];
				break;
			case "14":
				document.getElementById('tile_' + a).style.backgroundPosition = "-100px -300px";
				document.getElementById('tile_' + a).innerHTML = memory_array[a];
				break;
			case "15":
				document.getElementById('tile_' + a).style.backgroundPosition = "-200px -300px";
				document.getElementById('tile_' + a).innerHTML = memory_array[a];
				break;
			case "A":
				document.getElementById('tile_' + a).style.backgroundImage = '';
				document.getElementById('tile_' + a).innerHTML = "";
				break;
		}
	}
}

function getTile(i) {
	// This is for the tile that is clicked.
	// Up, Right, Down, Left
	move = [0, 0, 0, 0];
	switch (i) {
		case 5:
		case 6:
		case 9:
		case 10:
			// Up, Right, Down, Left
			move[0]++;
			move[1]++;
			move[2]++;
			move[3]++;
			break;
		case 4:
		case 8:
			// Up, Right, Down
			move[0]++;
			move[1]++;
			move[2]++;
			break;
		case 0:
			// Right, Down
			move[1]++;
			move[2]++;
			break;
		case 3:
			// Left, Down
			move[2]++;
			move[3]++;
			break;
		case 12:
			// Up, Right
			move[0]++;
			move[1]++;
			break;
		case 15:
			// Up, Left
			move[0]++;
			move[3]++;
			break;
		case 1:
		case 2:
			// Right, Down, Left
			move[1]++;
			move[2]++;
			move[3]++;
			break;
		case 13:
		case 14:
			// Up, Right, Left
			move[0]++;
			move[1]++;
			move[3]++;
			break;
		case 7:
		case 11:
			// Up, Down, Left
			move[0]++;
			move[2]++;
			move[3]++;
			break;
	}
}

function swap(pos) {
	getTile(pos);
	var update = false;
	if (move[0] == 1 && memory_array[(pos - 4)] == "A") {
		var placeholder = memory_array[pos];
		memory_array[pos] = memory_array[(pos - 4)];
		memory_array[(pos - 4)] = placeholder;
		update = true;
	}
	else if (move[1] == 1 && memory_array[(pos + 1)] == "A") {
		var placeholder = memory_array[pos];
		memory_array[pos] = memory_array[(pos + 1)];
		memory_array[(pos + 1)] = placeholder;
		update = true;
	}
	else if (move[2] == 1 && memory_array[(pos + 4)] == "A") {
		var placeholder = memory_array[pos];
		memory_array[pos] = memory_array[(pos + 4)];
		memory_array[(pos + 4)] = placeholder;
		update = true;
	}
	else if (move[3] == 1 && memory_array[(pos - 1)] == "A") {
		var placeholder = memory_array[pos];
		memory_array[pos] = memory_array[(pos - 1)];
		memory_array[(pos - 1)] = placeholder;
		update = true;
	}
	if (update == true) {
		totalMoves++;
		removehoverall();
		addhover();
		updateboard();
		if (memory_array.toString() == memory_arrayAns.toString()) {
			disablediv();
			document.getElementById("pictures").className = "hide";
			document.getElementById("btn1").className = "hide";
			document.getElementById("btn2").className = "hide";
			clearInterval(timer);
			document.getElementById("objective").innerHTML="Sorry, the classes are already full before you even had the chance to register.";
			$("#memory_board").hide();
			$("#after_game").html("<div class='ending_gif'></div>");
			document.getElementById("win").className = "";
		}
	}
}

function saveInfo() {
	if (document.getElementById("name").value == "") {
		document.getElementById('lb').innerHTML = "Input a name";
		document.getElementById("lb").className = "";
	} //check if name is blank
	else {
		document.getElementById("win").className = "hide";
		var thename = document.getElementById("name").value;
		var person = {
			name: thename,
			theTime: (time),
			moves: totalMoves
		};
		leaderboard.push(person);
		leaderboard.sort(function(a, b) {
			return a.theTime - b.theTime;
		}); //sort leaderboard by time
		var theleaderboard = "<table  align=\"center\">";
		theleaderboard += "<th>Name</th><th>Moves</th><th>Time</th>";
		for (var a = 0; a < leaderboard.length; a++) {
			if (a % 2 === 0) {
				theleaderboard += '<tr class="even"><td>' + leaderboard[a].name + '</td><td>' + leaderboard[a].moves + '</td><td>' + leaderboard[a].theTime + ' seconds</td></tr>';
			}
			else {
				theleaderboard += '<tr class="odd"><td>' + leaderboard[a].name + '</td><td>' + leaderboard[a].moves + '</td><td>' + leaderboard[a].theTime + ' seconds</td></tr>';
			}
		}
		theleaderboard += "</table>";
		document.getElementById('lb').innerHTML = theleaderboard;
		document.getElementById("lb").className = "";
		document.getElementById("btn4").className = "";
	}
}

function resettime() {
	time = 0;
}
