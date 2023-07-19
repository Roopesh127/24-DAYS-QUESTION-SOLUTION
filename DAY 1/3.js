// Remove Duplicate characters from array of element using filter

// ALGO
// 1. first we are taking one function thats  name is removeduplicate , and pass parameter is arr.
// 2. then we are making one empty array for storing unique element.
// 3. then we are applying filter function inside parameter and filter function has taking two argument element and index .
// 4. by helping of indexOf method its return only which element === index.
// 5. and return function. 

function removeduplicate(arr){
  let unique = arr.filter(function(element,index){
    return arr.indexOf(element) === index;
  });
  return unique;
}
const array1 = [1,2,3,4,3,5,7,5,6,8,]
console.log(removeduplicate(array1));