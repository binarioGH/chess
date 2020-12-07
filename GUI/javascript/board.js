
var board = document.getElementById("board");
var w = window.innerWidth;

//board.style.marginLeft = "" + w/2-(board.offsetWidth/2) + "px";


//create board

var row;

for(row=0; row < 8; row++){
	board.innerHTML += "\n<div class='row'></div>";
}

var rows = document.getElementsByClassName("row");
var block;
var rowi;
for (rowi = 0; rowi < 8; rowi++) {
    row = rows[rowi];
    for (block = 0; block < 8; block++) {
        if (rowi % 2) {
        	if (block % 2) {
                row.innerHTML += '\n<div class="box"></div>';
            } else {
                row.innerHTML += '\n<div class="box black"></div>';
            }
        }
        else{
        	if (block % 2) {
                row.innerHTML += '\n<div class="box black"></div>';
            } else {
                row.innerHTML += '\n<div class="box"></div>';
            }
        }
    }
}



// Add Chess Pieces
var i;
var boxs = document.getElementsByClassName("box");
var piecesimg = ["tower.png", "knight.png", "bishop.png", "queen.png", "king.png", "bishop.png", "knight.png", "tower.png"];
for(i = 8; i < 16; i++){
	boxs[i].innerHTML = "<div clss='piece'><img src='images\\blackpawn.png' class='piece'></div>"; // Black pawn
	boxs[i + 40].innerHTML = "<div clss='piece'><img src='images\\whitepawn.png' class='piece'></div>"; // White pawn
	boxs[i-8].innerHTML = "<div clss='piece'><img src='images\\black"+ piecesimg[i-8] +"' class='piece'></div>";
	boxs[i+48].innerHTML = "<div clss='piece'><img src='images\\white"+ piecesimg[i-8] +"' class='piece'></div>";
}

var pieces = document.getElementsByClassName("piece")