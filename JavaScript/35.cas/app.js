// 0.

const DATA1 = [2,26,38,75,11,29]
const DATA2 = ['a','b','c','d','e']


const oldTask = (arr1,arr2)=> {
    const newArr = arr1.concat(arr2)
    const newArr2 = newArr.filter((el) => el%2===0)
    newArr2.unshift(10,20)
    return `${newArr}\n ${newArr2}`
}
console.log(oldTask(DATA1,DATA2))

// 1.

const niz = [2,26,38,75,11,29]

function prvi(arr){
    let brojac = arr.length
    let suma = arr.reduce((prv,tre)=>prv+tre)
    return suma/brojac
}
console.log(prvi(niz))

// 2.

const drugi = (ar)=> {
    const km= ar.map((function(element){
        return +(element*1.6)
    })).reduce((prv,tre)=>prv+tre)
    return km
}
console.log(drugi(niz))

// 3.

const br = [12,20,13,27,18,43,2]

const treci = (a)=>{
    const b= br.filter((element)=> element%2===0)
    const c= b.map((function(element){
        return (element*2)
    })).reduce((prv,tre)=>prv+tre)
    return c
}
console.log(treci(br))

// 4.

const cetvrti = ()=>{
    const ni = [1,2]
    let i =2 
    while(ni[i-2]+ni[i-1]<=4000000){
        ni.push(ni[i-2]+ni[i-1])
        i++
    }
    const sum = ni
    .filter((el)=>el%2===0)
    .reduce((prv,tre)=>prv+tre)
    return sum
}
console.log(cetvrti())
