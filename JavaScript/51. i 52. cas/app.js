// Dzemil ceprka po netu

// function je() {
//     let br = 4
//     let predmet = 'stolice'
//     return `U prostoru imamo ${br} ${predmet}.`
// }

// Poznata je cinjenica da kada se izvrsi funkcija, sve njene lokalne
// promenjive pokupi 'garbage' kolektor i one prestsju da postoje u memoriji
// To nije slucaj ako postoji funkcija koja zahteva koriscenje promenjivih iz 
// domena druge funkcije
// To se nejcesce postize ugradnjom neke funkcije unutar druge

// function func(){
//     let br = 4
//     let predmet = 'stolice'
//     function druga(arg) {
//         console.log(arg + br)
//     }
//     druga(10)
//     return `To je bio primer Closure u JS`
// }
// console.log(func())

// Closure je funkcija koja zahtijeva koristenje promenjivih iz domena
// funkcije

function moja(){
    console.log('Pocetak glavne funkcoje')
    function tvoja(){
        console.log('Ovo je sporedna')
        return 5
    }
    return tvoja
}

console.log(moja()())
