'use strict';

const assert = require('assert');
const search = require('./lib/search');

/**
 * Checks first entry search.
 * @param {Func} searchFunction
 */
function checkFirstEntry(searchFunction) {
    it('finds item', () => {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 1), 1);
        assert.strictEqual(searchFunction([0, 1, 2, 3], 2), 2);
    });

    it('finds start item', () =>
        assert.strictEqual(searchFunction([0, 1, 2, 3], 0), 0)
    );

    it('finds end item', () =>
        assert.strictEqual(searchFunction([0, 1, 2, 3], 3), 3)
    );

    it('finds index of first entry', () =>
        assert.strictEqual(searchFunction([0, 1, 1, 2, 3], 1), 1)
    );

    it('returns -1 if entry was not finded', () =>
        assert.strictEqual(searchFunction([0, 1, 2, 3], 4), -1)
    );

    it('finds nothing in empty array', () =>
        assert.strictEqual(searchFunction([], 0), -1)
    );
}

describe('search.linearSearch()', () =>
    checkFirstEntry(search.linearSearch)
);

describe('search.binarySearchFirstEntry()', () =>
    checkFirstEntry(search.binarySearchFirstEntry)
);

describe('Binary search: first entry (recoursive)', () =>
    checkFirstEntry(search.binarySearchFirstEntryRecoursive)
);

/**
 * Checks left border search.
 * @param {Func} searchFunction
 */
function checkLeftBorder(searchFunction) {
    it('finds left border', () => {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 1), 0);
        assert.strictEqual(searchFunction([0, 1, 2, 3], 2), 1);
    });

    it('finds index of last item less than entry', () =>
        assert.strictEqual(searchFunction([0, 1, 2, 3], 3), 2)
    );

    it('returns -1 for start item', () =>
        assert.strictEqual(searchFunction([0, 1, 2, 3], 0), -1)
    );

    it('finds left border for end item', () =>
        assert.strictEqual(searchFunction([0, 1, 2, 3], 3), 2)
    );

    it('returns -1 if entry was not finded', () =>
        assert.strictEqual(searchFunction([0, 1, 2, 3], 4), -1)
    );

    it('finds nothing in empty array', () =>
        assert.strictEqual(searchFunction([], 0), -1)
    );
}

describe('search.binarySearchLeftBorder()', () =>
    checkLeftBorder(search.binarySearchLeftBorder)
);

describe('search.binarySearchLeftBorderRecoursive', () =>
    checkLeftBorder(search.binarySearchLeftBorderRecoursive)
);

/**
 * Checks last entry search.
 * @param {Func} searchFunction
 */
function checkLastEntry(searchFunction) {    
    it('finds item', () => {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 1), 1);
        assert.strictEqual(searchFunction([0, 1, 2, 3], 2), 2);
    });

    it('finds start item', () =>
        assert.strictEqual(searchFunction([0, 1, 2, 3], 0), 0)
    );

    it('finds last item', () =>
        assert.strictEqual(searchFunction([0, 1, 2, 3], 3), 3)
    );

    it('finds index of last entry', () =>
        assert.strictEqual(searchFunction([0, 1, 2, 2, 2, 3], 2), 4)
    );

    it('returns -1 if entry was not finded', () =>
        assert.strictEqual(searchFunction([0, 1, 2, 3], 4), -1)
    );

    it('finds nothing in empty array', () =>
        assert.strictEqual(searchFunction([], 0), -1)
    );
}

describe('search.binarySearchLastEntry()', () =>
    checkLastEntry(search.binarySearchLastEntry)
);

describe('search.binarySearchLastEntryRecoursive()', () =>
    checkLastEntry(search.binarySearchLastEntryRecoursive)
);

/**
 * Checks right border search.
 * @param {Func} searchFunction
 */
function checkRightBorder(searchFunction) {
    it('finds right border', () => {
        assert.strictEqual(searchFunction([0, 1, 2, 3], 1), 2);
        assert.strictEqual(searchFunction([0, 1, 2, 3], 2), 3);
    });

    it('finds index of first item grater than entry', () =>
        assert.strictEqual(searchFunction([0, 1, 1, 1, 2], 1), 4)
    );

    it('finds right border for start item', () =>
        assert.strictEqual(searchFunction([0, 1, 2, 3], 0), 1)
    );

    it('returns -1 for end item', () =>
        assert.strictEqual(searchFunction([0, 1, 2, 3], 3), -1)
    );

    it('returns -1 if entry was not finded', () =>
        assert.strictEqual(searchFunction([0, 1, 2, 3], 4), -1)
    );

    it('finds nothing in empty array', () =>
        assert.strictEqual(searchFunction([], 0), -1)
    );
}

describe('search.binarySearchRightBorder()', () =>
    checkRightBorder(search.binarySearchRightBorder)
);

describe('Binary search: right border (recoursive)', function() {
    checkRightBorder(search.binarySearchRightBorderRecoursive);
});
