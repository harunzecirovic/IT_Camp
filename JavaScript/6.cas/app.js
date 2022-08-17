// const broj1 = Number(prompt('unesite prvi broj: '));
// const broj2 = Number(prompt('unesite drugi broj: '));

// if (isNaN(broj1) || isNaN(broj2)) {
//     console.log('niste unijeli korekte vrijednosti za brojeve');
// }
// else if (broj1 === broj2) {
//     console.log(
//         'povrsina kvadrata je: ' + broj1 * broj2
//     );
// }

// else {
//     console.log(
//         'povrsina pravouganika na osnovu brojeva je:' + broj1 * broj2
//     );
// }

// 2.

const x = Number(prompt('unesite prvi broj: '));
const y = Number(prompt('unesite drugi broj: '));

if (isNaN(x) || isNaN(y)) {
    console.log('niste unijeli korekte vrijednosti za brojeve');
}

else if (y === 0 ) {
    console.log('dijeljenje sa 0 nije moguce');
}

else {
    console.log(' kolicnik ' + ' broja ' + x + ' i ' + ' broja ' + y + ' je ' + x/y);
}