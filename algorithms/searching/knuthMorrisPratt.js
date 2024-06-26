function buildPatternTable(pattern) {
    const table = [0];
    let prefixIndex = 0;
    let suffixIndex = 1;

    while (suffixIndex < pattern.length) {
        if (pattern[prefixIndex] === pattern[suffixIndex]) {
            table[suffixIndex] = prefixIndex + 1;
            prefixIndex++;
            suffixIndex++;
        } else if (prefixIndex === 0) {
            table[suffixIndex] = 0;
            suffixIndex++;
        } else {
            prefixIndex = table[prefixIndex - 1];
        }
    }

    return table;
}

function knuthMorrisPratt(text, pattern) {
    const patternTable = buildPatternTable(pattern);
    let textIndex = 0;
    let patternIndex = 0;

    while (textIndex < text.length) {
        if (text[textIndex] === pattern[patternIndex]) {
            if (patternIndex === pattern.length - 1) {
                return textIndex - pattern.length + 1;
            }
            patternIndex++;
            textIndex++;
        } else if (patternIndex > 0) {
            patternIndex = patternTable[patternIndex - 1];
        } else {
            patternIndex = 0;
            textIndex++;
        }
    }

    return -1;
}

