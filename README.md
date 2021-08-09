# Javascript Coding Problems

This is a collection of javascript coding problems from various sources.

## Contents

| Name              | Difficulty | Source              |
| ----------------- | ---------- | ------------------- |
| Looping-Triangle  | \*         | Eloquent-Javascript |
| Fizz-Buzz         | \*         | Eloquent-Javascript |
| Chessboard        | \*         | Eloquent-Javascript |
| Character-Counter | \*         | Eloquent-Javascript |
| Fibonacci         | \*\*       | Eloquent-Javascript |
| Is-Factor         | \*\*       | Eloquent-Javascript |
| Power             | \*\*       | Eloquent-Javascript |
| Range             | \*\*       | Eloquent-Javascript |
| Reverse-Array     | \*\*       | Eloquent-Javascript |
| Scripts           | \*\*       | Eloquent-Javascript |
| Vector-Type       | \*\*       | Eloquent-Javascript |
| Deep-Comparison   | \*\*\*\*   | Eloquent-Javascript |

---

### Looping-Triangle

For a specified number `n`, print a triangle using `#`, starting from one being
printed, with the last line being printed being the length of n.
For example for `n = 3`, it would look like this:

```
#
##
###
```

[Answer](answers/looping-triangle.js)

---

### Fizz-Buzz

**Part 1**:
Print the characters 1 to 100
Whenever there is a multiple of 3, print 'Fizz'
Whenever there is a multiple of 5, print 'Buzz'
Print 'FizzBuzz' when it's a multiple of 3 and 5

**Part 2:**
Modify your program to also print
'Snap' when there is multiple of 7, and
'Crackle' when there is a multiple of 11

[Answer](answers/fizz-buzz.js)

---

### Chessboard

Create a grid of size `n` x `n`
At each position of the grid there should either be a space or a `#`,
alternating between each line forming a chessboard pattern.
For example for `n = 6`, it would look like this:

```
# # #
 # # #
# # #
 # # #
# # #
 # # #
```

[Answer](answers/chessboard.js)

---

### Character Counter

Write a function called `countChar`, that takes two arguments:

- A string
- The character to count in the string

It should return a number indicating the number of instances of that character
in the string

[Answer](answers/char-counter.js)

### Fibonacci

Write a function that given an index `n` returns the number at that point in
the fibonacci sequence

[Answer](answers/fibonacci-sequence.js)

---

### Is-Factor

Write a recursive function `isFactor` that takes three arguments:

- The factor to find
- The first number
- The second number

It then returns a boolean depending on whether the factor to find is actually a
factor of the first and second number

[Answer](answers/isFactor.js)

---

### Power

Write two functions, that both take a base and an exponent and return the
answer. Write one function using a for loop, the other using recursion

[Answer](answers/power.js)

---

### Range

Write a function `range` that takes a start number, an end number, and the
step. It should return an array of numbers starting with the start number and
increasing in steps to a maximum of the end number

[Answer](answers/range.js)

---

### Reverse-Array

Write two functions, reverseArray and reverseArrayInPlace. The first,
reverseArray, takes an array as argument and produces a new array that has the
same elements in the inverse order. The second, reverseArrayInPlace, does what
the reverse method does: it modifies the array given as argument by reversing
its elements. Neither may use the standard reverse method.

[Answer](answers/reverse-array.js)

---

### Scripts

Find the answers to the following questions based on the `scripts.js` file

1. Find the oldest and newest scripts that are alive and dead
2. Find the average year of alive and dead scripts
3. Find the three languages with the most and least number of characters
4. Given a paragraph of text, tally the characters from each language

[Answer](answers/script-exercises.js)

---

### Vector-Type

Write a class `Vec` that represents a vector in two-dimensional space. It takes
`x`and `y` parameters (numbers), which it should save to properties of the same
name.

Give the `Vec` prototype two methods, plus and minus, that take another vector
as a parameter and return a new vector that has the sum or difference of the two
vectors’ (this and the parameter) `x` and `y` values.

Add a getter property `length` to the prototype that computes the length of the
vector—that is, the distance of the point (`x`, `y`) from the origin (0, 0).

[Answer](answers/vector-type.js)

---

### Deep-Comparison

Write a function `deepEqual` that takes two values and returns true only if
they are the same value or are objects with the same properties, where the
values of the properties are equal when compared with a recursive call to
`deepEqual`.

[Answer](answers/deep-comparison.js)
