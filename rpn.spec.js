'use strict';

const assert = require('assert');
const compute = require('./lib/rpn');

describe('compute()', () => {
    it('computes postfix expression', () => {
        assert.strictEqual(compute('32-4*'), 4);
    });

    it('returns 0 for empty string', () => {
        assert.strictEqual(compute(''), 0);
    });

    it('throws SyntaxError for incorrect input', () => {
        const cb = () => compute('2++');
        assert.throws(cb, SyntaxError);
    });
});
