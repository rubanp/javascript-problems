const INDEX = 20;

function fibonacciNumber(n) {
  let sequence = [0, 1];

  for (let i = 1; i < n - 1; i++) {
    sequence.push(sequence[i] + sequence[i - 1]);
  }

  return sequence[n - 1];
}
