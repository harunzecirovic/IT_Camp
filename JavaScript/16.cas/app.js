// split() metoda ce se izvrsiti konverziju stringa u niz ARRAY

var recenica = 'zelimo izvrsiti konverziju ove recenice u niz'
var recenica2 = 'Ako bi se desilo da svi dodjemo na cas na vrijeme,\
to bi bilo cudo, koje jos nismo videli,mada je\
zadovoljavajuce da na svakom casu prisustvuje vecina';

// izostavljajuci argument metode split ce se izvrsiti konverzija datog stringa u niz koji ima jedan element

var niz1 = recenica.split()
console.log(niz1);

// Ako je argument dati string ',' onda cemo dati string pretvoriti u niz koji je podeljen na
// elemente koje razdvajaju zarezi
var niz2 = recenica2.split(',')
console.log(niz2)

// Ovaj primer ce od svakog karaktera stringa praviti jedan element novog niza
var niz3 = recenica.split('')
console.log(niz3)

// Postoje 4 js searich metode:
// 1.indexOf()

var recenica = 'Pada kisa hoce da mi istuhnu krompiri,videcemo da li ce kisa stati'

let index1 = recenica.indexOf('kisa')
console.log(index1)

let index2 = recenica.indexOf('kebab')
console.log(index2)

// 2. lastIndexOf() nalazi nam index poslednje rijeci u stringu

let index3 = recenica.lastIndexOf('kisa')
console.log(index3)

// 3. search() metoda nam vraca index trazenog stringa
// isto kao indexOf samo gluplje

// match()metoda

let index4 = recenica.match('kisa')
console.log(index4)

let index5 = recenica.match(/kisa/gi)
console.log(index5)

// includes() nam vraca boolean

var recenicaa = 'jos najvise jedan cas radimo string metode'

var imal = recenicaa.includes('cas')

console.log(imal)