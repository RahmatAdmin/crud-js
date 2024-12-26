setInterval(() => {
    console.log("Connected...")
}, 1000)

let table =  document.getElementById('data-table');
let button = document.getElementById('button');
let valueNama = document.getElementById('nama');
let valueEmail = document.getElementById('email');
let valueCode = document.getElementById('number');

let data = JSON.parse(localStorage.getItem('data')) || [];

// fungsi local storage untuk menyimpan data sementara
function saveToLocalStorage() {
    localStorage.setItem('data', JSON.stringify(data));
}

// fungsi menampilkan data
const showData = () => {
    table.innerHTML = '';
data.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${index+1}</td>
        <td>${item[0]}</td>
        <td>${item[1]}</td>
        <td>${item[2]}</td>
        <td>
            <button class="edit" onclick="editData(${index})">Edit</button>
            <button class="delete" onclick="deleteData(${index})">Hapus</button>
        </td>
        `;
        table.appendChild(row);
});
}

// fungsi save data
function getData() {
    let value = [valueNama.value, valueEmail.value, valueCode.value];
    data.push(value);
    saveToLocalStorage();
    showData();
}

// fungsi save data dijalankan saat tombol di klik
const saveData = () => {
    button.addEventListener('click', getData);
}

// fungsi hapus data
const deleteData = (index) => {
    data.splice(index, 1);
    showData();
} 

// fungsi edit data
window.editData = (index) => {
    let currentData = data[index];

    let newNama = prompt('Masukkan nama baru:', currentData[0]);
    let newEmail = prompt('Masukkan email baru:', currentData[1]);
    let newCode = prompt('Masukkan kode baru:', currentData[2]);

    data[index] = [
        newNama  || currentData[0],
        newEmail || currentData[1],
        newCode  || currentData[2]
    ];

    saveToLocalStorage();
    showData();
}

// menampilkan data dan local storage
saveData();
showData();