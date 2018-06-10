$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) { // this refers to window

			$('#myTopNav').addClass("test");
		} else {
			$('#myTopNav').removeClass('test');
		}
	});
	$('#1').on("click", function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	$('#2').on("click", function () {
		$("html, body").animate({
			scrollTop: $('#oferta').offset().top
		}, 1000);

		return false;
	});
	$('#3').on("click", function () {
		$("html, body").animate({
			scrollTop: $('#kontakt').offset().top
		}, 1000);
		return false;
	});
	$('#4').on("click", function () {
		$("html, body").animate({
			scrollTop: $('#kim').offset().top
		}, 1000);
		return false;
	});
});

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
