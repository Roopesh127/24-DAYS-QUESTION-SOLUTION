// Remove Duplicate characters from String

function removeDuplicates(str) {
    let uniqueChars = '';
    for (let char of str) {
      if (uniqueChars.indexOf(char) === -1) {
        uniqueChars += char;
      }
    }
    return uniqueChars;
  }

  const inputString = "programming";
const result = removeDuplicates(inputString);
console.log(result); // Output: "progamin"


// taking one function.





function removeDuplicates(str) {
  let uniqueChars = '';
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (uniqueChars.indexOf(char) === -1) {
      uniqueChars += char;
    }
  }

  return uniqueChars;
}

// Example usage:
const inputString = "programming";
const result = removeDuplicates(inputString);
console.log(result); // Output: "progamin"

