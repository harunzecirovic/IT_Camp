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