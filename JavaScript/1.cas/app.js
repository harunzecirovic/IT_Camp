document.getElementById("paragraf").innerHTML =
"Ovo je paragraf dodat od strane java scripta";

//Ispisati u konzoli recenicu:
console.log("Danas je bilo pretoplo cekamo septembar da se ohladimo");

// tipovi podataka u JS:
//Za proveru tipa varijable(promenjive) u JS se
//koristi type of operator

// postoje:
// primitivni (primitive) tipovi podataka;
// neprimitivni (nonprimitiv) tipovi podata;

// 1.1 string - Niz karaktera unutar navodnika
//              Moze biti zapisan unutar obicnih i duplih navodnika
//              Stringovi mogu biti bilo kakvi karakteri
//     Zapisivanje stringa:
("Danas je topao dan");
"Danas je padala kisa"
`Danas je padao snijeg`;     //Template literals
String("Danas je bilo suncano");

// 1.2 Number - predstavlja broj u JS
//     Moze biti zapisan sa decimalom ili bez nje
//     JS ne razlikuje tipove brojeva Number tipa
//     Zapisivanje brojeva
10;
0 - 1;
1.13;
0.2223232;
Number(45);

// 1.3 BigInt - Ovaj nacin nam sluzi za skladistenje brojeva cija
//              vrijednost prelazi granicu number tipa podataka
//      Zapisivanje velikih brojeva:

BigInt(325435432543)

// 1.4 Boolean - predstavlja logicki entit i moze imati dvije vrijednosti
//               1.true
//               2.false
//               Najveca primena se nalazi u slucajevima da li odredjeni uslov zadovoljava
//     Zapisivanje Booleana:
// Boolean("Odrednjeni uslov") i dobijemo true ili false

// 1.5 Undefined - Kada odredjenu variablu deklarisemo ali nema nikakvu vrijednost,
//                 tada undefaind predstavlja i vrednost i tip za nju

// 1.6 Null - tip podatka null se javlja za nepostojecu ili promenjivu koja nije validna

// 1.7 Symbol - To je novi tip podatka u JS 
//              Koristi se za anonimne i jedinstvene vrednosti
//     Zapisivanje symbol:

Symbol("Kako je bilo vrijeme");

// 2. Ne primitivni tip podatka (Non-primitive data type)
//    Koriste se za skladistenje varijabli koje imaju jednu vrijednost,
//    dokza promenjive koje sadrze vise vrijjednosti ili kompleksne vrijednosati 
//    koristimo ne primitivne tipove podataka

//    Primeri za NP tipove podataka:

// 2.1 Array (Nizovi) - Nizovi se koriste za skladistenje vise podataka unutar 
//     jedne promenjive. Nizovi u JS imaju mogucnost skladistenja elemenata 
//     razlicitih tipova podataka.

//     Zapisivanje nizova:
//     Niz stringova:
['Talib', 'Muhamed', 'Amina', 'Ahmed']
//     Niz brojeva:
['15', '19', '17', '19']
//     Niz razlicitih tipova podataka:
['Talib', 15, false, 'Ahmed', 19, true]

// 2. Nacin zapisivanja nizova (Ne koristi se)
new Array([false, 'Ahmed', 19,])

// 2.2 Objects (Objekti) - su glavna stvar u JS.Sluze za skladistenje nekih 
//     Podataka i oni po principu imaju ime,vrednost(name,value)
//     takodje razliciti tipovi podataka

//     Zapisivanje objekata:
// {
//     marka: 'BMW',
//     godiste: 2006,
//     boja: 'crna',
//     kubikaza: '2.0ks',
// }

// 2. Nacin zapisivanja objekata (Ne koristi se)
new Object({punoletstvo: false,
    ime: 'Ahmed',
    godine: 19,})

// 2.3 Set (Setovi) - su slicni nizovima, sa razlikom kod zapisivanja i 
//     Izmedju ostalih najbitnija karakteristika kod setova je da oni 
//     ne mogu imati duplikate

//     Zapisivanje stova:
new Set(['Jabuka', 'sljiva', 'kruska'])

// 2.4 Maps - predstavljaju NP tip podatka koji je vrlo slican objektu,
//            ali zapisivanje se izrazava na drugaciji nacin

//     Zapisivanje mape:
new Map([
    ['apples', 500],
    ['bananas', 200],
    ['berry', 100]
]);

// Treba imati na umu da svi tipovi podataka koji nisu primitivni imaju 
// object tip kada ispitujemo preko funkcije typeof.S