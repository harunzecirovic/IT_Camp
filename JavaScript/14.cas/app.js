// Nastavak metoda kod stringova

// Mijenjanje sadrzaja se vrsi putim metode replace()

let recenica = 'Nekad zelimo zamijeniti sadrzaj sa nekim drugim'

let novarecenica = recenica.replace('sadrzaj', 'tekst');

console.log(novarecenica)

let recenica2 = 'Nekad zelimo da se na odredjenom mestu nadje sadrzaj koji je drugaciji od prvobitnog sadrzaja  '

let novarecenica2 = recenica2.replace('sadrzaj', 'tekst');

console.log(novarecenica2)

// Koriscenem regular expresion mozemo dodatno definisati sta zelimo

let novaRecenica3 = recenica2.replace(/sadrzaj/g, 'tekst')

console.log(novaRecenica3)

// Ako hocenmo da u istom momentu zamijeimo sve rijeci bez obzira na velika i mala slova mozemo iskoristti 
// vise regular expresions odjednom

let recenica3 = 'Nekad zelimo da se na odredjenom mestu nadje sadrZaj koji je drugaciji od prvobitnog sAdrzaja  '

let novaRecenica4 = recenica3.replace(/sadrzaj/gi, 'tekst');

console.log(novaRecenica4)

// Konvertovanje stringa u velika slova

let recenica4 = 'Sta ako zelimo da cijela recenica bude ispisana velikim slovima'
console.log(recenica4.toUpperCase())

let recenica5 = 'Sta ako zelimo da CIJELA reCenica bude ispisana velikim slovima'
console.log(recenica5.toLowerCase())

// Ako zelimo da spojimo dva stringa mozemo sa +
// Drugi nacin jetse uz pomoc concat()
var sentence = 'Ako predjemo prvi ciklus '
var sentence1 = 'nastavljamo sa ozbiljnijim bavljenjem js'

sentence01 = sentence.concat(sentence1)

console.log(sentence01)

// Putem concat()moze se spojiti vise stringova ne samo 20

// Sve metode sa stringovima nam vracaju novi string
// One ne modifikuju postojoci