let emre = { //obje tanımlanırken süslü parantez kullanılır.

    adi: 'Emre', // key: value ilişkisi.
    soyAdi: 'Altunbilek',
    dogumYili: 1988,
    evliMi: false,
    sevdigiRenkler: ['yesil', 'mavi'],

    yasiHesapla: function () {
        this.yas = 2020 - this.dogumYili;
    }
    
};

let hasan = {

    adi: 'Hasan',
    soyAdi: 'Yilmaz',
    dogumYili: 1978,
    evliMi: true,
    sevdigiRenkler: ['yesil', 'mavi'],

    yasiHesapla: function () {
        this.yas = 2020 - this.dogumYili;
    }
    
};

console.log(emre);
console.log(emre.dogumYili);
console.log(emre['dogumYili']);

emre.yasiHesapla();
console.log(emre.yas);

hasan.soyAdi = "yeni soyadı";
hasan['soyAdi'] = "yepyeni soyadı"

console.log(hasan);

let ogrenciler = [emre, hasan]; // Oluşturduğumuz objleri diziye atayabiliriz.
console.log(ogrenciler[0].dogumYili);


let ayse = new Object(null);
ayse.adi = "Ayşe";
ayse.dogumYili = 1995;
console.log(ayse);