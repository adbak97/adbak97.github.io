var firstPosition = $('#firstPosition');
var secondPosition = $('#secondPosition');
firstPosition.on('click', function () {
	$('p:first').before($('p:last'));
})
secondPosition.on('click', function () {
	$('p:last').after($('p:first'));
})
