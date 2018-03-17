var div = document.getElementById("parFirst");
var par = document.getElementById("par2");
div.addEventListener("click", function (event) {
	console.log("kliknieto w diva");
})
par.addEventListener("click", function (event) {
	console.log("kliknieto w paragraf");
	event.stopPropagation();
})
