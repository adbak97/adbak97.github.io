//metoda find wyszukuje potomków selektora. W poniższym przykładzie poszuka paragrafów znajdujących sie w div.
//metoda find może wyszukiwać po tagu, klasie, id, atrybucie
$("div").find('p').css({
	fontSize: "60px",
	color: "red",
});

// metoda each - jako parametr przyjmuje funkcję zwrotną, która zostanie wykonana a każdym znalezionym elemencie

$('p').each(function (index, element) {
	console.log(index, element);
	$(this).addClass('new_class').css({
		fontSize: "40px",
		backgroundColor: "yellow",
	});
});
