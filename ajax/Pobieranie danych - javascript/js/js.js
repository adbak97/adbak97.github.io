document.getElementById("guziczek").addEventListener('click', function (e) {
	e.preventDefault();


	pobierzDane("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function (data) {


		var pUserId = document.createElement('p');
		var pUserName = document.createElement('p');
		var pUserURL = document.createElement('p');
		var pUserIdContent = document.createTextNode('UserId: ' + data.userId);
		var pUserNameContent = document.createTextNode('User Name: ' + data.userName);
		var pUserURLContent = document.createTextNode('UserId: ' + data.userURL);

		pUserId.appendChild(pUserIdContent);
		pUserName.appendChild(pUserNameContent);
		pUserURL.appendChild(pUserURLContent);

		document.body.appendChild(pUserId);
		document.body.appendChild(pUserName);
		document.body.appendChild(pUserURL);




	})
});





// definicja funkcji ajax
function pobierzDane(method, url, callback) {
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
