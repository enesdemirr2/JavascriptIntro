console.log("Başladı");

//ogrencileriGetir(ogrencileriYazdir); 

ogrencileriGetir(function (ogrencilerDizisi){ // 2 farklı biçimde çağırabiliriz
    console.log(ogrencilerDizisi);
});


console.log("Bitti");

function ogrencileriGetir(callback) {
    
    setTimeout(function () {
        const dizi = [];

        for(let i = 0; i <30; i++){
            dizi.push({ad: "öğrenci " + (i+1), id:i+1})
        }

        callback(dizi);
    }, 3000);
}

function ogrencileriYazdir(ogrencilerDizisi) {
    console.log(ogrencilerDizisi);
}

