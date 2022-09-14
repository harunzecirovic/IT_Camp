//Domaci
// Funlkcija trazi da korisnik unese rwcenicu,zatim funkcija vraca istu recenicu u vise oblika
//1. velikim slovima
//2. malim slovima
//3. pola velikim a pola malim(lenght)
//4. ako se nadje rijec skola nek bude zamijenjenja sa fax u cijeloj recenici
//5. neka bude ispisano prvih 10 karaktera
//6. zadnjih 10
// \ za novi red

const domaci = function (){
    let nekaRecenica = prompt('Unesite neku recenicu');
    let duzina = nekaRecenica.length;
    let pola = duzina / 2;
    let prviDio = nekaRecenica.substr(0, pola).toUpperCase()
    let drugiDio = nekaRecenica.substr(pola, duzina).toLowerCase()

    let prva = nekaRecenica.toUpperCase();
    let druga = nekaRecenica.toLowerCase();
    let treca = prviDio.concat(drugiDio)
    let cetvrta =nekaRecenica.replace(/skola/gi, 'fax');
    let peta = nekaRecenica.substring(0,10)
    let sesta = nekaRecenica.slice(-10, duzina)
    return prva.concat('\n',druga,'\n',treca,'\n',cetvrta,'\n',peta,'\n',sesta);
}

console.log(domaci())

