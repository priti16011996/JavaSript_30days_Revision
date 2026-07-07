/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  // Overflow case
  if (dividend === INT_MIN && divisor === -1) {
    return INT_MAX;
  }
  s;

  // Determine sign
  const negative = dividend < 0 !== divisor < 0;

  let dvd = Math.abs(dividend);
  let dvs = Math.abs(divisor);

  let quotient = 0;

  while (dvd >= dvs) {
    let temp = dvs;
    let multiple = 1;

    while (dvd >= temp << 1 && temp << 1 > 0) {
      temp <<= 1;
      multiple <<= 1;
    }

    dvd -= temp;
    quotient += multiple;
  }

  return negative ? -quotient : quotient;
};
