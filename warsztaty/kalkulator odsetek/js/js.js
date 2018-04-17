function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
	if (podatek == true) {
		var oprocentowanieOpodatkowane = oprocentowanie;
	} else {
		var oprocentowanieOpodatkowane = oprocentowanie * 0.
		81;
	};
	console.log(wplata);
	var kapital = wplata * (1 + (oprocentowanieOpodatkowane / okresKapitalizacji) ^ (iloscLat * okresKapitalizacji));
	return kapital;
}



function oblicz(event) {

	var wplata = document.getElementById("wplata").value;
	var iloscLat = document.getElementById("ilosc-lat").value;
	var okresKapitalizacji = document.getElementById("okres-kapitalizacji").value;
	var oprocentowanie = document.getElementById("oprocentowanie").value / 100;
	var podatek = document.getElementById("podatek").checked;
	event.preventDefault();
	console.log(podatek);
	var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
	console.log(wynik);
	document.getElementById("wynik").innerHTML = "adas";

};
var wynik = document.getElementById("licz").addEventListener('click', oblicz);
