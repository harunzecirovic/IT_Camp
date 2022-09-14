// HOISTING

A = 5

console.log(A)

// let A; Kasnije deklarisanje ne moze sa let
var A; // Sa var radi jer ga on po difoltu racuna u var
// const A; Kasnije deklarisanje ne moze sa const

console.log(myFunc())

// Hoisting nece da se izvrsi
const myFunc = function() {
    let a = 10;
    return a;
}

// Hoisting hoce da se izvrsi
function myFunc() {
    let a = 10;
    return a;
}

// Hoisting nece da se izvrsi
const myArrow = () => {
    let a = 14
    return a 
}

// Dobra praksa je uvijek dobro deklarisati pa tek nakon toga koristiti
// sve kako ne bi imali error
