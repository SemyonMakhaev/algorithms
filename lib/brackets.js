'use strict';

module.exports = isCorrectSequence;

/**
 * Counts defined array elements.
 * @param {Array} array
 * @returns {Number}
 */
function getLength(array) {
    return array.filter(item => typeof item !== 'undefined').length;
}

/**
 * Determines if bracket sequence is correct.
 * @param {String} string
 * @returns {Bool}
 */
function isCorrectSequence(string) {
    const pairs = {};
    pairs['('] = ')';
    pairs['['] = ']';
    const values = Object.keys(pairs).map(item => pairs[item]);
    const stack = [];
    let retValue = true;
    string.split('').forEach(item => {
        if (item in pairs) {
            stack.push(item);
        } else if (values.indexOf(item) >= 0) {
            if (getLength(stack) === 0 || pairs[stack.pop()] !== item) {
                retValue = false;
            }
        } else {
            retValue = false;
        }
    });

    return retValue && getLength(stack) === 0;
}
