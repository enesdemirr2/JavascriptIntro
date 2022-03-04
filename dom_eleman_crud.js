const yeniListeELemani = document.createElement('li');

yeniListeELemani.className = 'liste-item';
yeniListeELemani.textContent = 'Yozgat';
yeniListeELemani.id = 'yeni-id';
yeniListeELemani.setAttribute('deger', 'yeni-deger');

document.querySelector('ul').appendChild(yeniListeELemani);
console.log(yeniListeELemani);

// replace 

const yeniKucukBaslik = document.createElement('h6');

yeniKucukBaslik.id = 'h6ID';
yeniKucukBaslik.textContent = 'Yeni Başlık';

const eskiBaslik = document.querySelector('h2');
const baslikParent = document.querySelector('body');
baslikParent.replaceChild(yeniKucukBaslik,eskiBaslik);
console.log(yeniKucukBaslik);

// remove
/*const listeItem = document.querySelector('li');
listeItem.remove();*/
//document.querySelector('ul').remove();

document.querySelector('ul').removeChild(document.querySelectorAll('li')[3]);

const textBolumu = document.querySelector('input');
document.querySelector('form').removeChild(textBolumu);

document.querySelector('form').removeChild(document.querySelector('input'));

//console.log(listeItem);

