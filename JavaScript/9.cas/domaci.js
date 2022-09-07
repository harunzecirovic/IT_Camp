// Domaci isto samo zadnje veliko slovo

recenica =
'Za nedelju dana je test , gde zavrsavamo prvi od 3 kursa '

let recenica3 = ''

// for (let w = 0; w < recenica.length ; w++){
//     if (w===0) {
//         recenica3 += recenica[w].toUpperCase();
//     } else if (recenica[w+1] === " "){
//         recenica3 += recenica[w].toUpperCase();
//     } else {
//         recenica3 += recenica[w]
//     }
// }

// console.log(recenica3)

// Napraviti novu recenicu koja je ista samo bez razmaka

// recenica =
// 'Za nedelju dana je test , gde zavrsavamo prvi od 3 kursa'

// let recenica4 = ' '

// for (let w = 0; w < recenica.length ; w++){
//     if (recenica[w] === ' '){
//         continue
//     } else  {
//         recenica4 += recenica[w]
//     }
// }

// console.log(recenica4)

// Napraviti novu recenicu koja je ista samo bez razmaka

recenica =
'Za nedelju dana je test , gde zavrsavamo prvi od 3 kursa'

let recenica4 = ' '

for (let w = 0; w < recenica.length ; w++){
    if (recenica[w] === 'a' && recenica[w+1] === 'n') {
        recenica4 += 'x';
    }else if (recenica[w] === 'a'){
        recenica4 += 't';
    } else  {
        recenica4 += recenica[w];
    }
}

console.log(recenica4)