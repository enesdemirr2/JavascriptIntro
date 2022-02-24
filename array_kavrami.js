// Verileri bir arada tutan yapılara array dizi denir. 

let arabaMarka1 = "Mercedes";
let arabaMarka2 = "Audi";
let arabaMarka3 = "BMW";

let arabaMarkalari = ["Mercedes", "Audi", "BMW"];
console.log(arabaMarkalari);
console.log(arabaMarkalari[0]);

arabaMarkalari[2] = "Peugeot";
arabaMarkalari[3] = "Honda";
arabaMarkalari[4] = "Citroen";

arabaMarkalari[8] = "Suzuki";
console.log(arabaMarkalari);
console.log(arabaMarkalari.length);

// en büyük indeks, dizi eleman sayısının bir eksiğidir.

console.log("araba dizisi: " + arabaMarkalari.toString());

for(let i = 0; i < arabaMarkalari.length; i++){

    console.log(arabaMarkalari[i]);
}

for(let oankiDiziElemani of arabaMarkalari) {

    console.log(oankiDiziElemani);
}

//Bir dizide farklı türde veri türlerini saklayabiliriz.
let yeniDizi = [1, "Emre", true];
for(let oankiDiziElemani of yeniDizi) {
    console.log(oankiDiziElemani);
}

