// Stringovi

let recenica = 'Za nedelju dana je test,gde zavrsavamo prvi od 3 kursa'

let rec = 'Danas'

// Pristupanje karaktera ide preko indexa
// INDEKSIRANJE KRECE OD 0
// Kad se radi o stringovima idemo od 0 do ukupne duzina - 1

// Pristupiti trecem slovu nase rijeci:

let trecikarakter = rec[2];

console.log(trecikarakter);

// Prebaciti sva slova u velika 

// toUpperCase

let novarijec = rec.toUpperCase();

console.log(novarijec)

// Za izracunavanje duzine recenice se koristi lengh

let duzinarecenice = recenica.length;
console.log(duzinarecenice)

let recenica2 = 'Danas je bilo kisovito';

for (let i = 0; i < recenica2.length ; i++){
    console.log(recenica2[i]);
}

//Ispisati novu recenicu gde ce svaka rijec pocinjati velikim slovom

recenica =
'Za nedelju dana je test , gde zavrsavamo prvi od 3 kursa'

let recenica3 = ''

for (let w = 0; w < recenica.length ; w++){
    if (w===0) {
        recenica3 += recenica[w].toUpperCase();
    } else if (recenica[w-1] === " "){
        recenica3 += recenica[w].toUpperCase();
    } else {
        recenica3 += recenica[w]
    }
}

console.log(recenica3)

// 