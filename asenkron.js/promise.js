const myPromise = new Promise((resolve, reject) =>{

    // Uzun sürecek işlem buraya yazılır
    setTimeout(() => {
        //console.log("3 saniyelik işlem bitti");
        //resolve("3 saniyelik işlem bitti");
        //resolve({ ad: 'emre', id: 1});
        reject('İnternete çıkamadım');
    }, 3000);

});

myPromise
    .then(sonuc => { console.log(sonuc);})
    .catch(hata => { console.log(hata);});


function ogrencileriGetir() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dizi = [];

            for (let i = 0; i < 30; i++) {
                dizi.push({ad: "öğrenci" + (i+1), id:i+1})
            }

            //resolve(dizi)
            reject("Hata Çıktı");

        }, 2000)
    })
}

function ögrencileriYazdir(dizi) {
    console.log(dizi);
}

ogrencileriGetir()
     .then(ogrenciDizisi => ogrencileriYazdir(ogrenciDizisi))
     .catch(hataMesajı => console.log((hataMesajı)));


const promiseBasarili = Promise.resolve("Başarılı promis");
const promiseHata = Promise.reject("Hata çıktı")

promiseBasarili.then(snc => console.log(snc));

promiseHata
   .then(sonuc => console.log(sonuc))
   .catch(hata => console.log(hata));


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("3 saniyelik işlem bitti")
    }, 3000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("6 saniyelik işlem bitti")
    }, 6000);
})

Promise.all([p2,p1]) //Birlikte kullanma
   .then(sonuc => console.log(sonuc));

Promise.race([p1,p2]).then(sonuc => console.log(sonuc));
