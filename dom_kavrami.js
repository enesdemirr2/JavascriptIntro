let deger;

deger = window;
deger = window.document;
deger = document.all;
//deger = document.all.length;

let dizi = Array.from(deger);

/*dizi.forEach(function(item) {
    console.log(item);
})*/

deger = document.head;
deger = document.body;
deger = document.domain;
deger = document.URL;
deger = document.contentType;

deger = document.forms[0].id;
deger = document.links[1].className;
deger = document.links[1].classList;

deger = document.images[0].getAttribute('src');

deger = document;

console.log(deger);
