const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
// const newAngka = [];
// for(let i = 0; i < angka.length; i++) {
//     if( angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// map - kalikan angka dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// reduce - jumlahkan seluruh elemen array
// 0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((accumulator, currentValue) => 
// accumulator + currentValue);
// console.log(newAngka);

// Method chain - mencari > 5 kali 3 dan jumlahkan
// const hasil = angka.filter(a => a > 5) // 8,9,9
//     .map(a => a * 3) // 24,27,27
//     // .map(a => a / 2)
//     .reduce((acc, curr) => acc + curr);
// console.log(hasil);

// LATIAN
// ambil semua elemen video, pilih "JS Lanjutan"
const videos = Array.from(document.querySelectorAll('[data-duration]'));
let jsLanjut = videos.filter(video => video.textContent.includes('JS LANJUTAN'))

// ambil durasi masing2 video   
    .map(item => item.dataset.duration)

// ubah durasi menjadi int, ubah menit menjadi detik
    .map(waktu => {
        // 10:30 -> [10, 30] split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

// jumlahkan semua detik
    .reduce((total, detik) => total + detik)

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;
const jmlVideo = videos.filter(video => video.textContent.includes('JS LANJUTAN')).length;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam ${menit} menit ${detik} detik.`; 
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} video.`;
console.log(jsLanjut); 