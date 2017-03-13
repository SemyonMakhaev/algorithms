'use strict';

var assert = require('assert');
var derivative = require('./production/derivative');
var PRECISION = 1e-6;

describe('Derivative evaluation', function () {
    it('returns function for function', function () {
        assert.strictEqual(typeof derivative(function (x) {
            return x + 1;
        }), 'function');
    });

    it('calculates a derivative of square function', function () {
        var square = function (x) {
            return x * x;
        };
        assert(Math.abs(derivative(square)(0)) < PRECISION);
        assert(Math.abs(derivative(square)(1) - 2) < PRECISION);
        assert(Math.abs(derivative(square)(2) - 4) < PRECISION);
    });

    it('calculates a derivative of power of three', function () {
        var threePow = function (x) {
            return x * x * x;
        };
        assert(Math.abs(derivative(threePow)(0)) < PRECISION);
        assert(Math.abs(derivative(threePow)(1) - 3) < PRECISION);
        assert(Math.abs(derivative(threePow)(2) - 12) < PRECISION);
    });
});
