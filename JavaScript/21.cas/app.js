// Number tip podatka

// JS poznaje samo number tip podatka i brojevi mogu biti decimalni

// U js imamo gresaka pri racunanju

let a = 0.1
let b = 0.2
let c = a+b
console.log(c)

let y = 123e-6; // 123 / 1 000 000
console.log(y)

// Dodavanje brojeva stringovima i obratno

console.log(18+'45') // '1845'
console.log('63'+44) // '6344'
console.log('sd'+32) // 'sd32'
console.log('401s' - 46) // Nan
console.log(85 / '78a') // Nan
console.log(47 - '27') // 20
console.log('1k' * 45) //Nan
console.log(22 - '23') // -11
console.log(76 - '67') // 9

// NaN not a number

// NaN je js rezervisana rijec koja ukazuje da broj zapravo nije legalan broj

// Ako ispitamo tip NaN rezultat je number

console.log('1k' * 45) 
console.log(typeof ('1k' * 45));

// Postoji metoda za provjeru da li je neka vrijednost NaN 
// U pitanju je isNaN()

console.log(isNaN(100 / 'Apple'))

// Infinity
// Infinity ili -Infinity je vrijednost kada za rezultat dobijemo br koji je van granica 
// maksimalnog broja prema racunanju u js

console.log(20 / 0)
console.log(-20 / 0)

// Heksadecimalni brojevi

// Js interpretira constante kao heksadecimalne ako im je prefiks 0x 

let prom = 0xff
console.log(prom)

// Brojevi kao objekti

let broj = new Number(14)

console.log(broj)

console.log(broj + 7)

let broj2 = 10

console.log(Boolean(broj<broj2));

function vrijeme() {
    const sat = +prompt('Unesite sat')
    const minut = +prompt('Unesite minut')
    if (sat<0 || sat>23 || minut<0 || minut>59 || isNaN(sat) || isNaN(minut)){
    return 'Nije unijeto tacno vrijeme'
    }else if (sat< 9 && sat>=17){
        return 'Ne'
    }else {
        return 'Da'
    }
}
console.log(vrijeme())