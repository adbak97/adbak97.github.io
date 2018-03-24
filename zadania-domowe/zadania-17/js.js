function potega(podstawa, wykladnik) {
	if (Number(wykladnik) == 0) {
		console.log("1");
	} else {
		var suma = podstawa;
		for (i = 0; i < wykladnik - 1; i++) {
			suma *= podstawa;
		}
		console.log(suma);
	}
};
potega(2, 8);
