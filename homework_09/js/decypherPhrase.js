function decypherPhrase(charactersMap, text) {

    var reverseCharactersMap = {};

    for (var key in charactersMap) {
        reverseCharactersMap[charactersMap[key]] = key;
    }

    return cypherPhrase(reverseCharactersMap, text);
}
