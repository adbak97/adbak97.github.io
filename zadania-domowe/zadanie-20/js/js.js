function data() {


	for (var i = 0; i <= 19; i++) {
		var w = document.getElementById("pracownik" + (i + 1));
		var workHours = w.querySelector(".czas").value;
		var perHour = w.querySelector(".stawka").value;
		var wyplata = w.querySelector(".wyplata");
		var godnosc = w.querySelector(".pracownik").innerHTML;
		var salary = 0;
		var workersSalary = [];



		function Pracownicy() {

			//konstruktor obiektu pracownik

			function Worker(godnosc, godziny, wyplata) {
				this.godnosc = godnosc;
				this.godziny = workHours;
				this.wyplata = salary;
			}
			// tworzenie pracownikow - obiektu, tworzenie tablicy obiektow

			workers[i] = new Worker(godnosc, workHours, wyplata);


		}




	}

	function sort(workers) {

		console.log(workers);
		for (var i = 0; i < workers.length; i++) {

			for (var y = 0; y < workers.length - 1; y++) {

				if (workers[y + 1].godziny < workers[y].godziny) {
					var temp = workers[y];
					workers[y] = workers[y + 1];
					workers[y + 1] = temp;
				}
			}
		}
		return workers;







		console.log(workers);
		console.log(workers.length);
		console.log(workers[1].godziny);




	};


	if (workHours >= 100 && workHours <= 160) {
		salary = workHours * perHour;
		wyplata.innerText = salary;
		Pracownicy();

	}
	if (workHours > 160) {
		var nadGodzinki = (workHours - 160) * perHour;

		salary = (workHours * perHour) + nadGodzinki;
		wyplata.innerText = salary;
		Pracownicy();

	}
	if (workHours <= 100) {
		salary = workHours * perHour;
		wyplata.innerText = salary;

		w.style.background = "red";
		w.querySelector(".wyplata").style.background = "red";
		w.querySelector(".stawka").style.background = "red";
		w.querySelector(".czas").style.background = "red";
		Pracownicy();

	}





};









var workers = [];
var button = document.getElementById('oblicz');
button.addEventListener('click', function () {
	data();


});
