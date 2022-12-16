// // JS sets

// // Setovi su kolekcija unikatnih vrijednosti
// // Svaka vrijednost se ponavlja samo jednom

// // Kreiranje seta:

// const set = new Set(['a','b','c','d','a']) // nema drugog a
// console.log(set)

// // Metode:
// // Add()- dodaje novi element
// set.add('m')
// console.log(set)

// // delite()- brise sta kazmeo

// set.delete('m')
// console.log(set)

// // has() vraca boleean imal
// // set.has('m')
// console.log(set.has('m'))

// // forEach() poziva callback funkciju za svaki element

// set.forEach((element)=>console.log(element))

// // values() vraca iterator sa vrednostima datog seta
// console.log(set.values())

// 1.

const brz = (arr) => {
    const set = new Set(arr)
    return [...set]
}

console.log(brz(['a','b','c','d','e','a','b','c','d','e']))

// JS Maps

// Mape sadrze key-value parove gde kljucevi mogu biti bilo kji
// tip podataka

//Mape pamte originalni redosled

//Kreiranje

const fruits = new Map([
    ['apples',60],
    ['bananas',150],
    ['strawberry',320],
    ['mango',420],
])

console.log(fruits)

//Metode

// set() seta vrijednost za odredjeni kljuc u mapi

fruits.set('pear',40)
console.log(fruits)

// get() vraca vrijednost
console.log(fruits.get('strawberry'))

// delite() - brise ceo element slanjem kljuca

fruits.delete('pear')
console.log(fruits)

// has() bolean imal

// forEach() callback za svaki

// enteries() vraca iterator u obliku key-value
