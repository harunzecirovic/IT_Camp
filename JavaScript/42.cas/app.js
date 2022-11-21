// call(), aooly(), bind() su funkcije koje koristimo 
// u slucajevima kada zelomo da se neka funkcija primijeni
// na objekat koji je izvan date funkcije
// Primjer

const person ={
    firstName : 'Muhammed',
    lastName : 'Krkmisevic',
    birth : new Date (2005,5,13),
    full : function () {
        return `${this.firstName} ${this.lastName}`
    },
}
console.log(person.full())

const pers = {
    firstName: 'Muusa',
    lastName: 'Zecirovic',
    birth:new Date (2006,8,12),
}
console.log(pers)

// Sintaksa je da prvo ide pozivanje funkcije pa onda kao argumenti idu
// 1.Objekat koji nam treba
// 2. Eventualne argumente(ako ih funkcija zahtijeva)

console.log(person.full.call(pers))

const restoran = {
    hrana : 'pizza',
    gosti: 'zadovoljni',
    lokacija: 'centar',
}

function poruka(grad,drzava){
    return `Vecerasnji specijalitet je ${this.hrana} i sa ponosom mozemo reci da
    su gosti ${this.gosti}.Nas restoran se nalazi u ${this.lokacija} u ${grad},${drzava}`
}

const restoran2 = {
    hrana : 'supa',
    gosti: 'zgrozeni',
    lokacija: 'mur',
}

console.log(poruka.call(restoran, 'Beograd','Srbija'))
console.log(poruka.call(restoran, 'Novi Pazar','Srbija'))

// apply() slican samo se arg stavljaju unutar niza

console.log(poruka.apply(restoran, ['Novi Pazar','Srbija']))

// bind() prvo datu funkciju dodijelimo nekoj promenjivoj i 
// onda tu funkciju pozivamo sa datim arg

const bindf = poruka.bind(restoran2)
console.log(bindf('Sarajevo','BiH'))