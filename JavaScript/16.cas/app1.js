const zadatak = function (){
    let prvi = +prompt('Unesite zapreminu flase');
    let drugi = +prompt('Unesite kolicinu limunade');
    // if(isNaN(prvi) || prvi>10) {
    // return ('Nije unijeta korektna vrijednost za zapreminu flase')
    // else if(isNaN(drugi) || drugi>50) {
    // return ('Nije unijeta korektna vrijednost za broj litara posude')
    return Math.ceil(drugi/prvi )
}

console.log(zadatak())
