function getAngkaTerbesarKedua(dataNumbers) {
  //untuk mengecek apakah data Number itu sebuah array, jika tidak maka akan return error
  if (!Array.isArray(dataNumbers)) {
    return "ERROR: Parameter harus berupa array.";
  }
// sorting 
  const sortedArray = dataNumbers.sort((a, b) => b - a);
// 
  if (dataNumbers.length < 2) {
    return "ERROR: Array harus ada 2 angka.";
  }
  return sortedArray[1];
}

// EXPECTED RESULT
// Ketika Function tersebut dipanggil
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka));
// EXPECTED OUTPUT :
// 8

console.log(getAngkaTerbesarKedua([0]));
// EXPECTED OUTPUT :
// "ERROR: Array harus ada dua angka."

console.log(getAngkaTerbesarKedua());
// EXPECTED OUTPUT :
// "ERROR: Parameter harus berupa array."
