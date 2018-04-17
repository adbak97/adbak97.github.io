/*var paragraf = document.getElementById('par2');
// sposób łan
function obsluzZdarzenie(event) {
	console.log("click");
	console.log(Event.type);
}
paragraf.onclick = obsluzZdarzenie;
//2 sposob
paragraf.onclick = function (e) {
	console.log("Do obsługi zdarzenia została przypisana");
}
console.log(paragraf);
// sposób trzeci
var counter = 0;*/
/*paragraf.addEventListener("mouseenter", function (event) {
	counter++;
	console.log(event.type);
	console.log("Zdarzenie wywołane: " + counter);
})
var title = document.getElementById("main-header");
title.addEventListener("mouseenter", function () {
	title.style.fontSize = "70px";
});
var title = document.getElementById("main-header");
title.addEventListener("mouseleave", function () {
	title.style.fontSize = "inherit";
});

function bodyColor(evet) {
	console.log(evet);
	document.body.style.backgroundColor = "red";
}
var title = document.getElementById("main-header");

title.addEventListener("click", bodyColor);
//title.removeEventListener("click", bodyColor);



//blokowanie domyslnego dzialania linku

document.querySelector(".link1").addEventListener('click', function (event) {
	event.preventDefault();
	console.log("kliknałem link 1");
});