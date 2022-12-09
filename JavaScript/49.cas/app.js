// Svaki objekat ima svoj ptotype
//On sadrxzi svojstva i metode

// imamo 2. nacina pravljenja sablona za objekte

// 1. constructor function

const person ={
    firstName: 'Imran',
    lastName: 'Hazirovic',
}
console.log(person)


function User(firstName,lastName,score) {
    this.firstName = firstName
    this.lastName = lastName
    this.score = score
}

User.prototype.incrementscore= function() {
    this.score +=1
}

const imran = new User('Imran','Hazirovic',4)
imran.incrementscore()
console.log(imran)

const vahid = new User('Vahid','Gasanin',2)
vahid.incrementscore()
vahid.incrementscore()
console.log(vahid)

// 2.

const auto ={
    marka: 'BMW',
    boja: 'Bijela',
    godina: 2015,
    udaren: false,
}
console.log(auto)


function Auto(marka,boja,godina,udaren) {
    this.marka = marka
    this.boja = boja
    this.godina = godina
    this.udaren = this.udaren
}


Auto.prototype.jeudaren= function() {
    this.udaren=false
}

const mauto =  new Auto('BMW','Bijela',2015,false)
console.log(mauto)
mauto.jeudaren()
console.log(auto)


