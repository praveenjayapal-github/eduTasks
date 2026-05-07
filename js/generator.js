function generateMissingLetter(word) {
    let index = Math.floor(Math.random() * word.length);
    let missingWord = word.split("");
    missingWord[index] = "_";

    return missingWord.join("");
}