//Node je runtime koji vrsi egzekuciju i kompajlovanje JS koda

// Node ima mnostvo svojih modula, najpoznatiji us fs(fajl sistem) i http modul

// const fs = require('fs')

// fs.writeFile(('text.txt','dasadsfd'))

// File for class subjects

// class Car {
//     constructor(name,type){
//     this.name= name;
//     this.type= type;
//     }
//     fullName() {
//         return console.log(this.name+' ' + this.type)
//     }
// }

// const newCar = new Car('Audi','Limo')

// console.log(newCar)

// newCar.fullName

// Ja radim

// class Ja {
//     constructor(ime,prezime){
//     this.ime=ime ;
//     this.prezime= prezime;
//     }
//     fullName() {
//         return console.log(this.ime+' ' + this.prezime)
//     }
// }
// const noviLik  = new Ja('Harun','Zecirovic')

// console.log(noviLik)

// noviLik.fullName()

class Ja {
    constructor(ime,prezime,godine){
    this.ime=ime ;
    this.prezime= prezime;
    this.godine=godine
    }
    godiste() {
        return console.log(2022-this.godine)
    }
}
const noviLik  = new Ja('Harun','Zecirovic',2004)

console.log(noviLik)

noviLik.godiste()


class AdditionalInfo extends Ja{
    statesArr = [
        {
            state: 'USA',
            cId: +1 ,
        },
        {
            state: 'Serbia',
            cId: +381 ,
        },
        {
            state: 'Germany',
            cId: +49 ,
        },
        {
            state: 'India' ,
            cId: +51 ,
        },
        {
            state: 'Uganda' ,
            cId: +137 ,
        },
    ]
    constructor(street,city,state,br){
    super(newUser.ime,newUser.prezime,newUser.godine)
    this.street=street ;
    this.city= city;
    this.state=state;
    this.br=br;
    this.broj=this.naka(this.state,this.br)
}
    naka(state,br){
        this.findState= this.statesArr.find((s) => s.state ===state)
        return br.replace(br[0], this.findState.cId)
    }
}
const newUser  = new Ja('Harun','Zecirovic',2004)

console.log(newUser)

const additional = new AdditionalInfo(
    'Sopocanska',
    'Novi Pazar',
    'Serbia',
    '0628410666'
)

console.log(additional)
