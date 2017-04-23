'use strict';

const assert = require('assert');
const derivative = require('./lib/derivative');
const PRECISION = 1e-6;

describe('derivative()', () => {
    it('returns function for function', () => {
        assert.strictEqual(typeof derivative(x => x + 1), 'function');
    });

    it('calculates a derivative of square function', () => {
        const square = x => x * x;

        assert(Math.abs(derivative(square)(0)) < PRECISION);
        assert(Math.abs(derivative(square)(1) - 2) < PRECISION);
        assert(Math.abs(derivative(square)(2) - 4) < PRECISION);
    });

    it('calculates a derivative of power of three', () => {
        const threePow = x => x * x * x;

        assert(Math.abs(derivative(threePow)(0)) < PRECISION);
        assert(Math.abs(derivative(threePow)(1) - 3) < PRECISION);
        assert(Math.abs(derivative(threePow)(2) - 12) < PRECISION);
    });
});
