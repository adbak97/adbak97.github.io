function wyswietlWKonsoli() {
	console.log("Adrian Bak");
}

wyswietlWKonsoli();

//Funckja z parametrem
function wyswietlWKonsoliParam(imie, nazwisko) {
	console.log(imie + " " + nazwisko);
}
wyswietlWKonsoliParam("Adrian", "Bak");

//zwracanie wartości przez funkcję
function obliczPodatek(kwota, procentPodatek) {

	var wynik = kwota * (procentPodatek / 100);
	return wynik.toFixed(2);

}
var obliczenia1 = obliczPodatek(4990, 23);
console.log(obliczenia1);
