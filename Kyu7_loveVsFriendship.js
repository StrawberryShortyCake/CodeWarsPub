function wordsToMarks(string) {
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let alphaNums = {};
    let sum = 0;

    for (i = 0; i < alphabets.length; i++) {
        alphaNums[alphabets[i]] = i + 1;
    }

    for (var letter of string) {
        sum += alphaNums[letter.toLowerCase()];
    }

    return sum;
}