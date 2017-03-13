'use strict';

var assert = require('assert');
var sort = require('./production/sort');

/**
 * Checks a sort function.
 * @param {Func} sortFunction
 */
function checkSort(sortFunction) {
    it('should sort array', function() {
        var array = [1, 4, 3, 6, 2];
        sortFunction(array);
        assert.deepStrictEqual(array, [1, 2, 3, 4, 6]);
    });

    it('shouldn\'t change empty array', function() {
        var array = [];
        sortFunction(array);
        assert.deepStrictEqual(array, []);
    });

    it('shouldn\'t change one-element array', function() {
        var array = [0];
        sortFunction(array);
        assert.deepStrictEqual(array, [0]);
    });

    it('shouldn\'t change sorted array', function() {
        var array = [1, 2, 3];
        sortFunction(array);
        assert.deepStrictEqual(array, [1, 2, 3]);
    });
}

describe('Bubble sort', function() {
    checkSort(sort.bubbleSort);
});

describe('Merge sort', function() {
    checkSort(sort.mergeSort);
});

describe('Hoare sort (quick sort)', function() {
    checkSort(sort.hoareSort);
});
