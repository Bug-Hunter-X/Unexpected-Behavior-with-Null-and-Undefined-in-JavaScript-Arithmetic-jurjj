function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; 
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 5)); // Output: 0
console.log(foo(undefined, 3)); //Output: NaN