// Objekti su glkavni u JS
// Mogu sadrzati vise vrijednosti
// Zapisuju se u name:value paru
//Jedan takav par se zove svojstvo

const car = {
    marka: 'BMW',
    godiste: 2004,
    boja: 'crna',
}

console.log(car) // ispisivanje

// Svojstvima se proistuoa na dva nacina
// 1.
console.log(car.boja)
// 2.
console.log(car['marka'])


// Objekti mogu sadrzati metode
// Metode su u objektu kao definicija funkcije

const person = {
    JMBG: 1306005783971,
    ime: 'Muhammed',
    prezime: 'Krkmisevic',
    mesto: 'Lug',
    imeprez: function(){
        return this.ime + ' ' + this.prezime
    }
}

// this nije promenjiva vec keyword
// Vrijednost this se ne moze promijeniuti

console.log(person)
console.log(person.imeprez())


// Napravi objekat student koji ce da ima vrijednosti po zelji 
// svojstava 
// ime, prezime ,broj indexa ,niz ocena ,prosek ocena funkcija koja vraca prosek