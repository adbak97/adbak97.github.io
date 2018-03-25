// wywołujemy naszą funkcję ajax(), zdefiniowaną poniżej, przekazując adres, metodę, i funkcję, która zwrócone dane zaloguje do konsoli :) 
ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function (data) {
	console.log(data);
})

// definicja funkcji ajax
function ajax(method, url, callback) {
	// utworzenie obiektu żadania http
	var httpRequest = new XMLHttpRequest();

	// otwarcie polaczenia - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
	httpRequest.open(method, url);


	// jesli status polaczenia zostal zmieniony -> httpReq.readyState
	// 0: połączenie nie nawiązane,
	// 1: połączenie nawiązane,
	// 2: żądanie odebrane,
	// 3: przetwarzanie,
	// 4: dane zwrócone i gotowe do użycia.
	httpRequest.onreadystatechange = function () {

		// jeśli 4: dane zwrócone i gotowe do użycia
		if (httpRequest.readyState == 4) {
			// sprawdź kod statusu połączenia - https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
			if (httpRequest.status == 200) {

				// dane zwrócone w string-u
				var returnData = httpRequest.responseText;
				// zmiana formatu danych do obiektu javascript (można odnosić się do właściwości po kropce, np. jsonObj.userName
				var jsonObj = JSON.parse(returnData);
				// wywołanie funkcji zwrotnej (callback), przekazanej do metody z zewnątrz
				callback(jsonObj);

				// zeruj obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
				httpRequest = null;
			}


		}
	}

	// wysłanie danych do serwera
	httpRequest.send();
}
