// DOMACI

// function teren() {
//     const d = +prompt('Unesite duzinu')
//     const s = +prompt('Unesite sirinu')
//     const r = +prompt('Unesite razmak')
//     let obim = 2*d + 2*s + 8*r
//     if (isNaN(d) || isNaN(s) || isNaN(r)){
//         return `Unijete vrijednosti moraju biti brojevi`
//     } else if (d<90 || d>120){
//         return ` Duzina terena mora biti izmedju 90 i 120`
//     } else if (s<45 || s>90){
//         return ` Sirina terena mora biti izmedju 45 i 90`
//     }else if (r<2 || r>10){
//         return ` Rastojanje mora biti izmedju 2 i 10`
//     } else {
//     return `Za ogradjivanje terena datih dimenzija potrebno je:
//     ${obim} metara ograde`
//     }
// }
// console.log(teren())

// Number properties

// Number properties ne mogu  biti primenjive na promenjive
// vec samo pristupanjem preko number.(property)

// 1. MAX_VALUE-Vraca najveci br u js

console.log(Number.MAX_VALUE);

// 2. MIN_VALUE-Vraca najmanji br u js

console.log(Number.MIN_VALUE);

// 3. POSITIVE_INFINITY - vraca beskonacno

console.log(Number.POSITIVE_INFINITY);

// 4. NEGATIVE_INFINITY - vraca -beskonacno

console.log(Number.NEGATIVE_INFINITY);

// 5. NaN - vraca not a number vrijednost

console.log(Number.NEGATIVE_INFINITY);

// Zadatak

function Palindrom() {
  const br = +prompt('Unesite broj')
  let novibr = ''
  let string = br.toString()
  let duzina = string.length
  for (let i=duzina-1;i>=0;i--)
  novibr+= string[i]
  if (string === novibr){
    return`Ovaj broj je palindrom`
}else
  return `Ovj broj nije palindrom`
}
console.log(Palindrom())