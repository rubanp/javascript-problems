let numbers = ["one", "two", "three", "four"];

function reverseArray(array) {
  let newArray = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    newArray.push(numbers[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  for (let i = 1; i < array.length; i++) {
    let popped = array.splice(i, 1)[0];
    array.unshift(popped);
  }
}
