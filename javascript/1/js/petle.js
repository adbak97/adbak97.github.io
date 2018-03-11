/*
for (var i = 1; i <= 10; i++) {
	console.log("Iteracja nr: " + i);

}
*/

var tablica = ["Volvo", "Mazda", "Honda", "Audi"];

/*
for (var i = 0; i < tablica.length; i++) {
	console.log(tablica[i]);
}
*/

/*
tablica.forEach(function (element, index) {

	console.log("Index: " + index + " Element: " + element);
});
*/

var iter = 0;
/*while (iter < 23) {
	console.log("While iteracja nr: " + iter)
	iter++;
}*/

/*
do {
	console.log("while iteracja nr: " + iter);
	iter++;
} while (iter <= 25)
*/
//break and continue

for (var i = 1; i < 15; i++) {
	if (i > 6) {
		break;
	} else {
		console.log("obrót pętli nr: " + i);
	}
}
for (var i = 1; i < 15; i++) {
	if (i == 4 || i == 6 || i == 10) {
		continue;
	} else {
		console.log("obrót pętli nr: " + i);
	}
}
