// for..of
// array
// const mhs = ['Leo', 'Beni', 'Budi'];

// for(let i = 0; i < mhs.lenght; i++) {
//     console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// for(const m of mhs) {
//     console.log(m);
// }

// String
// const nama = 'Leo';
// for(const n of nama) {
//     console.log(n);
// }

// const mhs = ['Leo', 'Beni', 'Budi'];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for(const [i, m] of mhs.entries()) {
//     console.log(m);
// }

// NodeList
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.textContent));
// for(n of liNama) {
//     console.log(n.innerHTML);
// }

// Arguments
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);

// function jumlahkanAgka() {
//     // return [1, 2, 3, 4, 5].reduce((a, i) => a + i);
//     // arguments.forEach(a => jumlah += a);
//     let jumlah = 0;
//     for(a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAgka(1,2,3,4,5));

// for..in
const mhs = {
    nama: 'Leo',
    umur: 20,
    email: 'leo@mhs'
}

for (m in mhs) {
    // console.log(m);
    console.log(mhs[m]);
}