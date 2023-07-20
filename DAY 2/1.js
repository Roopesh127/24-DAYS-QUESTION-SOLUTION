function reverseStringWithWords(str) {
    // Step 1: Split the string into an array of words
    const wordsArray = str.split(' ');
  
    // Step 2: Reverse each word in the array
    const reversedWordsArray = wordsArray.map(word => {
      return word.split('').reverse().join('');
    });
  
    // Step 3: Join the reversed words back into a single string
    const reversedString = reversedWordsArray.join(' ');
  
    // Step 4: Reverse the entire string
    const finalReversedString = reversedString.split('').reverse().join('');
  
    return finalReversedString;
  }
  
  // Test the function
  const inputString = "Hello World, I am JavaScript";
  const reversedString = reverseStringWithWords(inputString);
  