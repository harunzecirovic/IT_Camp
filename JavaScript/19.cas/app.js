// Domaci

// 1. Palindrom

// function Palindrom() {
//   const recenica = prompt('Unesite recenicu')
//   let novarijec = ''
//   let duzina = recenica.length
//   for (let i=duzina-1;i>=0;i--)
//   novarijec+= recenica[i]
//   if (recenica === novarijec){
//     return`Ova rijec je palindrom`
// }else
//   return `Ova rijec nije palindrom`
// }
// console.log(Palindrom())

// 2. Dobija se novi string sa sve malim slovima

// function malaSlova() {
//     const recenica = prompt('Unesite recenicu')
//     let duzina = recenica.length
//     for (let i=0;i<duzina;i++)
//     return recenica.toLowerCase()
// }
//   console.log(malaSlova())

// Zadaci

// 1.

// function razmak() {
//     const recenica = prompt('Unesite recenicu')
//     let zadnja = recenica.lastIndexOf(' ')
//     return zadnja
// }
//   console.log(razmak())

  // 2.

//   function prvaduzina() {
//     const recenica = prompt('Unesite recenicu')
//     let recenica1 = ''
//     let razmak = recenica.indexOf(' ')
//       for (let i=0;i<razmak;i++)
//     recenica1 += recenica[i]
//     return recenica1.length
// }
//   console.log(prvaduzina())

// 3.

// function zezanje() {
//   const a = prompt('Unesite recenicu')
//   const b = prompt('Unesite recenicu')
//   let recenica1 = ''
//   let recenica2 = ''
//   let duzina = b.length
//   let razmak = a.indexOf(' ')
//     for (let i=0;i<razmak;i++)
//   recenica1 += a[i]
//     let zadnja = b.lastIndexOf(' ')
//     for (let k=zadnja+1;k<duzina;k++)
//   recenica2 += b[k]
//   return `${recenica1} ${recenica2}`
// }
// console.log(zezanje())

// 4. 

function nekin(n) {
  const recenica = prompt('Unesite recenicu')
  let nova = ''
  for (i=0;i<n;i++)
  nova+=recenica[i]
  if (n > recenica.length){
  return nova
  }else
    return recenica
}

console.log(nekin(6))

