'use strict';
/**
 * Module includes following sorting algorithms realizations:
 * 
 * Bubble sort
 * Merge sort
 * Hoare (Quick) sort
 */

/**
 * Sorts array by bubble sort.
 * Computational complexity: Theta(n^2).
 * @param {Array} array
 * @returns {Array}
 */
exports.bubbleSort = array => {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (array[j - 1] > array[j]) {
                let temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            }
        }
    }
};

/**
 * Merges two sorted arrays separated by set indices.
 * @param {Array} array
 * @param {Number} start
 * @param {Number} middle
 * @param {Number} end
 */
function merge(array, start, middle, end) {
    let leftPtr = start;
    let rightPtr = middle + 1;
    const length = end - start + 1;
    const temporaryArray = [];
    for (let i = 0; i < length; i++) {
        if (rightPtr > end ||
                    (leftPtr <= middle && array[leftPtr] < array[rightPtr])) {
            temporaryArray[i] = array[leftPtr];
            leftPtr++;
        } else {
            temporaryArray[i] = array[rightPtr];
            rightPtr++;
        }
    }
    for (let i = 0; i < length; i++) {
        array[i + start] = temporaryArray[i];
    }
}

/**
 * Sorts array by merge sort.
 * Computational complexity: Theta(n*log(n)).
 * @param {Array} array
 * @param {Number} start
 * @param {Number} end
 * @returns {Array}
 */
exports.mergeSort = function mergeSort(array, start, end) {
    if (typeof start === 'undefined') {
        start = 0;
    }
    if (typeof end === 'undefined') {
        end = array.length - 1;
    }
    if (start >= end) {

        return;
    }
    let middle = Math.floor((start + end) / 2);
    mergeSort(array, start, middle);
    mergeSort(array, middle + 1, end);
    merge(array, start, middle, end);
};

/**
 * Sorts array by hoare sort. Also named 'Quick sort'.
 * Computational complexity: Theta(n^2). Actually often works beter than merge sort.
 * @param {Array} array
 * @param {Number} start
 * @param {Number} end
 * @returns {Array}
 */
exports.hoareSort = function hoareSort(array, start, end) {
    if (typeof start === 'undefined') {
        start = 0;
    }
    if (typeof end === 'undefined') {
        end = array.length - 1;
    }
    if (end <= start) {

        return;
    }
    let pivot = array[end];
    let storeIdx = start;
    for (let i = start; i < end; i++) {
        if (array[i] <= pivot) {
            let temp = array[i];
            array[i] = array[storeIdx];
            array[storeIdx] = temp;
            storeIdx++;
        }
    }
    let temp = array[storeIdx];
    array[storeIdx] = array[end];
    array[end] = temp;
    if (storeIdx > start) {
        hoareSort(array, start, storeIdx - 1);
    }
    if (storeIdx < end) {
        hoareSort(array, storeIdx + 1, end);
    }
};
