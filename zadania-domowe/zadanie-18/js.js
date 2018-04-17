function sort(tablica) {

	for (var i = 0; i < tablica.length; i++) {

		var temp = tablica[i];
		var j = i - 1;
		while (j >= 0 && tablica[j] > temp) {
			tablica[j + 1] = tablica[j];
			j--;
		}
		tablica[j + 1] = temp;
	}
	return tablica;

}
var tab = [23.01, 21312, 324, 1, 4, 1, 4, 1, 4, 123, 12, 4, 1, 4, 32, 5, 46, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
console.log(sort(tab));
