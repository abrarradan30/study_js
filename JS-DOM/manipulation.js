// MANIPULASI ELEMEN
// const judul = document.getElementById('judul');
// judul.innerHTML = "<em>Leoo</em>";

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world';

// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'leo'); 

// const a = document.querySelector('section#a a');

// const p2 = document.querySelector('.p2');

// MANIPULASI DOM

// buat elemen baru
// const pBaru = document.createElement('p');
// const teksPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan pada paragraf 
// pBaru.appendChild(teksPBaru);
// simpan pBaru diakhir section A
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

// const liBaru = document.createElement('li');
// const teksLiBaru = document.createTextNode('Item Baru');
// liBaru.appendChild(teksLiBaru);

// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('li:nth-child(2)');

// ul.insertBefore(liBaru, li2);

// remove
// const link = document.getElementsByTagName('a')[0];
// sectionA.removeChild(link);

// replace
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// const h2Baru = document.createElement('h2');
// const teksH2Baru = document.createTextNode('Judul baru!');

// h2Baru.appendChild(teksH2Baru);
// sectionB.replaceChild(h2Baru, p4);

// update
// pBaru.style.backgroundColor = 'lightgreen';
// liBaru.style.backgroundColor = 'lightgreen';
// h2Baru.style.backgroundColor = 'lightgreen';