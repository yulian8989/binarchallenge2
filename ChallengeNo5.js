const dataPenjualanNovel = [
    {
        idProduct: "BOOK002421",
        namaProduk: "Pulang - Pergi",
        penulis: "Tere Liye",
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: "BOOK002351",
        namaProduk: "Selamat Tinggal",
        penulis: "Tere Liye",
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: "BOOK002941",
        namaProduk: "Garis Waktu",
        penulis: "Fiersa Besari",
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: "BOOK002941",
        namaProduk: "Laskar Pelangi",
        penulis: "Andrea Hirata",
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
];

const getInfoPenjualan = (dataPenjualan) => {
    
    // Menghitung total keuntungan dan total modal
    let totalKeuntungan = 0;
    let totalModal = 0;
    let produkBukuTerlaris = "";
    let penulisTerlaris = "";
    let maxTerjual = -1;
    let penulisBuku = {};

    for (const data of dataPenjualan) {
        const keuntungan = (data.hargaJual - data.hargaBeli) * data.totalTerjual;
        totalKeuntungan += keuntungan;
        totalModal += data.hargaBeli * (data.totalTerjual + data.sisaStok);

        // Menghitung produk buku terlaris
        if (data.totalTerjual > maxTerjual) {
            maxTerjual = data.totalTerjual;
            produkBukuTerlaris = data.namaProduk;
        }

        // Menghitung penulis paling laris
        if (penulisBuku[data.penulis]) {
            penulisBuku[data.penulis] += data.totalTerjual;
        } else {
            penulisBuku[data.penulis] = data.totalTerjual;
        }
    }

    // Mencari penulis dengan penjualan tertinggi
    let maxPenulisTerlaris = -1;
    for (const penulis in penulisBuku) {
        if (penulisBuku[penulis] > maxPenulisTerlaris) {
            maxPenulisTerlaris = penulisBuku[penulis];
            penulisTerlaris = penulis;
        }
    }

    // Mencari persentase keuntungan
    const persentaseKeuntungan = totalKeuntungan / totalModal;

    // Memformat hasil menjadi mata uang
    const formattedTotalKeuntungan = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(totalKeuntungan);

    const formattedTotalModal = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(totalModal);

    const formattedPersentaseKeuntungan = new Intl.NumberFormat("id-ID", {
        style: "percent",
    }).format(persentaseKeuntungan);

    const result = {
        totalKeuntungan: formattedTotalKeuntungan,
        totalModal: formattedTotalModal,
        persentaseKeuntungan: formattedPersentaseKeuntungan,
        produkBukuTerlaris: produkBukuTerlaris,
        penulisTerlaris: penulisTerlaris,
    };

    return result;
};

console.log(getInfoPenjualan(dataPenjualanNovel));
