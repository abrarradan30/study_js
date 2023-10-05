// closure : konsep di mana sebuah fungsi dapat mengakses variabel-variabel yang berada di luar cakupan (scope) fungsi tersebut, bahkan setelah fungsi tersebut selesai dijalankan. 

/* function init() {
    // let nama = "Abrar";
    return function(nama) {
        console.log(nama);
    }
    
}
let panggilNama = init();
panggilNama('Abrar');
panggilNama('Radan');
*/

/*
function ucapkanSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

// factory function
let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

console.dir(selamatMalam('Radan'));
*/

let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());