'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  let result = 0;

  return function adder(a) {
    if (a === undefined) {
      result = sum;

      sum = 0;

      return result;
    } else {
      sum += a;

      result = sum;

      return (b) => {
        if (b === undefined) {
          sum = 0;

          return result;
        } else {
          sum += b;

          result = sum;

          return (c) => {
            if (c === undefined) {
              sum = 0;

              return result;
            } else {
              sum += c;

              result = sum;
            }
          };
        }
      };
    }
  };
}

module.exports = makeInfinityAdder;
