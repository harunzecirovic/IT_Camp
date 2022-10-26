// Napraviti niz sa brojevima vecim od 17. Iteraciju izvrsiti preko for petlje

const niz = [4,7,25,32,42,14,29,19]

const niz2 =[]
for (let br of niz){
    if (br>17){
        niz2.push(br)
    }
}
console.log(niz2)

// Filter metoda kreira novi niz sa onim elementima koji su prosli test(uslov)

const niz3= niz.filter((element) =>element>17)
console.log(niz3)

// Maksimalna duzina novog niza je duzina prvog niza a minimalna 0

const niz4= niz.filter((element) =>element%2===0)
console.log(niz4)

const rijeci =['televizor','auto','telefon','voda','ranac','stolica']

const rijec =[]
const niz5= rijeci.filter((element) => {
    if (element[1]==='e'){
        return rijec.push(element)
    }
})
console.log(niz5)

const rijec1= rijeci.filter((element) => {
    return element.length<=6
})
console.log(rijec1)

const skupina =['rijec',121,'raka',22,11,false,true,true,[true,false],43]

const skup= skupina.filter((element) => {
    return typeof element=== 'boolean'
})
console.log(skup)

// Provjera jel neto niz

console.log(typeof [1,2,3])
console.log([1,2,3] instanceof Array)
console.log(Array.isArray([1,2,3]))

const niz6 = [-12,4,7,24,55,324324 ,-12,3,21]

const skup50= niz6.filter((element) => {
    return element <= 50 && element % 2 ===0 
})
console.log(skup50)
