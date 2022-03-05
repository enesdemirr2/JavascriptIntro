const btnTextGetir = document.getElementById("btn-text-getir");
const btnJSONGetir = document.getElementById("btn-json-getir");
const btnApidenJSONGetir = document.getElementById("btn-apiden-json-getir");
const btnJSONEkle = document.getElementById("btn-json-veri-ekle");



btnTextGetir.addEventListener('click', getText);
btnJSONGetir.addEventListener('click', getJSON);
btnJSONEkle.addEventListener('click', jsonVeriEkle);
btnApidenJSONGetir.addEventListener('click', getJSONfromAPI);


const sonucDiv = document.getElementById('sonuc');

function getJSON(e) {
    e.preventDefault();

    fetch('ogrenciler.json')
        .then(response => response.json())
        .then(sonuc => {
            let cikti = '';
            sonuc.forEach(ogr => {
                cikti += `ogrenci adi: ${ogr.ad} id: ${ogr.id} \n`
            })
            sonucDiv.innerText = cikti;
        });
}



function getText(e) {
    e.preventDefault();

    const fethSonuc = fetch('deneme.txt');
    fethSonuc.then((response) => {
        const responseText = response.text();
        responseText.then(sonuc => {
            console.log(sonuc);
        })
    });

    console.log(fethSonuc);


    fetch('deneme.txt')
        .then(response => response.text())
        .then(sonuc => sonucDiv.innerText=sonuc)
        .catch(hata => console.log(hata));
}

function getJSONfromAPI(e) {
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(sonuc => ekranaYazdir(sonuc));
}

function ekranaYazdir(data) {
    let cikti = '';
    data.forEach(user => {
        cikti += `<li>${user.name}</li>`
    });
    sonucDiv.innerHTML = cikti;
}

function jsonVeriEkle(e) {
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'deneme',
            body: 'body alanı',
            userID: 5
        }),
        headers: { 'Content-Type': 'application/json'}
    })
        .then(response => response.json())
        .then(sonuc => console.log(sonuc));
}


async function jsonVeriEkle(e) {
    e.preventDefault();

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'deneme',
            body: 'body alanı',
            userID: 5
        }),
        headers: { 'Content-Type': 'application/json'}
    })
    
    const sonuc = await response.json();
    console.log(sonuc);
} 