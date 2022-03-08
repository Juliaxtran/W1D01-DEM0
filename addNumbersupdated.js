// We are tasked to create a program that takes 
// in any numbers of command lines arguments
// which will be numbers, and add them together
// in and returns a sum of all the numbers
// 1,2,3,4,5
// 15


// how do I get command Line arguments?
// once command line arguments have come back 
// how do I add numbers together ?
// how do I add multiple numbers together(where is size of elements is different)


const addNumbers = function(arr) {
    let sum = 0;
    for( let element of arr) {
         sum += Number(element);
    }
    return sum;
}

const arguments = process.argv;
const numbers = arguments.slice(2);
const answer = addNumbers(numbers);
addNumbers([2,4,5,6,7]);
console.log("Input", numbers,"Output ===> ", answer);