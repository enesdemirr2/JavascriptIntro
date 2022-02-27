//primitive

let yas = 32;
let yeniYas = yas;

yas = 40;

let isim = 'emre';
let yeniIsim = isim;
isim = 'hasan';

console.log(yas, yeniYas);
console.log(isim, yeniIsim);


//referans tipli array object

let renkler = ['kırmızı', 'yesil']; //renkler bellekte adres değerini tutuyor. Objelerde ve arrayler aynı mantıkla çalışır.
let yeniRenkler =  renkler;

renkler = ['kırmızı', 'yesil'];
renkler.push('mavi');

console.log(renkler, yeniRenkler);

let ogrenci = {
    ad: 'emre',
    yas : 32,
}

let yeniOgrenci = ogrenci;

ogrenci.yas = 36;

console.log(ogrenci, yeniOgrenci);