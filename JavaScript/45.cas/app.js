const niz = [-3,4.8,5,3,-3.2]
const prvi = (arr) => {
    const filtered = arr.filter(function (number) {
        return number>0 && number%1 === 0
    })
    const skver = filtered.map(function (number){
        return number**2
    })
    return skver
}

console.log(prvi(niz))
const a = 14
const b = 14.15

console.log(Number.isInteger(a))

// 2.

const nizz = [12,1,3,2,3,4,6,4]
const duplo = function(arr){
    const newArr = []
    for (let i=0; i<arr.length ; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(duplo(nizz))

// 3.

const niz1 = ['sto','stolica','tabla','marker']
const niz2 = [...niz1]
console.log(niz2)
niz2[1]='fotelja'
console.log(niz2)
console.log(niz1)
const niz3 = [...niz,...niz1]
console.log(niz3)
const niz4 = (15,niz2, 150)

