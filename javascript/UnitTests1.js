/*global console, require, suite, test*/
/*jslint plusplus: true, white: true*/

// -------------
// UnitTests1.js
// -------------

var assert = require('assert');

function cycle_length (n) {
    "use strict";
    assert(n > 0);
    var c = 0;
    while (n > 1) {
        if ((n % 2) === 0) {
            n = n / 2;}
        else {
            n = (3 * n) + 1;}
        ++c;}
    assert(c > 0);
    return c;}

suite('cycle_length',
    function () {
        "use strict";

        test('test_1',
            function () {
                assert.equal(cycle_length( 1), 1);});

        test('test_2',
            function () {
                assert.equal(cycle_length( 5), 6);});

        test('test_3',
            function () {
                assert.equal(cycle_length(10), 7);});});

/*
% mocha -u tdd UnitTests1.js


  cycle_length
    1) test_1
    2) test_2
    3) test_3

  0 passing (11ms)
  3 failing

  1) cycle_length test_1:

      AssertionError: false == true
      + expected - actual

      +true
      -false

      at cycle_length (UnitTests1.js:20:5)
      at Context.<anonymous> (UnitTests1.js:27:30)

  2) cycle_length test_2:

      AssertionError: 5 == 6
      + expected - actual

      +6
      -5

      at Context.<anonymous> (UnitTests1.js:30:24)

  3) cycle_length test_3:

      AssertionError: 6 == 7
      + expected - actual

      +7
      -6

      at Context.<anonymous> (UnitTests1.js:33:24)
*/
