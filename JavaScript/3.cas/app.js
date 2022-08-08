// var
// Redeklaracija je dozvoljena bilo gde u programu

var x = 14;
console.log(x);
console.log('neki string')
console.log(x)

//let
// Redeklarisanje nije dozvoljeno na istom meslu

let y = 10;
console.log(y);

//Block scope je drugacije

{
    // console.log(y) nece izvrsit jer nije poznato u blocku rnije
    let y = 19
    console.log(y);
}

console.log(y)

// let nam ne dozvoljava redeklaraciju ali je moguce izvrsiti
// reinicijalizaju odnosno dodeljivanje druge vrijednosti

let z = 10;
z = 12;

//const
// promenjive koje su definisane pomocu const
// NE MOGU BITI NI DEKLARISANE NI REINICIJALIZOVANE

const w = 16
// const w = 14 ne moze se redeklaristi
console.log(w)
// w = 20 ne moze se REINICIJALIZOVAti
console.log(w)

//block vazi i za const

//let dozvoljava:
let prom;
prom = 40

//const je striktna i mora se izvrsiti i deklaracija 
// i inicoijalizacija u istom redu

//const ne dozvoljava reinicijalizaciju ponovo dodeljivanje vrijednosti
// mozemo izvrsiti neke promene u nizu (npr promena vrednosti nekog elementa)