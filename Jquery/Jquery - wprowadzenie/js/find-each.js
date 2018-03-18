$("div").find('p').css({
	fontSize: "60px",
	color: "red",
});

// metoda each 

$('p').each(function (index, element) {
	console.log(index, element);
	$(this).addClass('new_class').css({
		fontSize: "40px",
		backgroundColor: "yellow",
	});
});
