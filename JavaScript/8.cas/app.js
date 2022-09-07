// 1.Prebrojati sve brojeve deljive sa 5 u intrervalu od 1 do n

// let s = 0;
// let z = 0;
// let n=Number(prompt('Unesite neki broj') )
// for (let x = 1; x<=n; x++) {
// if(isNaN(n) || n<1) {
//     console.log('Nije unijeta korektna vrijednost za broj')
// } else if (x % 5 === 0) {
//         z+=1
//         s+=x
//     }
// }
// console.log('Suma brojeva deljivih sa 5 od 1 do ' + n + ' je :' +s)
// console.log('Broj deljivih brojeva od 1 do ' + n + ' je :' +z)

// 2.Neka se izvrsi iteracija broja 99 do -99. Ispisati svaki broj deljiv
// sa 4 jedan ispod drugog u zbiru sa 14

// s = 14
// for (let x = 99; x>-99; x--) {
// if (x % 4 === 0) {
//     console.log(s+x)
//     }
// }

// 3.Izracunati aritmeticku sredinu brojeva deljivih sa 3
// Iteracija od 3 do 17

suma = 0
delilac = 0
for (let x = 3; x<18; x++) {
if (x % 3 === 0) {
    suma+=x
    delilac+=1
    }
}
console.log(suma/delilac)

// DOMACI
// 1. Korisnik unosi dva broja
// iteracija od manjeg do veceg
// izracunati aritmeticku sredinu brojeva deljivih sa 5

let s = 0;
let z = 0;
let x=Number(prompt('Unesite neki broj') )
let y=Number(prompt('Unesite neki broj') )
for (let x = 1; x<=n; x++) {
if(isNaN(n) || n<1) {
    console.log('Nije unijeta korektna vrijednost za broj')
} else if (x % 5 === 0) {
        z+=1
        s+=x
    }
}

// 2. Korisnik unosi broj iz intervala 12 do 15
// Na osnovu unteg broja iteracija se vrsi od njega do 1 
// Ispisati svaki br iz iteracije,njegov kvadrat i vrijednost br
// umanjenu za 25
// tri vrijednosti u redu

