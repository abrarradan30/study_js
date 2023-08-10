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

function cetakURL(username) {
    var instagramURL = 'http://instagram.com/';
    return instagramURL + username;
}

console.log(cetakURL(username));
*/