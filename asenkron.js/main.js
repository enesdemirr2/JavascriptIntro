// Asenkron çalışma mantığı
console.log("başladı");

setTimeout(function () {
    console.log("5 saniyelik işlem bitti");
}, 5000);

setTimeout(function () {
    console.log("0 saniyelik işlem bitti");
}, 0);

console.log("bitti");