$(window).on("scroll", function () {
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
		pobierzDane();

	};

	window.load = pobierzDane();

	function pobierzDane() {
		$.ajax({
			url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
			dataType: "json",
			success: function (resultJSON) {

				var txt = $("<p></p>").append(resultJSON.userId);
				$("body").append(txt);
				var txt1 = $("<p></p>").append(resultJSON.userName);

				var txt2 = $("<p></p>").append(resultJSON.userURL);

				$("body").append(txt);
				$("body").append(txt1);
				$("body").append(txt2);


			},
			onerror: function (msg) {
				console.log(msg);
			}
		});
	}
});
