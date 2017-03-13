'use strict';

var assert = require('assert');
var compute = require('./production/rpn');

describe('Rotate polish notation', function () {
    it('computes postfix expression', function () {
        assert.strictEqual(compute('32-4*'), 4);
    });

    it('returns 0 for empty string', function () {
        assert.strictEqual(compute(''), 0);
    });

    it('throws SyntaxError for incorrect input', function () {
        assert.throws(function () {
            compute('2++');
        }, SyntaxError);
    });
});
