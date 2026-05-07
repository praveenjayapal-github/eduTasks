function generateTask() {
    let html = "<h2>Fill in the missing letters</h2>";

    for (let i = 0; i < 5; i++) {
        let word = words[Math.floor(Math.random() * words.length)];
        let task = generateMissingLetter(word);

        html += `<p>${i + 1}. ${task}</p>`;
    }

    $("#worksheet").html(html);
}