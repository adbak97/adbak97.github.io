var countSum = $('#count-sum');
var salary = $('.salary');
console.log(salary);
console.log(countSum);

countSum.on('click', function (e) {
	var pensja = 0;

	salary.each(function () {

		var hajs = Number($(this).text());
		console.log(hajs);
		pensja += hajs;
	});
	console.log(pensja);
	$('#sum').text(pensja);
});
