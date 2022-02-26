function selamVer() {
    console.log("Merhaba ");
}

selamVer();

const selamVerDegisken = function () { //Değişkene fonkisyon ataması yapıldı.
    console.log("Merhaba selamVerDegisken"); 
}

selamVerDegisken();

const fatArrow = () => {

    console.log("Merhaba fatarrow");
}
fatArrow();

const fatArrowA = _ => { // Bu bir fonksiyon ama herhangi bir parametre almıyor

    console.log("Merhaba Fatarrow2 ");
}
fatArrowA();


function karesiniAl(sayi) {

    return sayi * sayi;
}

const karesiniAlDegisken = function (sayi) {
    return sayi * sayi;

}

console.log(karesiniAl(5));
console.log(karesiniAlDegisken(7));

const fatArrowParametreli = (sayi) => {
    return sayi * sayi;

};

console.log(fatArrowParametreli(8));


const fatArrowParametreliKisa = sayi => sayi * sayi;

console.log(fatArrowParametreli(9));

const sayilariTopla = (s1,s2) => s1 + s2; //<<- 51 - 59 arası bütün kodlar aynı amaca hizmet ediyor. Yani Fatarrow ile sadeleştirebliyoruz. 

const sayilariTopla2 = (s1,s2) => {
    return s1 + s2;
}

const sayilariTopla3 =  function (s1 ,s2) {
    return s1 + s2;
}

console.log(sayilariTopla(5,10));