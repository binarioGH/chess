
var board = document.getElementById("board");
var w = window.innerWidth;

board.style.marginLeft = "" + w/2-(board.offsetWidth/2) + "px";


//create board

var row;

for(row=0; row < 8; row++){
	board.innerHTML += "\n<div class='row'></div>";
}

var rows = document.getElementsByClassName("row");
var block;
for(row of rows){
	for(block = 0; block < 8; block++){
		if(block % 2){
			row.innerHTML += '\n<div class="box black"></div>';
		}
		else{
			row.innerHTML += '<div class="box"></div>';
		}
	}
}
