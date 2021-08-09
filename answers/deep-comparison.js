function isEqual(a, b) {
  if (a === b) {
    return true;
  } else if (
    a &&
    b &&
    typeof a === "object" &&
    typeof b === "object" &&
    Object.keys(a).length === Object.keys(b).length
  ) {
    if (Array.isArray(a) === Array.isArray(b)) {
      for (let key in a) {
        if (key in b) {
          if (!isEqual(a[key], b[key])) {
            return false;
          }
        } else {
          return false;
        }
      }
      return true;
    }
  }
  return false;
}

// =============================================================================
// Tests

let person1 = { hair: "brown", age: 23, children: ["tom", "bobby", "alice"] };
let person2 = { hair: "brown", age: 23, children: ["tom", "bobby", "alice"] };
let person3 = { hair: "brown", age: 26, children: null };
let person4 = { hair: "brown", age: 23, children: ["bobby", "tom", "alice"] };

let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
let array3 = [3, 1, 2];
let array4 = [1, 2, [3, 4]];
let array5 = [1, 2, [4, 3]];
let array6 = [
  { name: "bob", age: 35 },
  { name: "jane", age: 32 },
];
let array7 = [
  { name: "bob", age: 35 },
  { name: "jane", age: 32 },
];
let array8 = [
  { name: "jane", age: 32 },
  { name: "bob", age: 35 },
];

let nested1 = { a: { b: { c: { d: null } } } };
let nested2 = { a: { b: { c: { d: null } } } };
let nested3 = { a: { b: { c: { d: "hello" } } } };

let s = "how are you?";
let a = { s: s };
let b = { s: "how are you?" };

let order1 = { a: "apple", b: "banana" };
let order2 = { b: "banana", a: "apple" };

// =============================================================================

console.log(`1 - ${isEqual(person1, person2)}`); // 1 - true
console.log(`2 - ${isEqual(person2, person3)}`); // 2 - false
console.log(`3 - ${isEqual(person2, person4)}`); // 3 - true
console.log(`4 - ${isEqual(array1, array2)}`); // 4 - true
console.log(`5 - ${isEqual(array2, array3)}`); // 5 - true X
console.log(`6 - ${isEqual(array4, array5)}`); // 6 - true X
console.log(`7 - ${isEqual(array6, array7)}`); // 7 - true
console.log(`8 - ${isEqual(array7, array8)}`); // 8 - true X
console.log(`9 - ${isEqual(nested1, nested2)}`); // 9 - true
console.log(`10 - ${isEqual(nested2, nested3)}`); // 10 - false
console.log(`11 - ${isEqual(a, b)}`); // 11 - true
console.log(`12 - ${isEqual(order1, order2)}`); // 12 - true
