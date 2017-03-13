'use strict';

module.exports = derivative;

/**
 * Evaluates a derivative of function by approximate formula.
 * @param {Func} func
 * @returns {Func}
 */
function derivative(func) {
    var epsilon = 1e-10;

    return function (x) {
        return (func(x + epsilon) - func(x)) / epsilon;
    };
}
