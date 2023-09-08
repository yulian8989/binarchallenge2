
// Data penjualan dari Toko Pak Aldi
const dataPenjualanPakAldi = [
    {
        namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan: 760000,
        kategori: "Sepatu Sport",
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Black Brown High',
        hargaSatuan: 960000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 37,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Maroon High',
        hargaSatuan: 360000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
        hargaSatuan: 120000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
    }
];

function getTotalPenjualan(dataPenjualan) {
    // Validasi tipe data parameter
    if (!Array.isArray(dataPenjualan)) {
        return'Parameter harus berupa array';
        
    }
// inisialisasi 
    let totalPenjualan = 0;

    for (let i = 0; i < dataPenjualan.length; i++) {
        const barang = dataPenjualan[i];
        if (typeof barang.totalTerjual !== 'number') {
            return'Properti total Terjual harus berupa angka';
        }
        //menambahkan total terjual ke total penjualan
        totalPenjualan += barang.totalTerjual;
    }

    return totalPenjualan;
}

// Memanggil fungsi dan mencetak hasilnya
console.log(getTotalPenjualan(dataPenjualanPakAldi)); // Hasil yang diharapkan: 307
// untuk mereturn erorr 'Parameter harus berupa array' rubah variabel dataPenjualanPakAldi menjadi string
// untuk memunculkan error 'Properti total terjual harus berupa angka' yaitu dengan mengubah value totalTerjual di dataset menjadi string
