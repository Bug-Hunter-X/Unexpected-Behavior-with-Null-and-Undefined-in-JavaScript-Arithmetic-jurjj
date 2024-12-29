# Unexpected Behavior with Null and Undefined in JavaScript Arithmetic

This example demonstrates a common pitfall in JavaScript when performing arithmetic operations with `null` and `undefined` values.

## Bug
The original `foo` function uses loose comparison (`==`) to check for `null` values.  This can lead to unexpected behavior when `undefined` is passed, as `undefined == null` evaluates to true but `undefined + number` results in `NaN`.

## Solution
The solution uses strict equality (`===`) to check for `null` and `undefined` separately.  This provides more precise control and prevents the unexpected behavior.

## How to Reproduce
1. Run `bug.js`.
2. Observe the output in the console.