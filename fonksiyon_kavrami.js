let toplam = 0;
let toplam2 = 0;

for(let i = 0; i<=10; i++) {
    toplam = toplam + i;
}

for(let i = 30; i<=60; i++) {
    toplam2 = toplam2 + i;

}

let toplamA = belliAraliktakiSayilariTopla(0, 10);
let toplamB = belliAraliktakiSayilariTopla(30, 60);
let toplamC = belliAraliktakiSayilariTopla(40, 160);

console.log("toplam A:" + toplamA + " ve toplam2 :" + toplamB);

function belliAraliktakiSayilariTopla(baslangicSayisi, bitisSayisi) {

    let toplam = 0;
    for (let i = baslangicSayisi; i<= bitisSayisi; i++) {
        toplam = toplam + i;
    }
    console.log(("Toplam : " + toplam));
    return toplam;
}


selamVer();//Fonkisyonları istediğimiz yerde çağırabiliriz...

//10 ile 20 bu fonksiyonun argümanlarıdır.
let sayilarinToplami = sayilariTopla(10, 20);
console.log("Toplam: " + sayilarinToplami);

function selamVer() {

    console.log("Merhaba");
}

//parametre alan fonksiyon, sayi1 ve sayi2 parametredir...
function sayilariTopla(sayi1, sayi2) {
    console.log("Sayıların Toplamı: " + (sayi1 + sayi2));
    return sayi1 + sayi2; 
    // return hem ilgili değeri geri yollarken hem de ilgili fonkisyondan çıkışı sağlar.
} 

let sayi = 10;
console.log(sayi);

console.log(typeof sayi);
console.log(typeof sayilariTopla);

selamVer();