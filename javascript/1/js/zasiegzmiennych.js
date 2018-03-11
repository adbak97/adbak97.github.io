/*
var zmiennaGlobalna = "Tak! Jestem zmienna globalna i jestem widoczna w funkcjach";

function wyswietlZmienna() {
	console.log(zmiennaGlobalna);
	var zmiennaLokalna = "Tak! JEstem zmienna lokalna - to ja. Przestrzeń globalna mnie nie zobaczy";
	console.log(zmiennaLokalna);
}

wyswietlZmienna();
console.log(zmiennaLokalna);
*/

var zmienna = "Zmienna globalna";

function pokazZmienna() {
	var zmienna = "Zmienna lokalna";
	console.log(zmienna);
}

pokazZmienna();
console.log(zmienna);
