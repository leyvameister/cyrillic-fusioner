function latinToCyrillic(text) {
    const mapping = {
        'a': 'а',
        'b': 'в',
        'r': 'я',
        'e': 'з',
        'k': 'к',
        'm': 'м',
        'h': 'н',
        'p': 'р',
        'c': 'с',
        't': 'т',
        'x': 'х',
        '3': 'З',
        'n': 'и',
        'ñ': 'й'
    };

    return text.split('').map(letter => {
        const lowerLetter = letter.toLowerCase();
        const cyrillicEquivalent = mapping[lowerLetter];
        if (cyrillicEquivalent) {
            return letter === lowerLetter ? cyrillicEquivalent : cyrillicEquivalent.toUpperCase();
        }
        return letter;
    }).join('');
}

document.getElementById('inputText').addEventListener('input', function () {
    const inputText = this.value;
    const outputText = latinToCyrillic(inputText);
    document.getElementById('outputText').value = outputText;
});
