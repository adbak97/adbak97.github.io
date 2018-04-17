$("#animate").on('click', function () {


			//	$('h1').hide(4000).show("fast");

			//$("h1").fadeOut(3000).fadeIn("slow");
			//$("h1").slideUp(6000).slideDown("slow");

			$("h1").animate({

					"left": "300px",
					"top": "100px",

				},
				2500,


				/*function () {
					$('h1').animate({
							"left": "0px",
							"top": "0px",
						},




					});*/
			);
