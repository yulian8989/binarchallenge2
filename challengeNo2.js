const checkTypeNumber = (givenNumber) => {
    if (givenNumber === undefined) {
        return "Error: Bro where is the parameter?";
    }

    if (typeof givenNumber !== 'number') {
        return "Error: Invalid data type";
    }

    if (isNaN(givenNumber)) {
        return "Error: Invalid data type";
    }
    if (givenNumber % 2 === 0) {
        return "GENAP";
    } else {
        return "GANJIL";
    }
};

// Contoh penggunaan fungsi
console.log(checkTypeNumber(10)); // "GENAP"
console.log(checkTypeNumber(3));  // "GANJIL"
console.log(checkTypeNumber("3")); // "Error: Invalid data type"
console.log(checkTypeNumber({})); // "Error: Invalid data type"
console.log(checkTypeNumber([])); // "Error: Invalid data type"
console.log(checkTypeNumber());    // "Error: Bro where is the parameter?"
