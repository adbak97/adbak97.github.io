$(document).ready(function () {
	function silnia(n) {
		if (n == 0) {
			return 1;
		} else {
			return n * silnia(n - 1);
		}
	}
	console.log(silnia(5));
});
