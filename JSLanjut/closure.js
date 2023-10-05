function init() {
    // let nama = "Abrar";
    return function(nama) {
        console.log(nama);
    }
    
}
let panggilNama = init();
panggilNama('Abrar');
panggilNama('Radan');