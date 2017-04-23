'use strict';
/**
 * Module includes following searching algorithms realizations:
 *
 * Linear search
 * Binary search: first entry
 * Binary search: first entry (recoursive)
 * Binary search: left border
 * Binary search: left border (recoursive)
 * Binary search: last entry
 * Binary search: last entry (recoursive)
 * Binary search: right border
 * Binary search: right border (recoursive)
 */

/**
 * Finds index of first entry of item in array.
 * Computational complexity: Theta(n).
 * @param {Array} array
 * @param {Object} item
 * @returns {Number}
 */
exports.linearSearch = (array, item) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === item) {
            
            return i;
        }
    }

    return -1;
};

/**
 * Finds index of first entry of item in array.
 * Array items should be comparable. Array should be sorted.
 * Computational complexity: Theta(log(n)).
 * @param {Array} array
 * @param {Object} item
 * @returns {Number}
 */
exports.binarySearchFirstEntry = (array, item) => {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let middle = Math.floor((right + left) / 2);
        if (item <= array[middle]) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    if (array[right] === item) {

        return right;
    }

    return -1;
};

/**
 * Recoursive realization of binary search first entry.
 * Array should be sorted.
 * Computational complexity: Theta(log(n)).
 * @param {Array} array
 * @param {Object} item
 * @param {Number} left
 * @param {Number} right
 * @returns {Number}
 */
exports.binarySearchFirstEntryRecoursive = function binSearchFirstEntry(
                array, item, left, right) {
    if (typeof left === 'undefined') {
        left = 0;
    }
    if (typeof right === 'undefined') {
        right = array.length - 1;
    }
    if (left < right) {
        let middle = Math.floor((right + left) / 2);
        if (item <= array[middle]) {

            return binSearchFirstEntry(array, item, left, middle);
        } else {

            return binSearchFirstEntry(array, item, middle + 1, right);
        }
    } else if (array[right] === item) {

        return right;
    }

    return -1;
};

/**
 * Finds last array item less than a set item.
 * Array should be sorted.
 * Computational complexity: Theta(log(n)).
 * @param {Array} array
 * @param {Object} item
 * @returns {Number}
 */
exports.binarySearchLeftBorder = (array, item) => {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let middle = Math.floor((right + left) / 2);
        if (item <= array[middle]) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    if (array[right] === item) {

        return right - 1;
    }

    return -1;
};

/**
 * Recoursive realisation of binary search left border.
 * Array should be sorted.
 * Computational complexity: Theta(log(n)).
 * @param {Array} array
 * @param {Object} item
 * @param {Number} left
 * @param {Number} right
 * @returns {Number}
 */
exports.binarySearchLeftBorderRecoursive = function binSearchLeftBorder(
            array, item, left, right) {
    if (typeof left === 'undefined') {
        left = 0;
    }
    if (typeof right === 'undefined') {
        right = array.length - 1;
    }
    if (left < right) {
        let middle = Math.floor((right + left) / 2);
        if (item <= array[middle]) {

            return binSearchLeftBorder(array, item, left, middle);
        } else {

            return binSearchLeftBorder(array, item, middle + 1, right);
        }
    } else if (array[right] === item) {

        return right - 1;
    }

    return -1;
};

/**
 * Finds index of last entry of item in array.
 * Array should be sorted.
 * Computational complexity: Theta(log(n)).
 * @param {Array} array
 * @param {Object} item
 * @returns {Number}
 */
exports.binarySearchLastEntry = (array, item) => {
    let left = -1;
    let right = array.length;
    while (left < right) {
        let middle = Math.floor((right + left) / 2);
        if (item < array[middle]) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    if (item === array[left - 1]) {

        return left - 1;
    }

    return -1;
};

/**
 * Recoursive realization of binary search last entry.
 * Array should be sorted.
 * Computational complexity: Theta(log(n)).
 * @param {Array} array
 * @param {Object} item
 * @param {Number} left
 * @param {Number} right
 * @returns {Number}
 */
exports.binarySearchLastEntryRecoursive = function binSearchLastEntry(
            array, item, left, right) {
    if (typeof left === 'undefined') {
        left = -1;
    }
    if (typeof right === 'undefined') {
        right = array.length;
    }
    if (left < right) {
        let middle = Math.floor((right + left) / 2);
        if (item < array[middle]) {

            return binSearchLastEntry(array, item, left, middle);
        } else {

            return binSearchLastEntry(array, item, middle + 1, right);
        }
    } else if (item === array[left - 1]) {

        return left - 1;
    } else {

        return -1;
    }
};

/**
 * Finds first array item grater than a set item.
 * Array should be sorted.
 * Computational complexity: Theta(log(n)).
 * @param {Array} array
 * @param {Object} item
 * @returns {Number}
 */
exports.binarySearchRightBorder = (array, item) => {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let middle = Math.floor((right + left) / 2);
        if (item < array[middle]) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    if (item === array[left - 1]) {

        return left;
    }

    return -1;
};

/**
 * Recoursive 
 * Array should be sorted.
 * Computational complexity: Theta(log(n)).
 * @param {Array} array
 * @param {Object} item
 * @param {Number} left
 * @param {Number} right
 * @returns {Number}
 */
exports.binarySearchRightBorderRecoursive = function binSearchRightBorder(
            array, item, left, right) {
    if (typeof left === 'undefined') {
        left = 0;
    }
    if (typeof right === 'undefined') {
        right = array.length - 1;
    }
    if (left < right) {
        let middle = Math.floor((right + left) / 2);
        if (item < array[middle]) {

            return binSearchRightBorder(array, item, left, middle);
        } else {

            return binSearchRightBorder(array, item, middle + 1, right);
        }
    } else if (item === array[left - 1]) {

        return left;
    } else {

        return -1;
    }
};
