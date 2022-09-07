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


//1. primer

console.log(zbirDvaBr(5, 14))

function povrsina(prviBroj, drugiBroj){
    if(prviBroj === drugiBroj)
    return 'povrsina kvadrata je ' + prviBroj * drugiBroj;
    else{
        return "povrsina pravougaonika je " + prviBroj * drugiBroj
    }
}

console.log(povrsina(15,2));
console.log(povrsina(2,2));

// 2. nacin

const myfunction = function () {
    //radnja koja se obavlja
}

//Napraviti funkciju koja vraca zbir kvadrata dva broja.

// Druga vrijednost je po difoltu 1

//1. nacin
const mysecfunction = function (prva, druga) {
    if (druga === undefined){
        return prva**2 + 1;
        } else{
            return prva**2 + druga**2;
        }
    }

console.log(mysecfunction(5))
console.log(mysecfunction(5,4))

// 2. nacin

const mysecfunction2 = function (prva, druga =1) {
    return prva** 2 + druga ** 2;
}

console.log(mysecfunction2(3))

// Ako neka funkcija ima defolt vrijednost ta vrijednost se stavlja na poslednju vrijednost
// a ako ih je vise idu na poslednje vrijednosti
// Ne smije se desiti slucaj da prva bude defoltna a nakon nje a nema defolt

// Arrow function

const Arrowfuncc = () => {
    //kod z izvrsavanje
}

//Napraviti da ispisuje jedno od cetri
//Pozitivan 'poz'
//Negativan 'neg'
// Nula 'nula'
// Ako nije br 'nije br'

const Arrowfunc = (prvi) => {
    if (prvi >0){
        return 'poz'
        } else if(prvi<0){
            return 'neg'
        }else if(prvi === 0){
            return 'nula'
        }else {
            return 'nije br'
        }
}

console.log(Arrowfunc(1))

recenica2 = ''
const Arrowfunct = (recenica) => {
for (let br = 0; br <= recenica.length ; br++){
    if (recenica[br] === 'a' ||
    recenica[br] === 'e' ||
    recenica[br] === 'i' ||
    recenica[br] === 'o' ||
    recenica[br] === 'u'){
        recenica2 += recenica[br].toUpperCase();
    }else if (br === recenica.length){
        recenica2 += '.';
    }else  {
        recenica2 += recenica[br]
    }
}
return recenica2
}
console.log(Arrowfunct('gde si'))

console.log(recenica2) //promenjive koje su unutar function nisu global scope
