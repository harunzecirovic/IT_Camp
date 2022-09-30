// Js number metode

// toString() - metoda vraca br u string

let x = 55
let y = x.toString()
console.log(y)

// toExponential() vraca u XeY ciji tip je string (14e3)

let z = 14000
let w = z.toExponential()
console.log(w)
console.log(typeof w)

// toFixed() ce zaokruziti na onliko decimala koji broj 
// se nadje kao argument

let prom = 22.4569
let prom2 = prom.toFixed(2)
console.log(prom2)

// toPrecision() pretvara nas br u br koji ukupno ima onoliko
// cifara koliko se nadje kao argument

prom = 22.4569
let prom3 = prom.toPrecision(5)

// valueOff() vraca nam vrijednost datog argumenta

let prom4 = 25
console.log(prom4.valueOf())

// Globalne JS metode

// Mogu biti koristene na sve tipove podataka

// najpoznatije su:

// 1. Number() vraca nam br konvertovan iz argumenta

console.log(Number('41'))

// 2. parseFloat() analizira argument i vraca br u decimalnom 
// zapisu

console.log(parseFloat('41'))

// 3. parseInt analizira argument i vraca cio br

// Zadatak

function kvadrat() {
    const n = +prompt('Unesite manji broj')
    const m = +prompt('Unesite veci broj')
    let brojac = 0
    for(i=n;i<=m;i++){
        if(i % 2 === 0)
        brojac+=i**2
    }   return brojac
}
console.log(kvadrat())

// Domaci

