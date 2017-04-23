'use strict';

const assert = require('assert');
const substringAlgorithms = require('./lib/substring');

describe('substringAlgorithms.countEntries()', () => {
    it('finds substring entries count', () => {
        assert.strictEqual(substringAlgorithms.countEntries('abracadabra', 'abra'), 2);
    });

    it('returns 0 if there was no entry', () => {
        assert.strictEqual(substringAlgorithms.countEntries('umbrella', 'alice'), 0);
    });

    it('returns 0 in case of empty text', () => {
        assert.strictEqual(substringAlgorithms.countEntries('', ''), 0);
    });

    it('throws exception if text is shorter than sample', () => {
        const cb = () => substringAlgorithms.countEntries('1', '123');

        assert.throws(cb, /Text length is less than sample length/);
    });
});
