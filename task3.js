// Task-3:

// Write a function to count the number of vowels in a string.

function countVowels(strs) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (const str of strs) {
    if (vowels.includes(str)) {
      count++;
    }
  }
  return count;
}

const word = "My Name is Ashraful Islam";
const result = countVowels(word);
console.log(result);
