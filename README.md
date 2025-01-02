# Type 'string[]' is not assignable to type 'string'

This TypeScript code demonstrates a common type error: assigning an array of strings to a variable expecting a single string.

The `greeter` function expects a single string as input. However, the `user` variable is an array of strings.  Attempting to pass `user` to `greeter` results in a type error because TypeScript's type system correctly identifies the type mismatch.

The solution demonstrates how to correctly handle this scenario, either by iterating over the array or by modifying the function signature.