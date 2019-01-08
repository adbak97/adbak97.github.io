$(document).ready(function () {
	$(".img-zoom").mouseenter(function (event) {
		var path = this.currentSrc;
		var currentWidth = this.width;
		var currentHeight = this.height;
		var path = this.currentSrc;
		var currentWidth = this.width;
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var newWidth = currentWidth * 1.5;
		var newHeight = currentHeight * 1.5;
		var running = false;
		//   console.log(windowWidth);
		//   console.log(windowHeight);
		//   console.log(currentHeight);
		var img = $('<img />').attr({
			"src": path,
			"class": "zoomed"
		}).appendTo("body").css({
			'width': currentWidth * 1.5,
			'position': 'absolute',
		});


		//		Pierwszy przypadek(lewa góra)

		if (event.pageX + newWidth > windowWidth && event.pageY + newHeight > windowHeight) {
			var windowWidth = $(window).width();
			var windowHeight = $(window).height();
			var currentWidth = this.width;
			var currentHeight = this.height;
			var newWidth = currentWidth * 1.5;
			var newHeight = currentHeight * 1.5;
			console.log("1-wszy przypadek");

			$(".img-zoom").mousemove(function (event) {

				$(".zoomed").css({
					'top': event.pageY - newHeight + 10,
					'left': event.pageX - newWidth + 10,
				});

			});



		}
		//Drugi przypadek (prawa góra)	
		else if (event.pageX + newWidth < windowWidth && event.pageY + newHeight > windowHeight) {
			var windowWidth = $(window).width();
			var windowHeight = $(window).height();
			console.log("2-gi  przypadek");
			$(".img-zoom").mousemove(function (event) {

				$(".zoomed").css({
					'top': event.pageY - newHeight + 10,
					'left': event.pageX + 10,
				});
			});

		}
		//Trzeci przypadek (lewy dół)	
		else if (event.pageX + newWidth > windowWidth && event.pageY + newHeight < windowHeight) {
			var windowWidth = $(window).width();
			var windowHeight = $(window).height();
			console.log("3-ci przypadek");
			$(".img-zoom").mousemove(function (event) {
				$(".zoomed").css({
					'top': event.pageY + 10,
					'left': event.pageX - newWidth + 10,
				});
			});



		}
		//Czwarty przypadek (prawy dół)	
		else if (event.pageX + newWidth < windowWidth && event.pageY + newHeight < windowHeight) {

			var windowWidth = $(window).width();
			var windowHeight = $(window).height();
			console.log("Czwarty przypadek (prawy dół)");
			console.log("4-ty  przypadek");
			$(".img-zoom").mousemove(function (event) {
				$(".zoomed").css({
					'top': event.pageY + 10,
					'left': event.pageX + 10,
				});
			});
		} else {
			return false;
		}





		$(".img-zoom").mouseleave(function () {
			$(".zoomed").remove();
		});
	});
});
