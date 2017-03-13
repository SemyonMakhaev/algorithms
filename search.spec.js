'use strict';

var assert = require('assert');
var search = require('./production/search');

/**
 * Checks first entry search.
 * @param {Func} searchFunction
 */
function checkFirstEntry(searchFunction) {
    it('finds item', function() {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 1), 1);
        assert.strictEqual(searchFunction([0, 1, 2, 3], 2), 2);
    });

    it('finds start item', function() {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 0), 0);
    });

    it('finds end item', function() {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 3), 3);
    });

    it('finds index of first entry', function() {
        assert.strictEqual(searchFunction([0, 1, 1, 2, 3], 1), 1);
    });

    it('returns -1 if entry was not finded', function() {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 4), -1);
    });

    it('finds nothing in empty array', function() {
        assert.strictEqual(searchFunction([], 0), -1);
    });
}

describe('Linear search', function() {
    checkFirstEntry(search.linearSearch);
});

describe('Binary search: first entry', function() {
    checkFirstEntry(search.binarySearchFirstEntry);
});

describe('Binary search: first entry (recoursive)', function() {
    checkFirstEntry(search.binarySearchFirstEntryRecoursive);
});

/**
 * Checks left border search.
 * @param {Func} searchFunction
 */
function checkLeftBorder(searchFunction) {
    it('finds left border', function() {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 1), 0);
        assert.strictEqual(searchFunction([0, 1, 2, 3], 2), 1);
    });

    it('finds index of last item less than entry', function() {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 3), 2);
    });

    it('returns -1 for start item', function() {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 0), -1);
    });

    it('finds left border for end item', function() {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 3), 2);
    });

    it('returns -1 if entry was not finded', function() {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 4), -1);
    });

    it('finds nothing in empty array', function() {
        assert.strictEqual(searchFunction([], 0), -1);
    });
}

describe('Binary search: left border', function() {
    checkLeftBorder(search.binarySearchLeftBorder);
});

describe('Binary search: left border (recoursive)', function() {
    checkLeftBorder(search.binarySearchLeftBorderRecoursive);
});

/**
 * Checks last entry search.
 * @param {Func} searchFunction
 */
function checkLastEntry(searchFunction) {    
    it('finds item', function() {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 1), 1);
        assert.strictEqual(searchFunction([0, 1, 2, 3], 2), 2);
    });

    it('finds start item', function() {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 0), 0);
    });

    it('finds last item', function() {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 3), 3);
    });

    it('finds index of last entry', function() {
        assert.strictEqual(searchFunction([0, 1, 2, 2, 2, 3], 2), 4);
    });

    it('returns -1 if entry was not finded', function() {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 4), -1);
    });

    it('finds nothing in empty array', function() {
        assert.strictEqual(searchFunction([], 0), -1);
    });
}

describe('Binary search: last entry', function() {
    checkLastEntry(search.binarySearchLastEntry);
});

describe('Binary search: last entry (recoursive)', function() {
    checkLastEntry(search.binarySearchLastEntryRecoursive);
});

/**
 * Checks right border search.
 * @param {Func} searchFunction
 */
function checkRightBorder(searchFunction) {
    it('finds right border', function() {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 1), 2);
        assert.strictEqual(searchFunction([0, 1, 2, 3], 2), 3);
    });

    it('finds index of first item grater than entry', function() {
        assert.strictEqual(searchFunction([0, 1, 1, 1, 2], 1), 4);
    });

    it('finds right border for start item', function() {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 0), 1);
    });

    it('returns -1 for end item', function() {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 3), -1);
    });

    it('returns -1 if entry was not finded', function() {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 4), -1);
    });

    it('finds nothing in empty array', function() {
        assert.strictEqual(searchFunction([], 0), -1);
    });
}

describe('Binary search: right border', function() {
    checkRightBorder(search.binarySearchRightBorder);
});

describe('Binary search: right border (recoursive)', function() {
    checkRightBorder(search.binarySearchRightBorderRecoursive);
});
