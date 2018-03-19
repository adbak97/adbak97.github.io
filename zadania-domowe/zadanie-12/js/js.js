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
console.log(del);
console.log(display);
del.addEventListener("click", function (e) {
	display.innerHTML = '';
});
procent.addEventListener("click", function (e) {

	alert("EEEE Synek procenty nie działają");

});
dodawanie.addEventListener("click", function (e) {
	var oldContent = display.innerHTML; //tutaj w jquery mozna by użyć appendChild(), albo insertBefore
	console.log(oldContent);
	console.log(typeof oldContent);
	//Number(x);
	display.innerHTML = oldContent + ' +';
	flaga = 1;
});
odejmowanie.addEventListener("click", function (e) {
	var oldContent = display.innerHTML;
	display.innerHTML = oldContent + ' -';
	flaga = 2;
});
mnozenie.addEventListener("click", function (e) {
	var oldContent = display.innerHTML;
	display.innerHTML = oldContent + ' *';
	flaga = 3;
});
dzielenie.addEventListener('click', function (e) {
	var oldContent = display.innerHTML;
	display.innerHTML = oldContent + ' :';
	flaga = 4;
});
