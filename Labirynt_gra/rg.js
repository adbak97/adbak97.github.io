
//DODAĆ FUNKCJĘ ANIMUJACA PORUSZANIE BOHATERA !!


var borderColor = "black"; //kolor scianki
var pixi = 4; // grubość scianki
var errors = 0;
var timmerRunning = false;

var img=document.getElementById("sprite");
   
var borders = [
    border1 = new component(pixi, 50, borderColor, 25, 225),
    border2 = new component(pixi, 100, borderColor, 50 + pixi, 325),
    border3 = new component(pixi, 100, borderColor, 50 + pixi, 525),
    border4 = new component(pixi, 50, borderColor, 75 + 2 * pixi, 275),
    border5 = new component(pixi, 100, borderColor, 100 + 3 * pixi, 375),
    border6 = new component(pixi, 50, borderColor, 100 + 3 * pixi, 575),
    border7 = new component(pixi, 25, borderColor, 125 + 4 * pixi, 175),
    border8 = new component(pixi, 200, borderColor, 125 + 4 * pixi, 175),
    border9 = new component(pixi, 100, borderColor, 150 + 5 * pixi, 425),
    border10 = new component(pixi, 50, borderColor, 175 + 6 * pixi, 150),
    border11 = new component(pixi, 25, borderColor, 175 + 6 * pixi, 300),
    border12 = new component(pixi, 50, borderColor, 200 + 7 * pixi, 425),
    border13 = new component(pixi, 50, borderColor, 200 + 7 * pixi, 525),
    border14 = new component(pixi, 100, borderColor, 225 + 8 * pixi, 0),
    border15 = new component(pixi, 75, borderColor, 225 + 8 * pixi, 200),
    border16 = new component(pixi, 50, borderColor, 250 + 9 * pixi, 475),
    border17 = new component(pixi, 50, borderColor, 275 + 10 * pixi, 50),
    border18 = new component(pixi, 75, borderColor, 275 + 10 * pixi, 250),
    border19 = new component(pixi, 100, borderColor, 300 + 11 * pixi, 425),
    border20 = new component(pixi, 50, borderColor, 300 + 11 * pixi, 575),
    border21 = new component(pixi, 100, borderColor, 325 + 12 * pixi, 100),
    border22 = new component(pixi, 25, borderColor, 325 + 12 * pixi, 250),
    border23 = new component(pixi, 150, borderColor, 350 + 13 * pixi, 325),
    border24 = new component(pixi, 50, borderColor, 350 + 13 * pixi, 525),
    border25 = new component(pixi, 50, borderColor, 375 + 14 * pixi, 150),
    border26 = new component(pixi, 100, borderColor, 400 + 15 * pixi, 200),
    border27 = new component(pixi, 50, borderColor, 400 + 15 * pixi, 350),
    border28 = new component(pixi, 75, borderColor, 400 + 15 * pixi, 550),
    border29 = new component(pixi, 150, borderColor, 425 + 16 * pixi, 50),
    border30 = new component(pixi, 125, borderColor, 450 + 17 * pixi, 500),
    border31 = new component(pixi, 250, borderColor, 500 + 18 * pixi, 150),
    border32 = new component(pixi, 75, borderColor, 500 + 18 * pixi, 500),
    border33 = new component(pixi, 50, borderColor, 550 + 19 * pixi, 0),
    border34 = new component(pixi, 100, borderColor, 550 + 19 * pixi, 100),
    border35 = new component(pixi, 150, borderColor, 550 + 19 * pixi, 300),
    border36 = new component(pixi, 75, borderColor, 550 + 19 * pixi, 500),
    border37 = new component(pixi, 100, borderColor, 600 + 20 * pixi, 250),
    border38 = new component(pixi, 50, borderColor, 600 + 20 * pixi, 450),
    border39 = new component(pixi, 50, borderColor, 650 + 21 * pixi, 150),
    border40 = new component(pixi, 100, borderColor, 650 + 21 * pixi, 250),
    border41 = new component(pixi, 50, borderColor, 650 + 21 * pixi, 450),
    border42 = new component(pixi, 100, borderColor, 700 + 22 * pixi, 175),
    border43 = new component(pixi, 75, borderColor, 700 + 22 * pixi, 325),
    border44 = new component(pixi, 50, borderColor, 750 + 23 * pixi, 225),
    border45 = new component(pixi, 75, borderColor, 750 + 23 * pixi, 325),
    // Linie poziome
    border46 = new component(125, pixi, borderColor, 325 - 2 * pixi, 50),
    border47 = new component(138, pixi, borderColor, 512 - 5 * pixi, 50),
    border48 = new component(50 + 3 * pixi, pixi, borderColor, 257, 100),
    border49 = new component(50 + 3 * pixi, pixi, borderColor, 375, 100),
    border50 = new component(125 + 3 * pixi, pixi, borderColor, 490, 100),
    border51 = new component(125, pixi, borderColor, 200, 150),
    border52 = new component(25, pixi, borderColor, 550, 150),
    border53 = new component(75, pixi, borderColor, 74 - pixi, 175),
    border54 = new component(100, pixi, borderColor, 792, 175),
    border55 = new component(59, pixi, borderColor, 144, 200),
    border56 = new component(119, pixi, borderColor, 258, 200),
    border57 = new component(62, pixi, borderColor, 431, 200),
    border58 = new component(112, pixi, borderColor, 626, 200),
    border59 = new component(50, pixi, borderColor, 845, 225),
    border60 = new component(120, pixi, borderColor, 141, 250),
    border61 = new component(110, pixi, borderColor, 572, 250),
    border62 = new component(29, pixi, borderColor, 0, 275),
    border63 = new component(58, pixi, borderColor, 84, 275),
    border64 = new component(90, pixi, borderColor, 373, 275),
    border65 = new component(58, pixi, borderColor, 734, 275),
    border66 = new component(58, pixi, borderColor, 460, 300),
    border67 = new component(29, pixi, borderColor, 58, 325),
    border68 = new component(204, pixi, borderColor, 199, 325),
    border69 = new component(58, pixi, borderColor, 788, 325),
    border70 = new component(112, pixi, borderColor, 460, 350),
    border71 = new component(204, pixi, borderColor, 116, 375),
    border72 = new component(108, pixi, borderColor, 406, 400),
    border73 = new component(164, pixi, borderColor, 628, 400),
    border74 = new component(58, pixi, borderColor, 0, 425),
    border75 = new component(58, pixi, borderColor, 170, 425),
    border76 = new component(58, pixi, borderColor, 286, 425),
    border77 = new component(58, pixi, borderColor, 404, 450),
    border78 = new component(164, pixi, borderColor, 520, 450),
    border79 = new component(106, pixi, borderColor, 700 + 9 * pixi, 450),
    border80 = new component(58, pixi, borderColor, 0, 475),
    border81 = new component(58, pixi, borderColor, 200 + 7 * pixi, 475),
    border82 = new component(62, pixi, borderColor, 300 + 11 * pixi, 475),
    border83 = new component(100 + 2 * pixi, pixi, borderColor, 425 + 10 * pixi, 500),
    border84 = new component(54, pixi, borderColor, 574 + 14 * pixi, 500),
    border85 = new component(150 + 3 * pixi, pixi, borderColor, 674 + 15 * pixi, 500),
    border86 = new component(50 + 2 * pixi, pixi, borderColor, 100 + 4 * pixi, 525),
    border87 = new component(50 + 2 * pixi, pixi, borderColor, 200 + 8 * pixi, 525),
    border88 = new component(50 + 2 * pixi, pixi, borderColor, 300 + 11 * pixi, 525),
    border89 = new component(150 + 3 * pixi, pixi, borderColor, 150 + 8 * pixi, 575),
    border90 = new component(50 + 2 * pixi, pixi, borderColor, 552 + 5 * pixi, 575),
    rame1 = new component(pixi, 625, borderColor, 0, 0),
    rame2 = new component(pixi, 625, borderColor, 892 - pixi, 0),
    rame3 = new component(892, pixi, borderColor, 0, 0),
    rame4 = new component(892, pixi, borderColor, 0, 625 - pixi),
    
   ];
