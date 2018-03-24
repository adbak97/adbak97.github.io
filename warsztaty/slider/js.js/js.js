var slideShow = $('.slide-show');
var slideCount = $('.single-slide').length;
var slideWidth = 100 / slideCount;
var slideIndex = 0;


console.log(slideCount + "00%");
$('.slide-show').css({
	"width": slideCount + "00%",

});
$('.slide-show').find('.single-slide').css({
	"width": slideWidth + "%",

});
$('.slide-show').find('.single-slide').each(function (index) {

	test = slideWidth * index;
	$(this).css({

		marginLeft: slideWidth * index + '%',


	})


});
/*
$('.next-slide').click(function () {
	console.log("dziala?");
	slide(slideIndex - 1);
})
$('.next-slide').click(function () {
	slide(slideIndex + 1);
})
*/

$('.next-slide').on('click', function () {
	console.log("dziala?");
})


function slide(newSlideIndex) {
	if (newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
		return;

		var newMarginLeft = (newSlideIndex * (-100)) + '%';

		slideShow.animate({
			'margin-left': newMarginLeft
		}, 800, function () {
			slideIndex = newSlideIndex;
		})



	}

}
