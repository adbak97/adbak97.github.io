function sort(tablica) {
	var d = tablica;
	var N = d.length;
	var pmin, tmp;
	for (var i = 0; i < N - 1; i++) {
		pmin = i;
		for (j = i + 1; j < N; j++)
			if (d[j] < d[pmin]) pmin = j;
		tmp = d[pmin];
		d[pmin] = d[i];
		d[i] = tmp;
	}
	return tablica;
}
var tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
console.log(sort(tablica));
