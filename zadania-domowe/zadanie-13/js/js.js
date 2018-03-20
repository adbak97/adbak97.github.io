var button = $('#button');
var square = $('#square');


button.on('click', function () {

	square.animate({
		left: "100px",
		width: "100px",
		height: "100px",



	}, 3000, function changeColor() {

		square.animate({
			backgroundColor: "blue",

		}, 5000, function iCykTekscik() {
			square.html("<h2>Animacja zakończona</h2>")
		});
	});

});
