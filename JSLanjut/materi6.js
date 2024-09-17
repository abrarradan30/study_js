// Destructuring variable / assigment

// Destructuring Array
const perkenalan = ['Halo', 'nama', 'saya', 'Leo'];
// const [salam, satu, dua, nama] =  perkenalan;

// Skip items
// const [salam, , , nama] =  perkenalan;
// console.log(nama);

// Swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(b);
// console.log(a);

// return value pada funtion 
// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructuring object
// const mhs = {
//     nama: 'Leo',
//     umur: 20
// };

// const {nama, umur} = mhs;
// console.log(mhs);

// Assignment tanpa deklarasi object
// ({nama, umur} = { nama: 'Leo', umur: 33 });
// console.log(nama);

// Assign ke variabel baru
// const mhs = {
//     nama: 'Leo',
//     umur: 20
// };

// const {nama: n, umur: u} = mhs;
// console.log(n);

// Memberikan default value
// const mhs = {
//     nama: 'Leo',
//     umur: 20,
//     email: 'leo@gmail.com'
// };

// const {nama, umur,email = 'email@defaul.com'} = mhs;
// console.log(email);

// Memberi nilai default = assign ke variabel baru
// const mhs = {
//     nama: 'Leo',
//     umur: 20,
//     email: 'leo@gmail.com'
// };

// const {nama: n, umur: u, email: e = 'email@defaul.com'} = mhs;
// console.log(e);

// Rest parameter
// const mhs = {
//     nama: 'Leo',
//     umur: 20,
//     email: 'leo@gmail.com'
// };

// const {nama, ...value} = mhs;
// console.log(value);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//     id: 123,
//     nama: 'Leo',
//     umur: 20,
//     email: 'leo@gmail.com'
// };

// function getIdMhs({ id }) {
//     return id;
// }

// console.log(getIdMhs(mhs)); 

// Destructuring
// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const jumlah = penjumlahaPerkalian(2, 3)[0];
// const kali = penjumlahaPerkalian(2, 3)[1];

// const [jumlah, kali] = penjumlahaPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi = 'no value'] = kalkulasi(2, 3);
// console.log(bagi);

// Object destructuring
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {bagi, tambah, kali, kurang} = kalkulasi(2, 3);
// console.log(kurang);

// Destructure function arguments
const mhs1 = {
    nama: 'Leo',
    umur: 20,
    email: 'leo@mhs.ac.id',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
}

// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, umur ${mhs.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
    return `Halo, nama saya ${nama}, umur ${umur} tahun, dan 
    nilai uas saya = ${uas}.`;
}

console.log(cetakMhs(mhs1));