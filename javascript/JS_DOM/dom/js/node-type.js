var parFirst = document.getElementById("parFirst");
var parFirstNodes = parFirst.childNodes;

console.log(parFirstNodes);
for (var i = 0; i < parFirstNodes.lengt; i++) {

	if (parFirstNodes[i].nodeType == 1) {
		console.log(parFirstNodes[i]);
	}



}
