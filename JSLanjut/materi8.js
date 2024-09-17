// SPREAD OPERATOR
// memecah iterables menjadi single element

// const mhs = ['Leo', 'Beni', 'Budi'];
// console.log(...mhs[0]);

// Menggabungkan 2 / lebih array
// const mhs = ['Leo', 'Beni', 'Budi'];
// const dosen = ['Ade', 'Roi', 'Diga'];
// const orang = [...mhs, 'Aji', ...dosen];
// const orang = mhs.concat(dosen);
// console.log(orang);

// Melakukan copy array
// const mhs = ['Leo', 'Beni', 'Budi'];
// // const mhs1 = mhs;

// const mhs1 = [...mhs];
// mhs1[0] = 'Gani';
// console.log(mhs);

// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for(let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

// const nama = document.querySelector('.nama');
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`)
// .join('');
// nama.innerHTML = huruf;


// REST PARAMETER 
// function myFunc() {
//     // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//     // return myArgs;
//     // return Array.from(arguments);
//     return [...arguments];
// }
// console.log(myFunc(1,2,3,4,5));

// function jumlahkan(...angka) {
//     // let total = 0;
//     // for(const a of angka) {
//     //     total += a;
//     // }

//     // return total;

//     return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1,2,3,4,5));

// Array destructuring 
// const kelompok1 = ['Leo', 'Beni', 'Budi', 'Roni', 'Zain'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// Object destructuting
// const team = {
//     pm: 'Leo',
//     frontEnd: 'Beni',
//     frontEnd2: 'Budi',
//     backEnd: 'Roni',
//     ux: 'Zain',
//     devOps: 'Aji'
// }

// const {pm, ...myTeam} = team;
// console.log(myTeam);

// Filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('boolean', 1, 2, 'Leo', false, 10, true, 'Budi'));