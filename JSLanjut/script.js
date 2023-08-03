// Cara untuk membuat object pada javascript
// 1. Object Literal 
/* 
// PROBLEM : tidak efektif untuk obyek yg banyak
let mahasiswa1 = {
    nama: 'Radan',
    energi: 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    } 
}

let mahasiswa2 = {
    nama: 'Mudi',
    energi: 20,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    } 
} */

// 2. Function Declaration

const methodMahasiswa = {
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    },

    main: function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat tidur!`);
    },

    tidur: function(jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }
};
 
function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama =  nama;
    mahasiswa.energi = energi;
    
    return mahasiswa;
}

let radan = Mahasiswa('Radan', 10);
let dody = Mahasiswa ('Dody', 20);


// 3. Constructor Function
// keywoard new
/*
function Mahasiswa(nama, energi) {
    this.nama =  nama;
    this.energi = energi;

    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    this.main = function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }
}
let radan = new Mahasiswa ('Radan', 10);
*/

// 4. Object create