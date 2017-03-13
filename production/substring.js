'use strict';

module.exports = countEntries;

/**
 * Checks if text includes substring at idx position.
 * @param {String} text
 * @param {String} sample
 * @param {Number} startIdx
 * @returns {Bool}
 */
function includes(text, sample, startIdx) {
    return sample.split('').every(function (item, idx) {
        return sample[idx] === text[idx + startIdx];
    });
}

var PRIME_NUMBER = 31;

/**
 * Calculates hash of string by hash function.
 * @param {String} string
 * @returns {Number}
 */
function getHash(string) {
    return string.split('').reduce(function (currentHash, item, idx) {
        return currentHash * PRIME_NUMBER + string.charCodeAt(idx);
    }, 0);
}

/**
 * Counts substring in text entires by hash-function.
 * Computational complexity: in good case Theta(n), in bad case Theta(n^2).
 * @param {String} text
 * @param {String} sample
 * @returns {Number}
 */
function countEntries(text, sample) {
    if (text.length < sample.length) {
        throw new Error('Text length is less than sample length');
    }
    if (text.length === 0) {

        return 0;
    }
    var sampleHash = getHash(sample);
    var maxPower = Math.pow(PRIME_NUMBER, sample.length - 1);
    return text.slice(0, text.length - sample.length + 1)
        .split('')
        .reduce(function (currentState, item, idx) {
            if (currentState.hash === sampleHash && includes(text, sample, idx)) {
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
