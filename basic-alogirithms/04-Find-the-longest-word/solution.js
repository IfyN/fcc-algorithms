/* Thought Process

 Approach
1. Split the string into an array of words using `split(' ')`
2. Loop through each word with a `for` loop
3. Track the longest word found so far in an accumulator variable
4. On each iteration, compare the current word's length to the longest — update if longer

 Why these choices
- **split()** – converts the sentence into an array so we can examine each word individually
- **for loop** – gives us access to each word one at a time for comparison
- **accumulator pattern** – stores the current "winner" as we iterate, updating when we find a longer word
*/

function findLongestWordLength(str) {
  const words = str.split(" ");
  let longestWord = 0;

  for (let word of words) {
    if (word.length > longestWord) {
      longestWord = word.length;
    }
  }
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
