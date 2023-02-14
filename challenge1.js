//1. Given an array of strings, return only the strings that have exactly 4 characters.
/* 
Restate goal: Using an array of strings, return the strings that contain only 4 characters.
Breakdown: 
- Declare a variable assigned to an array of strings. 
- Iterate over the array using a for loop. 
    - Within the for loop, write an if statement that checks if the string contains 4 characters:
        - If true, print the string. 
        - If false, do nothing. 
*/

var words = ["Turing","school","code","software","Ruby","JavaScript"];

for (var i = 0; i < words.length; i++) {
    if (words[i].length === 4) {
        console.log(words[i]);
    }
}

//--> code
//--> Ruby