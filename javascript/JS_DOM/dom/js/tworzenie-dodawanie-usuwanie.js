//pobieram instniejacy element
var istniejacyWezel = document.getElementById("output");

//tworze nowy element HTML
var newElement = document.createElement("p");

//tworze trescia paragraf
var newElementContent = document.createTextNode("Tutaj tworzę treść paragrafu");

//wstawiam nowo utworzony tekst do nowo utworzonego paragrafu

newElement.appendChild(newElementContent);

//dodaje do paragrafu atrybut class="text"

newElement.setAttribute('class', 'text paragrafu');
//wstawiam nasz przygotowany paragraf do div#output
console.log(istniejacyWezel);
istniejacyWezel.appendChild(newElement);

//usuwanie elementow z dokumentu

istniejacyWezel.parentElement.removeChild(istniejacyWezel);


//insertBefore


var link = document.getElementsByClassName('superlink')[0];
var br = document.createElement("br");
link.parentElement.insertBefore(br, link);

link.removeAttribute('class');
