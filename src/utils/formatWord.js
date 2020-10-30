function formatWord(word) {
    if ( word.length > 15 ) {
        return word.slice(0,14).concat("...");
    }
    return word;
}

export default formatWord;