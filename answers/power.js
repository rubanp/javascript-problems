// For Loop
function powerTwo(base, exponent) {
  let total = 1;
  if (base === 1) {
    return 1;
  }
  for (let i = exponent; i > 0; i--) {
    total *= base;
  }
  return total;
}

// Recursion
function power(base, exponent) {
  if (base === 1) {
    return 1;
  }
  if (exponent === 1) {
    return base;
  }
  return base * power(base, exponent - 1);
}
