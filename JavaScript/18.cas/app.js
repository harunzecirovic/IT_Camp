// DOMACI
// function papir() {
//     const s = +prompt('Unesite sirinu')
//     const d = +prompt('Unesite duzinu')
    
//     return ` Povrsina lista papira je ${d * s} `
//   }
//   console.log(papir())

// 1. Zadatak- Prebrojati koliko puta imamo slovo m u recenici

// function slovom() {
//     const recenica = prompt('Unesite recenicu')
//     let brojac = 0
//     let duzina = recenica.length
//     for (let i=0;i<duzina;i++)
//     if (recenica[i] === 'M' || recenica[i] === 'm'){
//         brojac+=1
//     }
//     return `Unijeta recenica sadrzi ${brojac} puta slovo m(M)`
// }
//   console.log(slovom())

// 2. Zadatak

// function brojevi() {
//     const recenicaa = prompt('Unesite recenicu')
//     let brojacc = 0
//     let duzinaa = recenicaa.length
//     for (let k=0;k<duzinaa;k++)
//     if (
//         recenicaa[k] === '0' ||
//         recenicaa[k] === '1' ||
//         recenicaa[k] === '2' ||
//         recenicaa[k] === '3' ||
//         recenicaa[k] === '4' ||
//         recenicaa[k] === '5' ||
//         recenicaa[k] === '6' ||
//         recenicaa[k] === '7' ||
//         recenicaa[k] === '8' ||
//         recenicaa[k] === '9' 
//     ) {
//         brojacc+=1
//     }
//     return `Unijeta recenica sadrzi ${brojacc} brojeva`
// }
//   console.log(brojevi())

// 3. Zadatak

// function malaSlova() {
//     const recenica = prompt('Unesite recenicu')
//     let brojac = 0
//     let duzina = recenica.length
//     for (let i=0;i<duzina;i++)
//     if (recenica[i] === recenica[i].toLowerCase() && recenica[i] != ' ' ){
//         brojac++
//     }
//     return `Unijeta recenica sadrzi ${brojac} malih slova`
// }
//   console.log(malaSlova())

// 4. Zadatak

function malaSlova() {
    const recenica = prompt('Unesite recenicu')
    let mala = 0
    let velika = 0
    let duzina = recenica.length
    for (let i=0;i<duzina;i++)
    if (recenica[i] === recenica[i].toLowerCase() && recenica[i] != ' ' ){
        mala++
    }else if (recenica[i] === recenica[i].toUpperCase() && recenica[i] != ' ' ){
            velika++
    }
    if (mala>velika)
    return `Unijeta recenica sadrzi vise malih slova`
    else if(mala<velika)
    return `Unijeta recenica sadrzi vise velikih slova`
    else
    return `Unijeta recenica sadrzi isti br malih i velikih slova`
}
  console.log(malaSlova())
