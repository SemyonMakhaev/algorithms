'use strict';

const PRIME_NUMBER = 31;

/**
 * Calculates hash of string by hash function.
 * @param {String} string
 * @returns {Number}
 */
function getHash(string) {
    return string.split('').reduce((currentHash, item, idx) => {
        return currentHash * PRIME_NUMBER + string.charCodeAt(idx);
    }, 0);
}

/**
 * Counts substring in text entries by hash-function.
 * Computational complexity: in good case Theta(n), in bad case Theta(n^2).
 * @param {String} text
 * @param {String} sample
 * @returns {Number}
 */
exports.countEntries = (text, sample) => {
    if (text.length < sample.length) {
        throw new Error('Text length is less than sample length');
    }
    if (text.length === 0) {

        return 0;
    }
    const sampleHash = getHash(sample);
    const maxPower = Math.pow(PRIME_NUMBER, sample.length - 1);
    return text.slice(0, text.length - sample.length + 1)
        .split('')
        .reduce((currentState, item, idx) => {
            if (currentState.hash === sampleHash && ~text.indexOf(sample, idx)) {
                currentState.entries++;
            }
            currentState.hash = (currentState.hash - text.charCodeAt(idx) * maxPower) * PRIME_NUMBER +
                            text.charCodeAt(sample.length + idx);
            return currentState;
        }, {
            hash: getHash(text.substring(0, sample.length)),
            entries: 0
        }).entries;
};

/**
 * Counts substring in text entries using Boyer-Moore algorithm.
 * Computational complexity: O(n + m) where n - text length and m - sample length.
 * @param text
 * @param sample
 */
exports.boyerMooreSearch = (text, sample) => {
    // TODO
};
