'use strict';

module.exports = isCorrectSequence;

/**
 * Counts defined array elements.
 * @param {Array} array
 * @returns {Number}
 */
function getLength(array) {
    return array.filter(function (item) {
        return typeof item !== 'undefined';
    }).length;
}

/**
 * Determines if bracket sequence is correct.
 * @param {String} string
 * @returns {Bool}
 */
function isCorrectSequence(string) {
    var pairs = {};
    pairs['('] = ')';
    pairs['['] = ']';
    var values = Object.keys(pairs).map(function (item) {
        return pairs[item];
    });
    var stack = [];
    var retValue = true;
    string.split('').forEach(function (item) {
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
