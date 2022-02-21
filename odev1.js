/*
Ödev1 
Bir değişken oluşturun ve bu değişkende saniye değerini tutun.
Sonra bu saniye değerinin kaç dakika ve saniyeye denk geldiğini yazdırın.
Örnek 1200 değeri için 20 dakika 0 saniye yazmalıdır. */


/*let saniyeString =  prompt("Saniye değeri giriniz: ", "100");
let saniye = parseInt(saniyeString);

let dakika = parseInt((saniye / 60), 10);
let kalanSaniye = saniye % 60;

console.log(typeof saniye); 
console.log(`Girdiğiniz ${saniye} değeri : ${dakika} dakika ve ${kalanSaniye} saniyedir.` ); */

//---------------------------------------------------------------------------------------------------------------------------------------

/* 
Ödev2 
Bir değişken oluşturun ve bu değişkende fahrenheit cinsinden sıcaklığı saklayın.
Sonrasında bu değerin kaç Celcius olduğunu hesaplayın.
100 değeri için 37.777778 gibi bir değer elde etmelisiniz.
Hesaplama formulü : celcius =  5/9 * (fahrenheit - 32)
*/

/*let girilenFahrenheitString = prompt("Fahrenheit cinsinden değeri girin: " , "100");
let fahrenheit = parseInt(girilenFahrenheitString);

let celcius = (5 / 9) * (fahrenheit - 32) ;
console.log(`Girdiğiniz ${fahrenheit} değeri : ${celcius.toFixed(2)} celcius derecesine eşittir.`);*/



// ---------------------------------------------------------------------------------------------------------------------------------------


/*
Ödev3 
Bir yıl değerinin artık yıl olup olmadığını hesaplayın.
Bir yılın artık yıl olması için ya 400 ile modu 0 olmalı ya da 4 ile modu 0 olmalı ve de 100 ile 
modu 0 olmamalı.
4100 false değeri vermeli.
*/

let girilenYil = parseInt(prompt("Yıl değerini giriniz: ", "2020"));     
let artikYilMi = ( (girilenYil % 400 == 0) || (girilenYil % 4 == 0 && girilenYil % 100 != 0 ) );
console.log("Girilen " + girilenYil + " artık yıl mı ? :" + artikYilMi);