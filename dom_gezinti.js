let deger;

const myListe = document.querySelector('ul.liste');
console.log(myListe);

deger = myListe.childNodes;
deger = myListe.childNodes[1].nodeType;
//1 element
//3 Text
//8 Yorumlar

deger = myListe.firstChild;
deger = myListe.firstElementChild;

deger = myListe.lastChild;
deger = myListe.lastElementChild;

deger = myListe.childElementCount;

//parent element
deger = myListe.parentNode;
deger = myListe.parentElement.parentElement;

const myInput = document.querySelector('input');
console.log(myInput.parentElement.parentElement);

//Komşuluk durumu -sibling

deger = document.querySelector('li').nextElementSibling.nextElementSibling.previousElementSibling.previousElementSibling;

console.log(deger);