function bublesort(tablica) {


	for (var i = 0; i < tablica.length; i++) {

		for (var y = 0; y < tablica.length - 1; y++) {

			if (tablica[y + 1] < tablica[y]) {
				temp = tablica[y];
				tablica[y] = tablica[y + 1];
				tablica[y + 1] = temp;
			}
		}
	}
	return tablica;
}


var tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

console.log(bublesort(tablica));
