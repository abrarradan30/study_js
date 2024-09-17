// Template literals 
// const nama = 'Leo';
// const umur = '20';
//console.log(`Halo, nama saya ${nama} berumur ${umur} tahun.`);
//console.log('Halo, nama saya ' + nama + ' berumur ' + umur + ' tahun.');

// Embedded expressions
//console.log(`${alert('halo!')}`);
// const x = 11;

// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// 1. HTML Fragments
// const mhs = {
//     nama: 'Leo',
//     umur: 20,
//     nrp: '1122',
//     email: 'leo@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;
// console.log(el);

// 2. Looping
// const mhs = [
//     {
//         nama: 'Leo',
//         email: 'leo@gmail.com'
//     },
//     {
//         nama: 'Beni',
//         email: 'beni@gmail.com'
//     },
//     {
//         nama: 'Zen',
//         email: 'zen@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//         </ul>`).join('')}
// </div>`;

// 3. Conditionals
// ternary
// const lagu = {
//     judul: ' Tetap Dalam Jiwa',
//     penyanyi: 'Isyana',
//     feat: 'Rayi'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`

// 4. Nested / bersarang
// const mhs = {
//     nama: 'Leo',
//     semester: 5,
//     mataKuliah: [
//         'Basis Data',
//         'Rekayasa Web',
//         'APSI',
//         'Pemrograman Web'
//     ]
// }

// function cetakMataKuliah(mataKuliah) {
//     return `
//     <ol>
//      ${mataKuliah.map(mk => `<li> ${mk} </li>`).join('')}
//     </ol>
//     `;
// }


// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="semester"> Semester : ${mhs.semester}</span>
//     <h4>Mata Kuliah :</h4>
//     ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`

// document.body.innerHTML = el;

// ---Tagged Templates---
// const nama = 'Leo';
// const umur = 20;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // });
//     // return result;

//     return strings.reduce(( result, str, i) => `${result}${str}${values[i] || ''}`
//     , '');
// }

// const str = coba `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

const nama = 'Leo';
const umur = 20;
const email = 'leo@gmail'

function highlight(strings, ...values) {
    return strings.reduce(( result, str, i) => `${result}${str}
    <span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya ${email}.`;

document.body.innerHTML = str;