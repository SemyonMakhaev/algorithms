'use strict';

const assert = require('assert');
const isCorrect = require('./lib/brackets');

describe('isCorrect()', () => {
    it('returns true if brackets sequence is correct', () => {
        assert(isCorrect('(())[]'));
    });

    it('returns false for incorrect brackets sequence', () => {
        assert(!isCorrect('())('));
    });

    it('returns true for empty string', () => {
        assert(isCorrect(''));
    });
});
