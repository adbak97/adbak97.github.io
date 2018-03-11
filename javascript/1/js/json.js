/*
Jesli w json mamy {} traktujemy to jako obiekt
Jesli w json mamy [] to traktujemy to jako tablice
 
*/


var jsonOsoby = {
	"osoby": [
		{
			imie: "Krystian",
			nazwisko: "Dziopa",
			wzrost: 180,
			oczy: "niebieskie",
			zainteresowania: [
				{
					nazwa: "podroze"
				},
				{
					nazwa: "gotowanie"
				}
            ]
        },
		{

			imie: "Dominik",
			nazwisko: "Gomuła",
			wzrost: 170,
			oczy: "brązowe",
			zainteresowania: [
				{
					nazwa: "gotowanie"
				},
				{
					nazwa: "języki"
				}
            ]
        },
		{
			imie: "Claudia",
			nazwisko: "Żelazowska",
			wzrost: 167,
			oczy: "brązowe",
			zainteresowania: [
				{
					nazwa: "programowanie"
				},
				{
					nazwa: "podroze"
				},
				{
					nazwa: "języki"
				}
            ]

        }
    ]
}


jsonOsoby.osoby.forEach(function (element, index) {
	console.log("Nazywam sie: " + element.imie + " " + element.nazwisko + "i mam " + element.oczy);
})

//Petla po obiektach
var obiekt = {
	imie: "Adam",
	nazwisko: "Nowak",
	wzrost: 182,
	oczy: "zielone",

}

for (var property in obiekt) {
	console.log(obiekt[property]);
}
for (var property in obiekt) {
	console.log("Nazwa własciwosci: " + property + "Wartosc wlasciwosci: " + obiekt[property]);
}
