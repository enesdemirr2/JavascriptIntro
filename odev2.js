/*Math.random() ile rastgele sayı üretebilirsiniz. Bu fonksiyon 0 dahil - 1 hariç
bir değer üretir mesela 0.56 gibi. Sonrasında bu ifadenin sonucunu istediğiniz
aralığın üst sınırlarıyla çarparsanız verilen aralkıkta sayı üretmiş olursunuz.

Mesela 0 ile 10 arasında bir sayı için (Math.random() * 10)+1 size 1 ile 10
arasında ki 10 da dahil sayı üretmiş olur. 

Üretilen bu sayı ondalıklı olabilir bunu tam sayıya dönüştürmek için Math.floor()
kullanabilirsiniz.

Küçük bir piyango oyunu tasarlayınız. Sistem iki basamaklı bir sayı üretmeli.
Kullanıcıdan da bu sayıyı tahmin etmesini istemelisiniz.

Eğer kullanıcı sayıyı tam doğru bilirse 10000 TL;
Eğer kullanıcı sayının basamaklarını bilirse 65 yerine 56 yazmışsa 5000TL;
Eğer kullanıcı şanslı numaranın sadece basamağını bilirse 1000TL kazanır. */

let uretilenSayi = (Math.random() * 90) + 10;//74.4568
console.log("Üretilen ondalıklı sayı: " + uretilenSayi);
uretilenSayi = Math.floor(uretilenSayi);//74 
let kullanicininGirdigiSayi = parseInt(prompt("İki basamaklı bir sayı giriniz" , "10")) ;

let uretilenSayiBirlerBasamagi = uretilenSayi % 10;
let uretilenSayiOnlarBasamagi = Math.floor(uretilenSayi / 10);

console.log(`Üretilen sayının birler basamağı ${uretilenSayiBirlerBasamagi} 
onlar basamagı: ${uretilenSayiOnlarBasamagi}`);


let kullanicininGirdigiSayiBirlerBasamagi = kullanicininGirdigiSayi % 10;
let kullanicininGirdigiSayiOnlarBasamagi= Math.floor(kullanicininGirdigiSayi / 10);

console.log(`Kullanıcının giridiği sayının birler basamağı ${kullanicininGirdigiSayiBirlerBasamagi} 
onlar basamagı: ${kullanicininGirdigiSayiOnlarBasamagi}`);


console.log(`Sistemin ürettiği sayı ${uretilenSayi} kullanıcın girdiği sayı ${kullanicininGirdigiSayi}`);

if(uretilenSayi == kullanicininGirdigiSayi) {

    console.log("Tebrikler 10000 TL kazandınız... Tahmininiz: " + kullanicininGirdigiSayi + " Üretilen: " + uretilenSayi);
} 
else if(uretilenSayiBirlerBasamagi === kullanicininGirdigiSayiOnlarBasamagi && uretilenSayiOnlarBasamagi ===
kullanicininGirdigiSayiBirlerBasamagi){

    console.log("Tebrikler 5000 TL kazandınız.... Tahmininiz: " + kullanicininGirdigiSayi + " Üretilen: " + uretilenSayi);
}
else if(uretilenSayiBirlerBasamagi === kullanicininGirdigiSayiBirlerBasamagi || uretilenSayiOnlarBasamagi ===
kullanicininGirdigiSayiOnlarBasamagi) {

    console.log("Tebrikler 1000 TL kazandınız... Tahmininiz: " + kullanicininGirdigiSayi + " Üretilen: " + uretilenSayi);
}
else {

    console.log("Maalesef kazanamadınız... Tahmininiz: " + kullanicininGirdigiSayi + " Üretilen: " + uretilenSayi);
}