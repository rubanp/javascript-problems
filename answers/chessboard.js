let stringOne = '';
let stringTwo = '';

const SIZE = 8;

for (let i = 0; i < SIZE; i += 1) {
  if (i % 2 === 0) {
    stringOne += '#';
  }
  if (i % 2 === 1) {
    stringOne += ' ';
  }
}

for (let i = 0; i < SIZE; i += 1) {
  if (i % 2 === 0) {
    stringTwo += ' ';
  }
  if (i % 2 === 1) {
    stringTwo += '#';
  }
}

for (let i = 0; i < SIZE; i += 1) {
  if (i % 2 === 0) {
    console.log(stringOne);
  }
  if (i % 2 === 1) {
    console.log(stringTwo);
  }
}
