'use strict';

var assert = require('assert');
var isCorrect = require('./production/brackets');

describe('Correct brackets sequence determining', function () {
    it('returns true if brackets sequence is correct', function () {
        assert(isCorrect('(())[]'));
    });

    it('returns false for incorrect brackets sequence', function () {
        assert(!isCorrect('())('));
    });

    it('returns true for empty string', function () {
        assert(isCorrect(''));
    });
});
