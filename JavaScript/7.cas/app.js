// while petlja nam omogucuje iteraciju nekoliko puta i uz odredjeni
// uslov izvrsavanje bloka koda koji smo definisali unutar petlje

// sintaksa:
// while (uslov) {
    //blok koda za izvrsavanje
// }

// ISpisati brojeve od 1 do 5

// let broj = 1
// while (broj<=5) {
//     console.log(broj)
//     broj++
// }

// ispisati sve neparne br od 1 do 10

// let broj2 = 1;
// while (broj2<10) {
//     console.log(broj2)
//     broj2+=2
// }

// 2.korisnik unese br na osnovu tog broja se ispise kvadrat br od 
// 1 dotle

// let x = 1;
// let y=Number(prompt('Unesite neki broj') )
// if(isNaN(y)) {
//     console.log('Nije unijeta korektna vrijednost za broj')
// } else{
//     while (x<=y) {
//         console.log(x**2)
//         x++
//     }
// }

// 3. Korisnik unosi 2 broja:
// na osnovu toka koji broj je manji interacija se vrsi od njega do 
// veceg broja
// ispisuju se brojevi od manjeg ka vecem

// let z = Number(prompt('Unesite neki broj') );
// let w = Number(prompt('Unesite neki broj') );
// if (isNaN(z) || isNaN(w)) {
//     console.log('Nije unijeta korektna vrijednost za broj')
// } else if (z===w) {
//     console.log('brojevi moraju biti razliciti')
// } else if (z<w) {
//     while(z<=w) {
//         console.log(z)
//         z++;
// }
// } else if (w<z) {
//     while(w<=z){
//         console.log(w)
//         w++;
//     }
// }

// do while petlja je obrnuta while petlja

// do {
//     // blok koda koji se izvrsava
// } while (uslov)

// Ispisati brjeve od 1 do 5

// let i = 1
// do{
//     console.log(i)
//     i++;
// } while (i<6);

// Nedostatak

let x = 20
do{
    console.log(x**2)
    x++;
}while (x<10)