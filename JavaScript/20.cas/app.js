// DOMACI

// 1.

// const promjena = () => {
//     const recenica = prompt('Unesite recenicu')
//   let duzina = recenica.length
//   let novarecenica = ''
//   for (let i=0;i<duzina;i++)
//   if (duzina % 2 === 1 && i === duzina - 1){
//     novarecenica+=recenica[i]
//   }else if (i % 2 === 0){
//     novarecenica+=recenica[i+1]
//   }else if (i % 2 === 1)
//     novarecenica+=recenica[i-1]
//     return novarecenica
// }
// console.log(promjena())

// 2.

function zezanje() {
  const a = prompt('Unesite recenicu')
  const b = prompt('Unesite recenicu')
  let duzina1 = a.length
  let duzina2 = duzina2
  let c = ''
  // let duzina = 0
  // if (a.length>b.length){
  //   duzina= a.length
  // }else
  //   duzina= b.length
  let duzina = duzina1>duzina2 ? duzina1 : duzina2
    for (let i=0;i<duzina;i++){
      if (i>= duzina1){
        c+=b[i]
      }else if (i>= duzina2){
          c+=a[i]
      }
      else{
      c = a[i] + b[i];
      }
    }
    return c
}

console.log(zezanje())