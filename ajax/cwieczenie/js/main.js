//htpps://blockchain.info/pl/ticker
var url = "https://blockchain.info/pl/ticker";
$(document).ready(function () {
	function pobierzBitcoin(url) {
		$.getJSON(url, function (data) {
			console.log(data);
		});
	}
});
