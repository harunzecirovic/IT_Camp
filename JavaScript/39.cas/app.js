// Rekurzija je pozivanje funkcije unutar iste
// mozew se postici efekat petlje

function ispis(n) {
    console.log(n)
    return n - 1 >0 ? ispis(n-1) :0
}
ispis(10)


// callback funkcija prestavlja funkciju koja se nadje 
// kao argument neke druge funkcije (metode)

// let talib = 'Talib'

// function main (func) {
//     console.log('Ovo je kod koji se izvrsava unutar glavne funkcije')
//     func(talib)
// }

// // callback funkcoija

// function callBack(arg1){
//     console.log(`Pozz,ja sam nov,moje ime je ${arg1} `)
// }
// main(callBack)

// Napraviti gl func koja ispisuje da je glavna a ispod 
// callback koja treba da izracuna ar sredinu 3 broja koji 
// su argumenti te callback func

let talib = 3
let harun = 1
let muusa = 2

function main (func) {
    console.log('Ovo je kod koji se izvrsava unutar glavne funkcije')
    func(talib,harun,muusa)
}

function callBack(arg1,arg2,arg3){
    suma = arg1+arg2+arg3
    zadnje = suma / 3
    console.log(`Aritmeticka sredina ova tri broja je ${zadnje}`)
}
main(callBack)