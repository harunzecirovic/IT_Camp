// trim() metoda brise sve bespotrebne razmake na pocetku i kraju stringa

let recenica = '           Neka duga recenica     '
console.log(recenica)
console.log(recenica.length)
let srecenica = recenica.trim()
console.log(srecenica)
console.log(srecenica.length)

// Postoje tri metode za ekstraktovanje stringova:

// 1.charAt(position)
// 2.charCodeAt(position)
// 3.pristupanje preko []

console.log(srecenica.charAt(12))
console.log(srecenica.charCodeAt(12))
console.log(srecenica[12])

// Pristupanje nepostojecem indeksu se odrzava razlicito u zavisnosti od toga da li koristimo metod charAt() ili []
console.log(srecenica.charAt(126)) // Vraca prazno
console.log(srecenica[126])        // Vraca undefined
