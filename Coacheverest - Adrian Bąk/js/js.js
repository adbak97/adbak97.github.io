$(document).ready(function () {

	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) { // this refers to window
			console.log('asdsad');
			$('nav ul').addClass("test");

		} else {
			$('nav ul').removeClass('test');
		}
	});

	$('#1').on("click", function () {

		$("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;


	})

	$('#2').on("click", function () {

		$("html, body").animate({
			scrollTop: 1001
		}, 1000);
		return false;


	})
	$('#3').on("click", function () {

		$("html, body").animate({
			scrollTop: 2020
		}, 1000);
		return false;


	})
	$('#4').on("click", function () {

		$("html, body").animate({
			scrollTop: 3050
		}, 1000);
		return false;


	})




});
