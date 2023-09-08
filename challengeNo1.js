function changeWord(selectedText, changedText, text){
    return text.replace(selectedText, changedText);
}

let kalimat1 = "Andini sangat mencintai kamu selamanya mencintai";
let kalimat2 = "Gunung bromo tak akan mampu menggambarkan seberapa besarnya cintaku padamu"

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));