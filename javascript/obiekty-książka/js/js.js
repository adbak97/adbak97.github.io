class Ksiazka {
	constructor(tytul, autor, przeczytana) {
		this.tytul = tytul;
		this.autor = autor;
		this.przeczytana = przeczytana;
	}
	opiszKiazke() {
		var ksiazka;
		if (this.przeczytana == true) {
			ksiazka = "przeczytana";
		} else {
			ksiazka = "nie przeczytana"
		}
		return console.log("Ksiazka ma tytul: " + this.tytul + ", autorem jest: " + this.autor + " i jest " + ksiazka);
	}
}
var ksiazka1 = new Ksiazka("Harry Potter", "J.K Rownling", true);
var ksiazka2 = new Ksiazka("Igrzyska Smierci", "Suzanne Colins", false);
var ksiazka3 = new Ksiazka("Kubus Puchatek", "A.A Milne", false);
var tablica = [ksiazka1, ksiazka2, ksiazka3, ];

function iloscPrzeczytanych(tablica) {
	var czyPrzeczytane = 0;
	tablica.forEach(function (element, index) {
		element.opiszKiazke();
		if (element.przeczytana == true) {
			czyPrzeczytane++;
		}
	});
	console.log("Ilość przeczytanych książek: " + czyPrzeczytane);
}
iloscPrzeczytanych(tablica);
