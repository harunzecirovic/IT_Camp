const niz = [-9,-78,4,17,-22,-5,7,6,10,18]

const prvi = (arr) => {
    const filtrirano = arr.filter((element) => element>2)
    const mapped = filtered.map((element) => {
    return element<8 ? (element*4) /2 : element *7
})
const manje = mapped.filter((element)=> element<10)
return manje
}
console.log(prvi(niz))

// reduce () metoda vrsi takodje iteraciju kroz svaki element s tim sto ona
// kao rezulktat daje jedan br
// koristi se za sumu najcesce

const korpa = [1600,900,1400,220,1490]

const zbir = korpa.reduce((ranija,trenutna) => ranija + trenutna)
console.log(zbir)

// u sliucaju da npr imamo postarinu mozemo je dodat kao inual value

const ozbir = korpa.reduce((prev,cur) => prev + cur,500)
console.log(ozbir)

const godine = [15,14,19,18,17,18,20,13]

const adult = (arr) =>{
    
const gzbir = godine.reduce((prva,tren) => prva + tren)

}