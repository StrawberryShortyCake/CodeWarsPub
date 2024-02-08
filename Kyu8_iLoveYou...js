function howMuchILoveYou(nbPetals) {
    let phrases = [
        "not at all", //6
        "I love you", //1
        "a little", //2
        "a lot", //3
        "passionately", //4
        "madly", //5
    ];
    return phrases[nbPetals >= 6 ? nbPetals % 6 : nbPetals];
}