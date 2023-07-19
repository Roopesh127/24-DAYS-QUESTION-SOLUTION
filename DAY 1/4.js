// String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split and then join.

// ALGORITHMN

// 1.taking one function.

function reverse(str){
   let newstr = str.split("").reverse().join(" ");
   return newstr;
}
console.log(reverse(" hello world i am Rgit oopesh"))