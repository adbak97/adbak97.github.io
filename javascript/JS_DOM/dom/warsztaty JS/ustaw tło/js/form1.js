var form1 = document.getElementById("formularz");
console.log(form1);

function pobierzImie(event) {
	var form = document.getElementsByTagName("input");
	console.log(form);
	var firstName = form[0].value;
	var secondName = form[1].value;
	console.log(firstName);
	console.log(secondName);
	event.preventDefault();
}
