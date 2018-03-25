$('#pobierz').on('click', function () {
	color();
	pobierzDane();
});
var newBuy = 0;
var oldSell = 0;

function pobierzDane() {
	$.ajax({
		url: "https://blockchain.info/pl/ticker",
		dataType: "json",
		success: function (resultJSON) {
			console.log(resultJSON.PLN);
			$("#kupno").text(parseFloat(resultJSON.PLN.buy));
			$("#sprzedaz").text(resultJSON.PLN.sell);
			newBuy = resultJSON.PLN.buy;
			oldSell = resultJSON.PLN.sell;
		},
		onerror: function (msg) {
			console.log(msg);
		}
	});
};

function color() {
	console.log(newBuy);
	var oldBuy = $('#kupno').text();

	console.log(oldBuy);
	var oldSell = $('#sprzedaz').text();

	console.log(oldSell);
	if (oldBuy > $('#kupno').text()) {
		console.log("old baj jest wieksza");
	} else if (oldBuy == $('#kupno').text()) {
		console.log("remis");
	} else {
		console.log("nie jest wieksza")
	}
}
