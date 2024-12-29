function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null and undefined values
  }
  return a + b; 
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 5)); // Output: 0
console.log(foo(undefined, 3)); // Output: 0