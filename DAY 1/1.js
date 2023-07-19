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
