function data() {
	for (var i = 1; i <= 20; i++) {
		var w = document.getElementById("pracownik" + i);
		var workHours = w.querySelector(".czas").value;
		var perHour = w.querySelector(".stawka").value;
		var wyplata = w.querySelector(".wyplata");
		var salary = 0;

		function theBest() {
			var salaryWorkers = document.querySelectorAll(".wyplata");
			console.log(salaryWorkers);
			console.log("salaryWorkers");
		}

		if (workHours >= 100 && workHours <= 160) {
			salary = workHours * perHour;
			wyplata.innerText = salary;
			theBest();
		}
		if (workHours > 160) {
			var nadGodzinki = (workHours - 160) * perHour;

			salary = (workHours * perHour) + nadGodzinki;
			wyplata.innerText = salary;
			theBest();
		}
		if (workHours <= 100) {
			salary = workHours * perHour;
			wyplata.innerText = salary;

			w.style.background = "red";
			w.querySelector(".wyplata").style.background = "red";
			w.querySelector(".stawka").style.background = "red";
			w.querySelector(".czas").style.background = "red";
			theBest();

		}

		function theBest() {
			var employeesSalary = document.querySelector(".wyplata").value;
			console.log(employeesSalary);
		}
	}


}
/*console.log(workHours);
console.log(perHour);*/




var button = document.getElementById('oblicz');
button.addEventListener('click', function () {
	data();
});
