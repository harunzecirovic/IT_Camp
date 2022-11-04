// Funkcije

// indexOf() vraca index gde se nalazi ova rijec

const niz =[
    'Vahid',
    'Talib',
    'Ahmed',
    'Imran',
    'Abdurahman',
    'Amina',
    'Amina',
    'Muusa',
    'Harun'
]
const prvi = (arr) =>{
    if (arr.includes('Imran')){
        return ` Imran se nalazi na ${arr.indexOf('Imran')+1}. mestu`
    } else{
        return 'Sad ce doc'
    }
}
console.log(prvi(niz))

// lastIndexOf vraca nam index poslednje nalazenja rijeci


// includes() vraca nam boolean nalazi li se to u nizu

console.log(niz.includes('Mejra'))
console.log(niz.includes('Talib'))

// JavaScript Keys() i enteries() vracaju index datog niza odnosno
// kombinacija indexa i vrijednosti

const indexi = niz.keys()  // Array iterator object

for (let indeks of indexi){
    console.log(indeks)

}
const enterisi = niz.entries()

for (let enter of enterisi){
    console.log(enter)
}

// flat() iz niza nizova pravi samo jedan niz

const svastara = [
    ['jabuka','kruska'],
    ['limun','banana'],
    ['dabar','zvaka'],
]
const svastaras = svastara.flat()
console.log(svastaras)


