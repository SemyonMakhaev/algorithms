'use strict';

module.exports = derivative;

/**
 * Evaluates a derivative of function by approximate formula.
 * @param {Func} func
 * @returns {Func}
 */
function derivative(func) {
    const epsilon = 1e-10;

    return x => {
        return (func(x + epsilon) - func(x)) / epsilon;
    };
}
