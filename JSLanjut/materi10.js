// CALLBACK

// Synchronous callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama : ');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// const mhs = [
//     {
//         "nama": "Leo",
//         "nrp": 123,
//         "email": "leo@mhs",
//         "jurusan": "SI",
//         "idDosenWali":1
//     },
//     {
//         "nama": "Budi",
//         "nrp": 124,
//         "email": "budi@mhs",
//         "jurusan": "TI",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Roni",
//         "nrp": 129,
//         "email": "roni@mhs",
//         "jurusan": "DKV",
//         "idDosenWali": 2
//     }
// ];

// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');


// Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('materi10.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// });
// console.log('selesai');

// Jquery
console.log('mulai');
$.ajax({
    url: 'materi10.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    erro: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');