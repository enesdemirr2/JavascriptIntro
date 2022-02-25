let isimler = ["Emre", "Hasan", "Ayşe"];

console.log(isimler.toString());
console.log(isimler.join(" | "));

let diziELemanSayisi = isimler.push("Ali"); //Dizinin sonuna eleman ekler. +push metodu ile 
console.log(isimler.toString() + " dizinin eleman sayisi: " + diziELemanSayisi);

let dizidenCikarilanEleman = isimler.pop(); //Dizinin son elamanını siler.
console.log(isimler + " çıkarılan eleman: " + dizidenCikarilanEleman);


isimler.shift(); //Dizinin en başındaki elemanı siler. --sola kaydırma. Performans olarak daha iyi
console.log(isimler.toString());

isimler.unshift("Yeni eleman"); //Dizinin başına eleman ekler. --sağa kaydırma. Performans olarak daha iyi
console.log(isimler.toString());

delete isimler[1]; //Dizide istediğimiz indeksi silmeye yarar.
console.log(isimler.toString() + " " + isimler[1]);


let sayilar = [1, 2, 3, 4, 5, 6, 7, 8];

//8 elemandan başla hiçbir eleman silme(0) sonra bu diziye 9 ve 10 u ekle.
sayilar.splice(8,0, 9 , 10); //Hangi indeksten başlayacak, kaç tane indeks silecek sonrasında geriye string bir değer döndürür. 
console.log(sayilar.toString());

let silinenler = sayilar.splice(0,4, 15, 20, 25); // silinenlerin yerine 15,20,25 sayıları eklenir.
console.log(sayilar.toString());
console.log(silinenler.toString());

let tekSayilar = [1, 3, 5];
let ciftSayilar = [2, 4, 6];

let sayilarim = tekSayilar.concat(ciftSayilar); // +concat metodu dizileri birleştirir.
console.log(sayilarim);

let yeniDizi= sayilarim.slice(0,3);// 0. ve 3. indeksi arasındaki değerlerden bana yeni dizi üret anlamına gelir. 
console.log(yeniDizi.toString()+ "     " + sayilarim.toString());

