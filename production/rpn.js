'use strict';

module.exports = compute;

/**
 * Counts defined array items.
 * @param {Array} array
 * @returns {Number}
 */
function getLength(array) {
    return array.filter(function (item) {
        return typeof item !== 'undefined';
    }).length;
}

/**
 * Computes postfix expression.
 * Computational complexity: Theta(n).
 * @param {String} expression
 * @returns {Number}
 */
function compute(expression) {
    if (expression.length === 0) {

        return 0;
    }
    var operations = {};
    operations['+'] = function (y, x) {
        return x + y;
    };
    operations['-'] = function (y, x) {
        return x - y;
    };
    operations['*'] = function (y, x) {
        return x * y;
    };
    operations['/'] = function (y, x) {
        return x / y;
    };
    var stack = [];
    var nine = '9'.charCodeAt(0);
    var zero = '0'.charCodeAt(0);
    expression.split('').forEach(function (item) {
        var code = item.charCodeAt(0);
        if (code <= nine && code >= zero) {
            stack.push(item);
        } else if (item in operations) {
            if (getLength(stack) < 2) {
                throw new SyntaxError();
            }
            var y = parseInt(stack.pop());
            var x = parseInt(stack.pop());
            stack.push(operations[item](y, x).toString());
        } else {
            throw new SyntaxError();
        }
    });

    return parseInt(stack.pop());
};
