// JS Math Objects

// Math Object nam dozvoljava primenu matmeatickih operacija na br

//Math Propeties(property)

// Sintaksa:Math.Property
// JS nam dozvoljava 8 matematickih konstanti

// 1. Math.E

console.log(Math.E);

// 2. Math.PI

console.log(Math.PI);

// 3. Math.SQRT2 - vraca korijen iz 2

console.log(Math.SQRT2);

// 4.Math.SQRT1_2 - vraca korijen iz 1/2

console.log(Math.SQRT1_2);

// 5.Math.LN2 - vraca logaritam broja 2 za osnovu e

console.log(Math.LN2);

// 6.Math.LN10  - vraca logaritam broja 10 za osnovu e

console.log(Math.LN10);

// 7.Math.LOG2E - vraca logaritam broja e za osnovu 2

console.log(Math.LOG2E);


// 8.Math.LOG10E - vraca logaritam broja e za osnovu 10

console.log(Math.LOG10E);

// DOMACI:

// 1. Izracunajte obim kruga ako korisnik unosi r r2pi

// 2. Izracunajte povrsinu kruga ako korisnik unosi r u argumentu 2rp

// 3. Pretvaranje radijana u stepene argument


// 1. 

function Obim() {
    const r = +prompt('Unesite poluprecnik r')
    let obim = 2 * r * Math.PI;
    if (isNaN(r)) {
        return `R mora biti broj`
    }else {
    return `Obim kruga sa poluprecnikom ${r} je ${obim}`
    }
}
console.log(Obim());


// 2.

const povrsina = function (r) {
    let povrsinaa =  r **2 * Math.PI;
    return `Povrsina kruga sa poluprecnikom ${r} je ${obim}`
    
}
console.log(povrsina(5));

// 3.

const radijan = function (stepen) {
    let radijani =  stepen * (Math.PI/180)
    return `${stepen} stepeni je ${radijani} radijana` 
}
console.log(radijan(90));