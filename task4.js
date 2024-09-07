// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function findTheLongestWord(str) {
  const words = str.split(" ");
  let theLongestWord = "";
  for (word of words) {
    if (word.length > theLongestWord.length) {
      theLongestWord = word;
    }
  }
  return theLongestWord;
}

const sentence = "I am learning Programming to become a programmer";
const longestWord = findTheLongestWord(sentence);
console.log("The Longest Word Is : ", longestWord);
