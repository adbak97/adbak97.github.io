$(document).ready(function () {

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) { // this refers to window
			$('#main-nav').addClass("test");

		}
	});


});
