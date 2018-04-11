var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');
var t4 = document.getElementById('t4');
var t5 = document.getElementById('t5');
var t6 = document.getElementById('t6');
var t7 = document.getElementById('t7');
var t8 = document.getElementById('t8');
var t9 = document.getElementById('t9');
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var name1 = console.dir(document.querySelector('#player1'));
var move = 0;
var wyniki = new Array(9);
var xo;
wyniki[0] = 10;
wyniki[1] = 11;
wyniki[2] = 12;
wyniki[4] = 13;
wyniki[3] = 14;
wyniki[6] = 15;
wyniki[5] = 16;
wyniki[7] = 17;
wyniki[8] = 18;
wyniki[9] = 19;
var win = false;
console.log(wyniki);
console.log(win);
t1.addEventListener("click", function () {
	revealCard(1);
	whowin();
});
t2.addEventListener("click", function () {
	revealCard(2);
	whowin();
});
t3.addEventListener("click", function () {
	revealCard(3);
	whowin();
});
t4.addEventListener("click", function () {
	revealCard(4);
	whowin();
});
t5.addEventListener("click", function () {
	revealCard(5);
	whowin();
});
t6.addEventListener("click", function () {
	revealCard(6);
	whowin();
});
t7.addEventListener("click", function () {
	revealCard(7);
	whowin();
});
t8.addEventListener("click", function () {
	revealCard(8);
	whowin();
});
t9.addEventListener("click", function () {
	revealCard(9);
	whowin();
});

function revealCard(nr) {
	if (move % 2 == 0 && wyniki[nr] != 1 && wyniki[nr] != 2) {
		$('#t' + nr).html('<h1>X</h1>');
		wyniki[nr] = 1;
		move++;
	} else if (wyniki[nr] != 1 && wyniki[nr] != 2) {
		$('#t' + nr).html('<h1>O</h1>');
		wyniki[nr] = 2;
		move++;
	}
	whowin();
	console.log(win);
}
console.log(win);

function whowin() {
	if (wyniki[1] === wyniki[2] && wyniki[1] === wyniki[3]) {
		xo = wyniki[1];
		console.log(xo);
		win = true;
	}
	if (wyniki[4] === wyniki[5] && wyniki[4] === wyniki[6]) {
		xo = wyniki[4];
		win = true;
	}
	if (wyniki[7] === wyniki[8] && wyniki[7] === wyniki[9]) {
		wyniki[7] = xo;
		win = true;
	}
	if (wyniki[1] === wyniki[4] && wyniki[1] === wyniki[7]) {
		xo = wyniki[1];
		win = true;
	}
	if (wyniki[2] === wyniki[5] && wyniki[2] === wyniki[8]) {
		xo = wyniki[2];
		win = true;
	}
	if (wyniki[3] === wyniki[6] && wyniki[3] === wyniki[9]) {
		xo = wyniki[3];
		win = true;
	}
	if (wyniki[1] === wyniki[5] && wyniki[1] === wyniki[9]) {
		xo = wyniki[1];
		win = true;
	}
	if (wyniki[3] === wyniki[5] && wyniki[3] === wyniki[7]) {
		xo = wyniki[3];
		win = true;
	}
	if (move == 9) {
		move++;
		whowin();
		document.getElementById("move").innerHTML = '<font-size="40">! REMIS :/ !</font>';
		//document.getElementById("left").innerHTML='s';
		console.log(win);
	}
	if (win == true) {
		$('#left').html('<center><h1>Koniec GRY</h1></center>');
		xoro();
	}
}

function xoro() {
	console.log(xo);
	if (xo == 1) {
		document.getElementById("move").innerHTML = ' Wygrał X !';
	} else {
		document.getElementById("move").innerHTML = '! Wygrał O !';
	}
}
