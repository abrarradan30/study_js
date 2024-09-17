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


//let mahasiswa = ['Abrar', 'Radan', 'Kartiko'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf);

// Constructor Function
// const Mahasiswa = function() {
//     this.nama = 'Leo';
//     this.umur = 20;
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun.`);
//     }
// }

// const leo = new Mahasiswa();

// Arrow function 
// const Mahasiswa = function() {
//     this.nama = 'Leo';
//     this.umur = 20;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun.`);
//     }
// }

// const leo = new Mahasiswa();

// Object literal
// const mhs1 = {
//     nama: 'Leo',
//     umur: 20,
//     sayHello: () =>  {
//         console.log(`Halo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun.`);
//     }
// }


// const Mahasiswa = function() {
//     this.nama = 'Leo';
//     this.umur = 20;
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun.`);
//     }

//     setInterval( () => {
//         console.log(this.umur++);
//     }, 500);
// }

// const leo = new Mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout( () => {
        this.classList.toggle(dua);
    }, 600);
});