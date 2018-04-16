var pracownik;
var czas;
var stawka;
var wyplata;
var pensja;
var w;
var workers = [];

function oblicz() {
	for (var i = 0; i < 20; i++) {
		w = document.getElementById("pracownik" + (i + 1));
		czas = w.querySelector(".czas").value;
		stawka = w.querySelector(".stawka").value;
		wyplata = w.querySelector(".wyplata");
		pracownik = w.querySelector(".pracownik").innerHTML;
		pensja = 0;
		if (czas >= 100 && czas <= 160) {
			pensja = czas * stawka;
			wyplata.innerText = pensja;
		}
		if (czas > 160) {
			var nadGodzinki = (czas - 160) * stawka;
			pensja = (czas * stawka) + nadGodzinki;
			wyplata.innerText = pensja;
		}
		if (czas <= 100) {
			pensja = czas * stawka;
			wyplata.innerText = pensja;
			w.style.background = "red";
			w.querySelector(".wyplata").style.background = "red";
			w.querySelector(".stawka").style.background = "red";
			w.querySelector(".czas").style.background = "red";
		}

		Pracownicy();
	}

	function Pracownicy() {
		godziny = 0;
		//konstruktor obiektu pracownik
		function Worker(godnosc, godziny, wyplata) {
			this.godnosc = pracownik;
			this.godziny = czas;
			this.wyplata = pensja;
		}
		// tworzenie pracownikow - obiektu, tworzenie tablicy obiektow
		{
			workers.push({
				godnosc: this.pracownik,
				godziny: this.czas,
				wyplata: this.pensja,
			});
		}

	}
	console.log(workers[10].godziny);
	console.log(workers[10]);
	console.log(workers[9]);
	sort(workers);
	console.log(workers);

};

function sort(workers) {




	workers.sort(function (a, b) {
		return a.godziny - b.godziny
	});
	console.log(workers);
}






document.getElementById('oblicz').addEventListener('click', function () {
	oblicz();
});
