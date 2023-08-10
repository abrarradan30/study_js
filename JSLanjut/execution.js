// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE
/*
var nama = 'Radan';
console.log(nama);

/* creation phase pada Global Context
nama var = undefined
nama function = fn()
hoisting
window = global object 
this = window
execution phase
*/

/*
var nama = 'Radan';
var umur = 22;

console.log(sayHello());

function sayHello() {
   return `Halo, namas saya ${nama}, saya ${umur} tahun.`; 
}
*/
/* function membuat Local Execution Context
yang didalamnya terdapat creation dan execution phase
window
arguments
hoisting
*/

/*
var nama = 'Radan';
var username = '@abrarradan';

function cetakURL() {
    var instagramURL = 'http://instagram.com/';
    return instagramURL + username;
}

console.log(cetakURL('@babe','@erik'));
*/

/*
function a() {
    console.log('ini a');

    function b() {
        console.log('ini b');

        function c() {
            console.log('ini c');
        }

        c();
    }

    b();
}
a();
*/

// Latian
function satu() {
    var nama = 'Radan';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Erik';
satu();
dua('Doddy');
console.log(nama);