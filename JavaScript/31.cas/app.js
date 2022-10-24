// JS Array Iteration

// Array Iteration metode prolaze kroz svaki element niza

// forEach() metoda - poziva funkciju gde svaki element niza 

niz = ['Imran' , 'Talib', 'Muhammed', 'Ahmed' , 'Abdurahman']

// niz.forEach((element) => console.log(element))

// for (let element of niz){
//     console.log(element)
// }
// for (let i=0;i<niz.lenght;i++){
//     console.log(niz[i])
// }

// niz.forEach(
// (element,index,array) => 
//  console.log(
//     `${index}:${element} i treci argument je zapravo cio niz: ${array}`
// ))

const brojevi = [4, 3, 2, 5, -12, -112, 212, 34.3];

// map() metoda - kreira novi niz, tako sto se iterira niz na
// koji se primenjuje metoda
// Vazno je napomenuti da map() metoda ne menja originalni niz

// function brojevii(brojevi){
// let brojke = []
// for (let br of brojevi){
//     brojke.push(br+2)
//     }
//     return brojke
// }
// console.log(brojevii(brojevi))

// const brojke = brojevi.map((element) => element+2)
// console.log(brojke)

// const niz1 = niz.map((element) => element+'_Prezime')
// console.log(niz1)

const brojke = brojevi.map((element) => {
    if (element%2==0){
    return element+2
    }else{
    return element
    }
})
    console.log(brojke)

// Domaci

// 1. Pomocu map ispisati sve velikim

// 2.Pomocu for napravoit niz koji ce imat samo br vece od 17
