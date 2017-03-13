'use strict';

var assert = require('assert');
var countEntries = require('./production/substring');

describe('Substring searching using hash function', function () {
    it('finds substring entries count', function () {
        assert.strictEqual(countEntries('abracadabra', 'abra'), 2);
    });

    it('returns 0 if there was no entry', function () {
        assert.strictEqual(countEntries('umbrella', 'alice'), 0);
    });

    it('returns 0 in case of empty text', function () {
        assert.strictEqual(countEntries('', ''), 0);
    });

    it('throws exception if text is shorter than sample', function () {
        assert.throws(function () {
            countEntries('1', '123');
        }, Error);
    });
});
