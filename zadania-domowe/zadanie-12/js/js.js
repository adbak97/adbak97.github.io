var display = document.getElementById("display");
var del = document.getElementById("del");
var procent = document.getElementById("procent");
var dodawanie = document.getElementById("dodawanie");
var odejmowanie = document.getElementById("odejmowanie");
var mnozenie = document.getElementById("mnozenie");
var dzielenie = document.getElementById("dzielenie");
var zero = document.getElementById("zero");
var dot = document.getElementById("dot");
var rownaSie = document.getElementById("rowna_sie");
var liczba1 = document.getElementById('1');
var liczba2 = document.getElementById('2');
var liczba3 = document.getElementById('3');
var liczba4 = document.getElementById('4');
var liczba5 = document.getElementById('5');
var liczba6 = document.getElementById('6');
var liczba7 = document.getElementById('7');
var liczba8 = document.getElementById('8');
var liczba9 = document.getElementById('9');
var flaga = 0; //w zaleznosci od liczby, program bedzie wiedział jakie zadanko arytmetyczne wykonac
var firstAmount = 0;
var secondAmount = 0;
var oldcontent;
var oldOldContent;

del.addEventListener("click", function (e) {
	display.innerHTML = '';
});
procent.addEventListener("click", function (e) {
	alert("EEEE Synek procenty nie działają");
});
dodawanie.addEventListener("click", function (e) {
	oldContent = display.innerHTML; //tutaj w jquery mozna by użyć appendChild(), albo insertBefore

	console.log(oldContent);

	//Number(x);
	display.innerHTML = oldContent + '+';
	firstAmount = Number(oldContent);
	flaga = 1;
	oldOldContent = display.innerHTML;

});
odejmowanie.addEventListener("click", function (e) {
	oldContent = display.innerHTML;
	console.log(oldContent);
	display.innerHTML = oldContent + '-';
	firstAmount = Number(oldContent);
	flaga = 2;
	oldOldContent = display.innerHTML;

	console.log(flaga, firstAmount, oldContent);
});
mnozenie.addEventListener("click", function (e) {
	oldContent = display.innerHTML;
	display.innerHTML = oldContent + '*';
	firstAmount = Number(oldContent);
	flaga = 3;
	oldOldContent = display.innerHTML;
});
dzielenie.addEventListener('click', function (e) {
	oldContent = display.innerHTML;
	display.innerHTML = oldContent + ':';
	firstAmount = Number(oldContent);
	flaga = 4;
	oldOldContent = display.innerHTML;
});
liczba1.addEventListener('click', function (e) {
	oldContent = display.innerHTML;
	display.innerHTML = oldContent + '1';
});
liczba9.addEventListener('click', function (e) {
	oldContent = display.innerHTML;
	display.innerHTML = oldContent + '9';
});
liczba2.addEventListener('click', function (e) {
	oldContent = display.innerHTML;
	display.innerHTML = oldContent + '2';
});
liczba3.addEventListener('click', function (e) {
	oldContent = display.innerHTML;
	display.innerHTML = oldContent + '3';
});
liczba4.addEventListener('click', function (e) {
	oldContent = display.innerHTML;
	display.innerHTML = oldContent + '4';
});
liczba5.addEventListener('click', function (e) {
	oldContent = display.innerHTML;
	display.innerHTML = oldContent + '5';
});
liczba6.addEventListener('click', function (e) {
	oldContent = display.innerHTML;
	display.innerHTML = oldContent + '6';
});
liczba7.addEventListener('click', function (e) {
	oldContent = display.innerHTML;
	display.innerHTML = oldContent + '7';
});
liczba8.addEventListener('click', function (e) {
	oldContent = display.innerHTML;
	display.innerHTML = oldContent + '8';
});
zero.addEventListener('click', function (e) {
	oldContent = display.innerHTML;
	display.innerHTML = oldContent + '0';
});
console.log("FLAGA: " + flaga);

function calculate(firstAmount, secondAmount) {
	switch (flaga) {


		case 1:
			console.log("dodawanie");
			var wynik = eval(firstAmount + secondAmount);
			display.innerHTML = wynik;
			break;
		case 2:

			console.log("odejmowanie");
			var wynik = eval(firstAmount - secondAmount);
			display.innerHTML = wynik;
			break;
		case 3:
			console.log("mnozenie");
			var wynik = eval(firstAmount * secondAmount);
			display.innerHTML = wynik;
			break;
		case 4:
			console.log("dzielenie");
			var wynik = eval(firstAmount / secondAmount);
			display.innerHTML = wynik;
	};
};

rownaSie.addEventListener('click', function () {

	secondAmount = display.innerHTML;

	console.log(oldOldContent.length);
	secondAmount = secondAmount.substr(oldOldContent.length);
	console.log(secondAmount);

	calculate(firstAmount, secondAmount);
});
console.log("FLAGA: " + flaga);
