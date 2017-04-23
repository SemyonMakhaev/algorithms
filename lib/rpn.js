'use strict';

module.exports = compute;

/**
 * Counts defined array items.
 * @param {Array} array
 * @returns {Number}
 */
function getLength(array) {
    return array.filter(item => typeof item !== 'undefined').length;
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
    const operations = {};
    operations['+'] = (y, x) => x + y;
    operations['-'] = (y, x) => x - y;
    operations['*'] = (y, x) => x * y;
    operations['/'] = (y, x) => x / y;
    const stack = [];
    const nine = '9'.charCodeAt(0);
    const zero = '0'.charCodeAt(0);
    expression.split('').forEach(item => {
        const code = item.charCodeAt(0);
        if (code <= nine && code >= zero) {
            stack.push(item);
        } else if (item in operations) {
            if (getLength(stack) < 2) {
                throw new SyntaxError();
            }
            const y = parseInt(stack.pop());
            const x = parseInt(stack.pop());
            stack.push(operations[item](y, x).toString());
        } else {
            throw new SyntaxError();
        }
    });

    return parseInt(stack.pop());
};
