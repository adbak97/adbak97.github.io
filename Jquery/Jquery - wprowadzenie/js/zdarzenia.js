$(function () {

	$(".mylink").on('click', function (event) {

		event.preventDefault();
		$('body').css({
			backgroundColor: "yellow",
		});

	});


});

// a tutaj podpiecie wielu zdarzen

$("h1").on({

	"mouseenter": function () {
		$(this).css({
			textDecoration: "underline"
		});
	},

	"mouseleave": function () {
		$(this).css({
			textDecoration: "none"
		});
	},
});
