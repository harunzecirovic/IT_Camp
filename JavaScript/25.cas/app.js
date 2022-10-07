// DOMACI

// iZRACUNATI razdaljinu izmedju dvije tacke ako imamo kordinate


// const range = () => {
// let x1 = +prompt('Unesite x kordinatu tacke A')
// let x2 = +prompt('Unesite x kordinatu tacke B')
// let y1 = +prompt('Unesite y kordinatu tacke A')
// let y2 = +prompt('Unesite x kordinatu tacke B')
// const rastojanje = Math.sqrt(Math.pow(x2-x1, 2))+(Math.pow(y2-y1, 2))
// const rastKon = rastojanje.toFixed(2)
// return `Rastojanje izmedju tacke A i tacke B je ${rastKon}`
// }
// console.log(range())

// JS datumi

// Datumi se prave uz sintaksu:

new Date()

// Postoje 4 nacina za upisivanje datuma

// 1. new Date() - on pise sam trenutno vrijeme

let datum = new Date ()
console.log(datum)

// 2. new Date(godina, mjesec, dan, sat, minut, sekunda, milisekunda)

let datumm = new Date (2004, 9, 19, 5 , 43, 32, 23)
console.log(datumm)
// Meseci pocinju od 0 i pise se jedan manje,sahat smanjuje za 2
let datume = new Date (2004, 8, 19, 7 , 43, 32, 23)
console.log(datume)

// 3. new Date(milisekunde) - dodaju se milisekunde na 1970

let datum2 = new Date(1)
console.log(datum2)

// 4. new Date(date string)

let datum3 = new Date('2015-03-25')
console.log(datum3)

// Ako za godinu stavimo samo dvije cife on dodaje 19

// JS pamti brojeve po broju milisekundi

// Prikazivanje datuma:

// Postoji nekoliko metoda za prikazivanje datuma. Sintaksa je:

// 1. datum.toString()
datum3 = new Date(20,7,21)
console.log(datum3.toString())

// 2. datum.toUTCString()
console.log(datum3.toUTCString())

// 3. datum.toDateString()
console.log(datum3.toDateString())

// 4. datum.toISOString()
console.log(datum3.toISOString())


// Date.parse(datum) - vraca razliku u ms izmedju datuma koji
// smo stavili i 1970


// Postoje metode za dobijanje parametara nekog datuma
//kao i za mijenjanje

// console.log(Date.parse(trenutno))

// Get date metode

// 1. getFullYear()

let trenutno = new Date()
console.log(trenutno.getFullYear)

// 2. getMonth()

// 3. getDate()

// 4. getHours()

// 5. getMinutes()

// 6. getSeconds()

// 7. getMiliseconds()

// 8. getTime() - broj ms izmedju 1970 i datuma argumenta

console.log(trenutno.getTime)
console.log(Date.parse(trenutno))

// 9. getDay() - vraca dan u nedelji od 0 do 6

// Date.now()

console.log(Date.now())


// Set Date metode

// 1. setFullYear()

tr = new Date()
let setYear = trenutno.setFullYear(2017)
console.log(tr)

// 2. setMonth()

// 3. setDate()

// 4. setHours()

// 5. setMinutes()

// 6. setSeconds()

let setSec = trenutno.setSeconds(12)
console.log(tr)

// 7. setMiliseconds()

// DOMACI





