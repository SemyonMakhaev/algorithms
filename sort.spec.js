'use strict';

const assert = require('assert');
const sort = require('./lib/sort');

/**
 * Checks a sort function.
 * @param {Func} sortFunction
 */
function checkSort(sortFunction) {
    it('should sort array', () => {
        const array = [1, 4, 3, 6, 2];
        sortFunction(array);

        assert.deepStrictEqual(array, [1, 2, 3, 4, 6]);
    });

    it('shouldn\'t change empty array', () => {
        const array = [];
        sortFunction(array);

        assert.deepStrictEqual(array, []);
    });

    it('shouldn\'t change one-element array', () => {
        const array = [0];
        sortFunction(array);

        assert.deepStrictEqual(array, [0]);
    });

    it('shouldn\'t change sorted array', () => {
        const array = [1, 2, 3];
        sortFunction(array);

        assert.deepStrictEqual(array, [1, 2, 3]);
    });
}

describe('sort.bubbleSort()', () => checkSort(sort.bubbleSort));

describe('sort.mergeSort()', () => checkSort(sort.mergeSort));

describe('sort.hoareSort()', () => checkSort(sort.hoareSort));
