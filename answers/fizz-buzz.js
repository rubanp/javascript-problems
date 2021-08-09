for (let i = 1; i < 101; i++) {
  let output = '';

  if (i % 3 === 0) {
    output += 'Fizz';
  }

  if (i % 5 === 0) {
    output += 'Buzz';
  }

  if (i % 7 === 0) {
    output += 'Snap';
  }

  if (i % 11 === 0) {
    output += 'Crackle';
  }

  console.log(output || i);
}
