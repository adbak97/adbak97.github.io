function data() {
	var workers = [];

	for (var i = 1; i <= 20; i++) {
		var w = document.getElementById("pracownik" + i);
		var workHours = w.querySelector(".czas").value;
		var perHour = w.querySelector(".stawka").value;
		var wyplata = w.querySelector(".wyplata");
		var godnosc = w.querySelector(".pracownik").innerHTML;
		var salary = 0;
		var workersSalary = [];



		function Pracownicy() {

			//konstruktor obiektu pracownik

			function Worker(godnosc, godziny) {
				this.godnosc = godnosc;
				this.godziny = workHours;
			}
			// tworzenie pracownikow - obiektu, tworzenie tablicy obiektow
			workers[i]= new Worker+i(godnosc, workHours);
		}
		
		function trzechNajlepszych{
			
			
			
			
			
		}


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


	}

	console.log(workers);
	console.log(workers[2]);







}








var button = document.getElementById('oblicz');
button.addEventListener('click', function () {
	data();
});
