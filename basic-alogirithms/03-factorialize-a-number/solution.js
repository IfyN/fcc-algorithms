/* Thought Process 

A factorial requires looping or recursion.

Using loops 

- Iterate through numbers  1 to n

-  Accumulator 'result' initializes at 1 (not 0) because 1 is the multiplicative identity - starting at 0 would zero out the product

-  Loop counter 'i' starts at 1 (not 0) because factorial is defined as n×(n-1)×...×2×1, not including 0

*/

function factorialize(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

factorialize(5);
