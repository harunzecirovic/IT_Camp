// Const je skracenica od constant i njoj se vrijednost ne mijenja

// var je varijebla odnosno promenjiva

// let je promenjiva ju jendom bloku koda

// Destrukturizacija objekata je razlaganje objekta na posebne dijelove

const obj = {
    ime: 'harun',
    prezime:'zecirovic',
    godine: 18,
}

// obj.godine= 19

console.log(obj)

// Fors

const novi = {
    ...obj,
    godine:27,
}

console.log(novi)

if (novi.age === 27){
    console.log(novi)
}else{
    console.log('Error')
}

novi === 27 ? console.log(novi) : console.log('Error')

// Jedno jednako da damo vrijenost,dva promena tacnosti a tri provera tacnosti i tipa podatka

// Class base components su komponente bazrane na klasama i metodama