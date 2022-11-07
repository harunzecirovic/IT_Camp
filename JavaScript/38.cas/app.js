// 1.

// const prvi = () =>{
//     const voce = prompt('Unesite voce')
//     const niz = voce.split(',')
//     if(niz.includes('jagoda')){
//         return `Jagoda se nalazi na ${niz.indexOf('jagoda')+1}. mjestu`
//     }else{
//         niz.sort()
//         niz.unshift(10)
//         niz.push(100)
//         return niz
//     }
// }
// console.log(prvi())

// 2.

console.log(sabiranje(4,5))

function sabiranje(br1,br2){
    return br1+br2
}

// 3.

console.log(saberi(4,2,1))

const tri = (br1,br2,br3) => br1 + br2 + br3;