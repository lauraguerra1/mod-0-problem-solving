// 1. Start with an array of strings. 
// Print only the words that include the letter combination "ing".
/*
/* 
Restate goal: Using an array of strings, return the strings that contain only 4 characters.
Breakdown: 
- Declare a variable assigned to an array of strings. 
- Iterate over the array using a for loop. 
    - Within the for loop, write an if statement:
        - Call the .includes() method to check if the string includes "ing")
        - If true, print the string. 
        - If false, do nothing. 
*/
var words = ["Turing", "school", "coding", "study"];

for (var i = 0; i < words.length; i++) {
    if (words[i].includes("ing")) {
        console.log(words[i]);
    }
}

//--> Turing 
//--> coding