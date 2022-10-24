// Domaci

// 1. Pomocu map ispisati sve velikim

// 2.Pomocu for napravoit niz koji ce imat samo br vece od 17


// niz=[4,7,19,-5,'jagoda']
// niz.forEach((element,index,array) =>
//  console.log(`index: ${index};\n\
//  element; ${element};\nceo niz: ${array}`)
//  );


// 1. Zadatak

// slova=['veverica','ruza','jagodica','rumena']
// slova2=slova.map((element) => {
//     return `${element[0].toUpperCase()}${element.slice(1,element.lenght)}`
// })
//     console.log(slova2)

// 2.

// Prvi nacin

// const godine = [16,18,18,18,17,19]
// const punoletni = []

// for (let godina of godine) {
//     if (godina>17){
//         punoletni.push(godina)
//     }
// }
// console.log(punoletni)

// Drugi nacin

// const brojevi = [16,18,18,18,17,19]
// const brojke = brojevi.map((element) => {
//     if (element>17){
//     return element
//     }
// })
//     console.log(brojke)


// 3.

const br = [2,5,10,3,4,8]
const br2 = []

// for (let bro of br) {
//     if (bro%1==0){
//         br2.push(bro**2)
//     }
// }
// console.log(br2)

const korijen = br.map((element) => Math.sqrt(element).toFixed(2))
console.log(korijen)

// 4. Kvadrirati br koj imaju 0,3,5

const number = [-8,-7,-12,0,5,23,61]
const sn = number.map((element,index) => {
    if(index===0 || index===3 || index===5){
        return element**2
    } else{
        return element
    }
})
console.log(sn)
