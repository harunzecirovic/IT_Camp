// console.log("gh")

// FUNKCIJE

// Blok koda koji se izvrsava samo prilikom pozivanja.

// Nacini zapisivanja funkcija:
// Koriscenjem keyword rezervisane rijeci function

// Prvi primer

function nazivFunkcije(){
    return 5;
}

console.log(nazivFunkcije())

// Drugi primjer

function zbirTriIPet(){
    return 3+5;
}

console.log(zbirTriIPet())

// Treci primjer

// Prilikom definissanja funkcije u zagradi stavljamo parametre koje funkcija koristi unutar sebe 

function zbirDvaBr(prviBroj, drugiBroj) {
    return prviBroj + drugiBroj;
}

// Prilikom pozivanja funkcija u zagradi stavljamo argumente na osnovu kojih se funcija izvrsava

console.log(zbirDvaBr(5, 14))