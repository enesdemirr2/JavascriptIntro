// for dongüsü
// for(ilk atama : dongu_calistirma_sarti_ : sarttan sonra ne olacak)

/*for(let i = 0; i  < 3; i++) {
    console.log("Benim adım emre");
    console.log("Nasılsın?");
}

for(let i=0, j=0; (i+j )<20; i=i+5, j= j+2) {
    console.log("Döngü çalıştı");
    console.log("i değeri: " + i + " j değeri: " + j);
} */

let sayi = 5;
while(sayi < 15) {
    console.log("Merhaba");
    sayi++; 
}

let yas = 20;

do {
    console.log("Do while merhaba");;
    yas++;
}while(yas<30);

//break - continue - return kullanımı

for(let i = 0; i<50; i++) {

    if(i == 12) {
        break;
    }

    console.log("Break kullanımı");
}


for(let i = 10; i <30 ; i++) {

    if(i == 15) {
        continue;
    }
    console.log("Continue  kullanımı " + i);
}



//for içinde return kullanımı. Sadece fonksiyon içindeyse olur.
//Aksi takdirde Illegal return statement hatası alınır.
for(let i = 0; i < 10; i++){

    if(i == 5) {
        //return;
    }
    console.log("Return kullanımı " + i);
}