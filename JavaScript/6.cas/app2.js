// 1. Ispisati brojeve od 1 do 10 jedne ispod drugih

// Za resavanje ovakvih primjera je najlakse koristiti for petlju
// U js imamo tri petlje preko kojih mozemo izvrsiti nekoliko linija 
// koda na brzi nacin

// U for petlji je dozvoljeno koristiti if naedbu
// for (statement1; statement2; statement3) {
    // blok koda koji se izvrsava u svakoj interaciji
// }

// statement1 predstavlja definisa je promenjive koja predstavlja iterator
// statement2 predstavlja uslov,odnosno granicu do koje se izvrsava
// statement3 promenu vrednosti 

// 1.Ispisati brojeve od 1 do 10

// for (let x =1; x<11; x++) {
//     console.log(x);
// }

// 2. Ispisati brojeve od 1 do 10 bez 2 i 5

// for (let x = 1; x<11; x++) {
//     if (x === 2 ) {
//         console.log('');
//     }
//     else if (x === 5 ) {
//         console.log('');
//     } else {
//         console.log(x)
//     }
// }

// for (let x = 1; x<11; x++) {
//     if (x !== 2 && x!== 5 ) {
//         console.log(x);
//     }
// }

// Ako se nadje brake rezervisana rec (keyword) unutar petlje to znaci 
// da tu petlja prestaje da se izvrsava

// Ako se nadje continue rezervisana rec (keyword) unutar  petlje 
//to znaci da se odmah prelazi na sledecu interaciju

// for (let x = 1; x<11; x++) {
//     if (x === 2 ) {
//         continue
//     }
//     else if (x === 5 ) {
//         continue
//     } else {
//         console.log(x)
//     }
// }

// 3.ispisati parne brojeve od 1 do 20 

// for (let x = 1; x<21; x++) {
//     if (x % 2 == 0) {
//         console.log(x);
//     }
// }

// for (let x = 1; x<21; x++) {
//     if (x % 2 == 1) {
//         continue
//     }
//     else {
//         console.log(x)
//     }
// }

// for (let x = 2; x<21; x+=2 ) {
//     console.log(x)
// }

// Domaci:
// 1.Ispisati neparne br
// 2.Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5
// 3. Ispisati dvostruku vrijednost br od 6 do 14
// 4. Suma neparnih prirodnih brojeva od 10 do 20

// 1.

// for (let x = 1; x<21; x++) {
//     if (x % 2 == 1) {
//         console.log(x);
//     }
// }

// for (let x = 1; x<21; x++) {
//     if (x % 2 == 0) {
//         continue
//     }
//     else {
//         console.log(x)
//     }
// }

// for (let x = 1; x<21; x+=2 ) {
//     console.log(x)
// }

// 2.

// for (let x = 50; x<101; x++) {
//     if (x % 5 == 0) {
//         console.log(x);
//     }
// }

// 3.

// for (let x = 6; x<15; x++) {
//     if (x <15 ) {
//         console.log(x * 2);
//     }
// }

// 4.

let y=0;
for (let x = 11; x<21; x++) {
    if (x % 2 == 1) {
    y+=x
    }
}
console.log(y)