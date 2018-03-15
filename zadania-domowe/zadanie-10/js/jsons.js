var workers = {
	"pracownicy": [
		{
			"firstName": "Krystian",
			"lastName": "Dziopa"
		},
		{
			"firstName": "Anna",
			"lastName": "Szapiel"
		},
		{
			"firstName": "Piotr",
			"lastName": "Żmuda"
		}
    ]
}
console.log(workers);
workers.pracownicy.forEach(function (element, index, ) {
	console.log(element.firstName + " " + element.lastName + " " + index);


});
