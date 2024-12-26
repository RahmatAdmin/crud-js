# script
        // Data Array untuk menyimpan nama
        let data = [];

        // Elemen-elemen DOM
        const nameInput = document.getElementById('name');
        const addBtn = document.getElementById('addBtn');
        const dataTable = document.getElementById('dataTable');

        // Fungsi Render Data
        function renderData() {
            // Kosongkan tabel
            dataTable.innerHTML = '';

            // Isi ulang tabel dengan data baru
            data.forEach((item, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${item}</td>
                    <td>
                        <button onclick="editData(${index})">Edit</button>
                        <button onclick="deleteData(${index})">Hapus</button>
                    </td>
                `;
                dataTable.appendChild(row);
            });
        }

        // Fungsi Tambah Data
        addBtn.addEventListener('click', function() {
            const name = nameInput.value.trim();
            if (name) {
                data.push(name); // Tambahkan ke array
                nameInput.value = ''; // Kosongkan input
                renderData(); // Render ulang tabel
            } else {
                alert('Nama tidak boleh kosong!');
            }
        });

        // Fungsi Edit Data
        window.editData = function(index) {
            const newName = prompt('Masukkan nama baru:', data[index]);
            if (newName !== null && newName.trim() !== '') {
                data[index] = newName.trim(); // Update data
                renderData(); // Render ulang tabel
            }
        };

        // Fungsi Hapus Data
        window.deleteData = function(index) {
            if (confirm('Yakin ingin menghapus data ini?')) {
                data.splice(index, 1); // Hapus data
                renderData(); // Render ulang tabel
            }
        };

        // Render awal jika ada data
        renderData();
  
