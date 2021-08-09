function range(start, end, step = 1) {
  let array = [];

  if (start < end && Math.sign(step) === 1) {
    for (let i = start; i <= end; i = i + step) {
      array.push(i);
    }
  } else if (start > end && Math.sign(step) === -1) {
    for (let i = start; i >= end; i = i + step) {
      array.push(i);
    }
  } else if (end === start) {
    array.push(start);
  } else {
    return "Invalid Arguments!";
  }

  return array;
}

