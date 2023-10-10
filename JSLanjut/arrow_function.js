// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Abrar'));

// satu parameter
// const tampilNama = (nama) => { 
//     return `Halo, ${nama}`; 
// }
// console.log('Abrar Radan');


// dua parameter
// const tampilNama = (nama, waktu) => { 
//     return `Selamat  ${waktu}, ${nama}`; 
// }
// console.log(tampilNama('Radan', 'Malam'));


// implisit return
// const tampilNama = nama => return `Halo, ${nama}`; 
// console.log('Abrar Radan');


// const tampilNama = () => `Hello World!;
// console.log(tampilNama());


let mahasiswa = ['Abrar', 'Radan', 'Kartiko'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf);