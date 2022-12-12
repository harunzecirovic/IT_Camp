// 1. Zadatak

const string = (A,B) => {
    const duzina = A.length > B.length ? A.length : B.length
    const C=''
    for (let i = 0;i<= duzina-1;i++){
        C+= A[i]+B[i]
    }
    return C
}

console.log(string())