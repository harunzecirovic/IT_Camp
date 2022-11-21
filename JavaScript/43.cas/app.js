const auto = {
    marka: 'Audi',
    model: 'Q7',
    boja: 'Bijela',
    pogon: 'quatro',
    menjac: 'automatik',
    kilometraza: 240000,
    vlasnik: ['0628410629','0677388383'],
    garaza: {
        parking: 'JKP Servis',
        vikned: 'od 17 besplatno',
        sahat: 50,
        dan: 200,
        mjesec: 2000,
    }
}
function po20() {
    this.sahat += this.sahat * 0.2
    this.dan += this.dan * 0.2
    this.mjesec += this.mjesec * 0.2
  return`Nove vrijednosti za parking karte su: ${this.sahat} ${this.dan} ${this.mjesec} dinara`
}
console.log(po20.call(auto.garaza))


// 2.

const abdurahman = 'Abdurahman'
const selmanovic = 'Selmanovic'
const godine = 14
const skola = 'Bratstvo'

const person = {
    abdurahman: abdurahman,
    selmanovic: selmanovic,
    godine: godine,
    skola:skola,
}

console.log(person)

const person2 = {
    abdurahman,
    selmanovic,
    godine,
    skola,
}
console.log(person2)

// Destructuring

const automobil = {
    marka: 'Audi',
    model: 'Q7',
    boja: 'Bijela'
}
console.log(automobil.model)
const {marka, model} = automobil
console.log(marka,model)

// 3.

const godinee = [
    {starost:18},
    {starost:19},
    {starost:14},
    {starost:17},
    {starost:14},
    {starost:18},
    {starost:16},
]

const novi = godinee.filter((element) => {
    return element.starost>17
})
console.log(novi)
