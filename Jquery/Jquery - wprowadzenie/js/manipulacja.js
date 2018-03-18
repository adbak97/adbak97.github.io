$(function () {


	//pobieranie tekstu
	var textParagrafuId = $("#paragraf").text();
	console.log(textParagrafuId);

	//ustawienie tekstu

	$('#paragraf').text("Nowy tekst ustawiony metoda tekst");

	console.log(textParagrafuId);

	//dodawanie HTML 

	$(".paragrafnext").html("<strong>Tutaj nowa tresc </strong>")
	//dodawanie tresci na koncu selektroa

	$(".paragrafnext").append("Nowa treść na końcu selektora");

	//dodawanie tresci za selektorem

	$(".paragrafnext").after("<h6>Nowy element za selektorem</h6>")

	//usuwanie elementu wraz z zawartoscia

	$(".paragrafnext").remove();
	//usuwanie tylko zawartosci elementu 

	$("div").empty();

	//dodawanie pojedynczego stylu CSS 

	$("div").css("background-color", "red");
	//dodawanie wielu  styli CSS 
	$("div").css({

		width: "600px",
		height: "120px",
		backgroundColor: "lime",

	});



	//dodawanie klasy
	$("h1").addClass("nowa_klasa");

	//dodawanie atrybutów

	$("h1").attr("title", "Główny tytuł ustawiony za pomocą Jquery");








});
