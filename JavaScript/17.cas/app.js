// DOMACI

// const pokloni = () => pokloni 
// const cokoladicapoklon = +prompt('Unesite broj cokoladica u poklonu')
// const ukupnocokoladica = +prompt('Unesite ukupan broj cokoladica')

// if (isNaN(cokoladicapoklon) || isNaN(ukupnocokoladica){
//     return('Nije unijeta korektna vrijednost')
// }
// // else if ()

// startsWith() vraca boolen da li recenica pocinje tom rijecju

let recenica = 'provera stringa'
console.log(recenica.startsWith('provera'))

// endsWith() proverava jel to karj

console.log(recenica.endsWith('inga'))

// JS TEPLATE  LITERALS
// BACK-TICKS ``
// 1.Mozemo ga koristit umesto navodnika

let recenica2 = 'Danas je bilo pravo `jesenje` vrijeme'

// 2.Mozemo ga koristi da bez problema demo u novi red
let recenica3 = `'Nije bilo ubojstava u Buči, ne postoje grobnice u Izjumu,
otkrivene nakon što su ukrajinske snage munjevito oslobodile Harkivsku oblast
(nije loše napomenuti, nekad proruski nastrojenu). Sve je to laž, tvrdi Dmitrij Peskov,
glasnogovornik Kremlja, i to će oni dokazati. Nije isključeno i da će jednom morati
jer je češki ministar vanjskih poslova Jan Lipavský u subotu zatražio da se što je
prije moguće uspostavi posebni međunarodni sud za suđenje zbog ratnih zločina nakon
otkrića masovnih grobnica kod Izjuma. Češka predsjeda Vijećem EU u ovoj polovini
godine, piše Jutarnji.hr.'`

// 3.Interpolacija odnosno mozemo pisati string u kombinaciji sa varijablama
let a = 10
let b = `Prva vrijednost je ${a}, a druga je $`
console.log(b)


// 1. Zadatak

const duzina = (inch) => {
    return ` Duzina u metrima je ${inch*2.54} `
}

console.log(duzina(40))

// 2. Zadatak

function teren() {
  const s = +prompt('Unesite sirinu')
  const d = +prompt('Unesite duzinu')
  return ` Duzina koju fudbaler treba da pretrci je ${d * 2 + s * 2} `
}
console.log(teren())

