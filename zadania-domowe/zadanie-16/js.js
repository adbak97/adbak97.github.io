function liczLiterki(slowo, litera) {
	var countString = 0;
	slowo.split("").forEach(function (element, index) {
		if (element === litera) {
			countString++;
		}
	});
	console.log(countString);
}
liczLiterki("Szkoła Programowania Akademia 108", "a");
