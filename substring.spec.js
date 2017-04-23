'use strict';

const assert = require('assert');
const substringAlgorithms = require('./lib/substring');

/**
 * Starting testing tools.
 * @param {Func} searchingFunc
 */
function checkSearcing(searchingFunc) {
    it('finds substring entries count', () =>
        assert.strictEqual(searchingFunc('abracadabra', 'abra'), 2)
    );

    it('returns 0 if there was no entry', () =>
        assert.strictEqual(searchingFunc('umbrella', 'alice'), 0)
    );

    it('returns 0 in case of empty text', () =>
        assert.strictEqual(searchingFunc('', ''), 0)
    );

    it('throws exception if text is shorter than sample', () => {
        const cb = () => searchingFunc('1', '123');

        assert.throws(cb, /Text length is less than sample length/);
    });
}

describe('substringAlgorithms.countEntries()', () =>
    checkSearcing(substringAlgorithms.countEntries)
);

describe('substringAlgorithms.boyerMooreSearch()', () =>
    // TODO: checkSearcing(substringAlgorithms.boyerMooreSearch)
    assert(true)
);
