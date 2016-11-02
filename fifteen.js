
var memory_array = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','A'];
var memory_arrayAns = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','A'];
var move = [0, 0, 0, 0];
var time=0;
var timer;
var pic=0;
var leaderboard=[];

function myTimer() 
{
	document.getElementById("timer").innerHTML = time;
	time++;
}

function newBoard(){
	pic = Math.floor((Math.random() * 4));
	
	var output = '';
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" onclick="swap('+i+')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
	

	updateboard();
	disablediv();
	document.getElementById("later").style.display="none";
	document.getElementById("lb").style.display="none";
	document.getElementById("btn4").style.display="none";
	document.getElementById("btn1").disabled = false;
	document.getElementById("btn2").disabled = false;

}
function start()
{
	//put shuffle here
	document.getElementById("btn1").disabled = true;
	document.getElementById("btn2").disabled = true;

	document.getElementById("later").style.display="inline";
	time=0;
	timer = setInterval(myTimer, 1000);
	enablediv();
}
function startE()
{
		memory_array = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','A','15'];//replace with better easy shuffle
		updateboard();
	document.getElementById("btn1").disabled = true;
	document.getElementById("btn2").disabled = true;

	document.getElementById("later").style.display="inline";
	time=0;
	timer = setInterval(myTimer, 1000);
	enablediv();
}
function disablediv()
{
	for(var c=0;c<memory_array.length;c++)
	{
	document.getElementById('tile_'+c).style.pointerEvents = "none"
	}
}
function enablediv()
{
	for(var d=0;d<memory_array.length;d++)
	{
	document.getElementById('tile_'+d).style.pointerEvents = "auto"
	}
}
function refreshPic0()
{
	for(var a=0;a<memory_array.length;a++)
	{
		document.getElementById('tile_'+a).style.backgroundImage = "url(henry.jpg)";
	}
}
function refreshPic1()
{
	for(var a=0;a<memory_array.length;a++)
	{
		document.getElementById('tile_'+a).style.backgroundImage = "url(gsuLogo.png)";
	}
}
function refreshPic2()
{
	for(var a=0;a<memory_array.length;a++)
	{
		document.getElementById('tile_'+a).style.backgroundImage = "url(turkey.jpeg)";
	}
}
function refreshPic3()
{
	for(var a=0;a<memory_array.length;a++)
	{
		document.getElementById('tile_'+a).style.backgroundImage = "url(santa.jpg)";
	}
}
function updateboard()
{
	switch(pic)
	{
		case 0:
			refreshPic0();
			break;
		case 1:
			refreshPic1();
			break;
		case 2:
			refreshPic2();
			break;
		case 3:
			refreshPic3();
			break;
	}
	
	for(var a=0;a<memory_array.length;a++)
	{
		switch(memory_array[a]) 
		{
		case "1":
			document.getElementById('tile_'+a).style.backgroundPosition = "0px 0px";
 			document.getElementById('tile_'+a).innerHTML= memory_array[a];
			break;
		case "2":
			document.getElementById('tile_'+a).style.backgroundPosition = "-100px 0px";
 			document.getElementById('tile_'+a).innerHTML= memory_array[a];
			break;
		case "3":
			document.getElementById('tile_'+a).style.backgroundPosition = "-200px 0px";
 			document.getElementById('tile_'+a).innerHTML= memory_array[a];
			break;
		case "4":
			document.getElementById('tile_'+a).style.backgroundPosition = "-300px 0px";
  			document.getElementById('tile_'+a).innerHTML= memory_array[a];
			break;
		case "5":
			document.getElementById('tile_'+a).style.backgroundPosition = "0px -100px";
  			document.getElementById('tile_'+a).innerHTML= memory_array[a];
			break;
		case "6":
			document.getElementById('tile_'+a).style.backgroundPosition = "-100px -100px";
  			document.getElementById('tile_'+a).innerHTML= memory_array[a];
			break;
		case "7":
			document.getElementById('tile_'+a).style.backgroundPosition = "-200px -100px";
  			document.getElementById('tile_'+a).innerHTML= memory_array[a];
			break;
		case "8":
			document.getElementById('tile_'+a).style.backgroundPosition = "-300px -100px";
  			document.getElementById('tile_'+a).innerHTML= memory_array[a];
			break;
		case "9":
			document.getElementById('tile_'+a).style.backgroundPosition = "0px -200px";
  			document.getElementById('tile_'+a).innerHTML= memory_array[a];
			break;
		case "10":
			document.getElementById('tile_'+a).style.backgroundPosition = "-100px -200px";
  			document.getElementById('tile_'+a).innerHTML= memory_array[a];
			break;
		case "11":
			document.getElementById('tile_'+a).style.backgroundPosition = "-200px -200px";
  			document.getElementById('tile_'+a).innerHTML= memory_array[a];
			break;
		case "12":
			document.getElementById('tile_'+a).style.backgroundPosition = "-300px -200px";
  			document.getElementById('tile_'+a).innerHTML= memory_array[a];
			break;
		case "13":
			document.getElementById('tile_'+a).style.backgroundPosition = "0px -300px";
  			document.getElementById('tile_'+a).innerHTML= memory_array[a];
			break;
		case "14":
			document.getElementById('tile_'+a).style.backgroundPosition = "-100px -300px";
  			document.getElementById('tile_'+a).innerHTML= memory_array[a];
			break;
		case "15":
			document.getElementById('tile_'+a).style.backgroundPosition = "-200px -300px";
  			document.getElementById('tile_'+a).innerHTML= memory_array[a];
			break;
		case "A":
			document.getElementById('tile_'+a).style.backgroundImage = '';
			document.getElementById('tile_'+a).innerHTML="";
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

function swap(pos)
{
	getTile(pos);
	var update=false;
	if(move[0]==1&& memory_array[(pos-4)]=="A")
	{		
			var placeholder=memory_array[pos];
			memory_array[pos]=memory_array[(pos-4)];
			memory_array[(pos-4)]=placeholder;
			update=true;
	}
	
	else if(move[1]==1&& memory_array[(pos+1)]=="A")
	{
			var placeholder=memory_array[pos];
			memory_array[pos]=memory_array[(pos+1)];
			memory_array[(pos+1)]=placeholder;
			update=true;
	}
	
	else if(move[2]==1&& memory_array[(pos+4)]=="A")
	{
			var placeholder=memory_array[pos];
			memory_array[pos]=memory_array[(pos+4)];
			memory_array[(pos+4)]=placeholder;
			update=true;
	}
	
	else if(move[3]==1&& memory_array[(pos-1)]=="A")
	{
			var placeholder=memory_array[pos];
			memory_array[pos]=memory_array[(pos-1)];
			memory_array[(pos-1)]=placeholder;
			update=true;
	}
	if(update==true)
	{
		updateboard();
		if(memory_array.toString()==memory_arrayAns.toString())
		{
			disablediv();
			clearInterval(timer);
			alert("you win in "+(time-1)+" seconds");//replace with end animation
			document.getElementById("win").style.display="inline";
		}
	}

}
function saveInfo()
{
	if(document.getElementById("name").value==""){alert("input a value")}//check if name is blank
	else{
	document.getElementById("win").style.display="none";


	var thename=document.getElementById("name").value;
	var person = {name:thename, theTime:(time-1)};
	leaderboard.push(person);
	
	leaderboard.sort(function(a, b){return a.theTime - b.theTime});//sort leaderboard by time
	
	var theleaderboard="<table  align=\"center\">";
	for(var a = 0; a < leaderboard.length; a++){
		theleaderboard += '<tr><td>'+leaderboard[a].name+'</td><td>'+leaderboard[a].theTime+' seconds</td></tr>';
	}
	theleaderboard+="</table>";

	document.getElementById('lb').innerHTML = theleaderboard;
	document.getElementById("lb").style.display="inline";
	document.getElementById("btn4").style.display="inline";

	}
	
}
function resettime(){time=0;}