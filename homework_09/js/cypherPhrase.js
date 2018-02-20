function cypherPhrase(charactersMap, text) {

    var splitPhrase = text.split('');
    result = getTransformedArray(splitPhrase, function (letter) {
        for (var key in charactersMap) {
            if (key === letter) {
                letter = charactersMap[key];
            }
        }
        return letter;
    });

    return result.join('');

}