var rooms = [
    
    roomGraphic = new component (200,100,"black",692-pixi,pixi),
    roomProgramers = new component (200,100,"black",pixi,pixi),
    roomOffice = new component (200,100,"black",692-pixi,525-pixi),
    
]
var gameBoard = new component(892,625,"#edb62b",0,0);

console.log(borders);
function startGame() {
	myGameArea.start();
//    gameBoard.update();
	myGamePiece = new character(img, 0, 25, 50, 60, 70, 575, 25, 25);
    
	for (i = 0; i < borders.length; i++) {
		borders[i].update();
	}
    
    rooms[0].update();
    rooms[1].update();
    rooms[2].update();
    
    
}
var myGameArea = {
	canvas: document.createElement("canvas"),
	start: function () {
		this.canvas.width = 892;
		this.canvas.height = 625;
		this.context = this.canvas.getContext("2d");
		document.getElementById("asd").appendChild(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(updateGameArea, 20);
		window.addEventListener('keydown', function (e) {
			
            myGameArea.key = e.keyCode;
            
            if(timmerRunning == false){
                timer();
            }else {return 0;}
		})
		window.addEventListener('keyup', function (e) {
			myGameArea.key = false;
		})
	},
	clear: function () {
		this.context.clearRect(myGamePiece.x, myGamePiece.y, 25, 25);
	},
	gameOver: function () {
            if ((myGamePiece.x - borders[i].x) < (myGamePiece.y - borders[i].y)) {
			if (myGamePiece.x < borders[i].x) {
				borders[i].update();
				myGamePiece.speedX = -10;
				myGamePiece.newPos();
				myGamePiece.update();
				borders[i].update();
				scores();
			} else if (myGamePiece.x > borders[i].x) {
				borders[i].update();
				myGamePiece.speedX = 10;
				myGamePiece.newPos();
				myGamePiece.update();
				borders[i].update();
				scores();
				console.log("tutaj??")
			}
		} else {
			if (myGamePiece.y > borders[i].y) {
				myGamePiece.speedY = 10;
				myGamePiece.newPos();
				myGamePiece.update();
				borders[i].update();
				scores();
            } else if (myGamePiece.y < borders[i].y) {
				myGamePiece.speedY = -10;
				myGamePiece.newPos();
				myGamePiece.update();
				borders[i].update();
				scores();
			}
		}
	}
}
function component(width, height, color, x, y) {
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.update = function () {
		ctx = myGameArea.context;
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	this.newPos = function () {
		this.x += this.speedX;
		this.y += this.speedY;
	}
	this.crashWith = function (otherobj) {
		var myleft = this.x;
		var myright = this.x + (this.width);
		var mytop = this.y;
		var mybottom = this.y + (this.height);
		var otherleft = otherobj.x;
		var otherright = otherobj.x + (otherobj.width);
		var othertop = otherobj.y;
		var otherbottom = otherobj.y + (otherobj.height);
		var crash = true;
		if ((mybottom < othertop) ||
			(mytop > otherbottom) ||
			(myright < otherleft) ||
			(myleft > otherright)) {
			crash = false;
		}
		return crash;
	}
}



function character(img,sx,sy,swidth,sheight,x,y,width,height) {
	this.img = img;
    this.sx = sx;
	this.sy = sy;
    this.swidth = width;
	this.sheight = height;
	this.x = x;
	this.y = y;
    this.width = width;
	this.height = height;
	this.update = function () {
		ctx = myGameArea.context;
		
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth,this.sheight,this.x,this.y,this.width,this.height);
	}
	this.newPos = function () {
		this.x += this.speedX;
		this.y += this.speedY;
	}
	this.crashWith = function (otherobj) {
		var myleft = this.x;
		var myright = this.x + (this.width);
		var mytop = this.y;
		var mybottom = this.y + (this.height);
		var otherleft = otherobj.x;
		var otherright = otherobj.x + (otherobj.width);
		var othertop = otherobj.y;
		var otherbottom = otherobj.y + (otherobj.height);
		var crash = true;
		if ((mybottom < othertop) ||
			(mytop > otherbottom) ||
			(myright < otherleft) ||
			(myleft > otherright)) {
			crash = false;
		}
		return crash;
	}
}
function updateGameArea() {
	for (i = 0; i < borders.length; i++) {
		if (myGamePiece.crashWith(borders[i])) {
			myGameArea.gameOver(borders[i]);
		} else {
			myGameArea.clear();
		}
        	
	}
    for (i = 0; i < rooms.length; i++) {
		if (myGamePiece.crashWith(rooms[i])) {
			gameWin();
		} else {
			myGameArea.clear();
		}
        	
	}
    
    
    
	myGamePiece.speedX = 0;
	myGamePiece.speedY = 0;
	if (myGameArea.key && myGameArea.key == 37) {
		myGamePiece.speedX = -3;
         go(37,myGamePiece);
         
        
	}
	if (myGameArea.key && myGameArea.key == 39) {
        myGamePiece.speedX = 3;
        
         go(39,myGamePiece);
         
	}
	if (myGameArea.key && myGameArea.key == 38) {
		myGamePiece.speedY = -3;
        go(38,myGamePiece);
	}
	if (myGameArea.key && myGameArea.key == 40) {
		myGamePiece.speedY = 3;
         go(40,myGamePiece);
	}
	myGamePiece.newPos();
	myGamePiece.update();
}
function scores() {
	errors++;
	console.log("Pyknięcia: " + errors);
	document.getElementById("hits").innerText = "HITS: " + errors;
}
function timer(){
    timmerRunning = true;
    var running; 
    var timing = setInterval(alertFunc,1000);
    var time = 0 ;
    
        function alertFunc(){
        time++
        document.getElementById("time").innerText="Time : " + time;
        }
    
    }
function gameWin(){
    
   alert("WYGRANA");
    
    
    
}  
function go(direction,element){
    
    if(direction==37){
        //Lewo
        console.log("1");
        element.sx=0;
        element.sy=75;
        
    }
    if(direction==39){
        //Prawo
          console.log("2");
        element.sx=25;
        element.sy=50
        
        
        
        
    }
    //Góra
    if(direction==38){
          console.log("3");
        element.sx=0;
        element.sy=25;
        
    }
    //Dół
    if(direction==40){
          console.log("4");
        element.sx=0;
        element.sy=0;
        
    }
    
    
}

   
   
    
   
    

