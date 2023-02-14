// 1. Given an array of strings, return only the words that begin with the letter "t".
/*
Restate goal: Using an array of strings, return the strings that begin with the letter "t".
Breakdown: 
- Declare a variable assigned to an array of strings. 
- Iterate over the array using a for loop. 
    - Within the for loop, write an if statement that checks if the string starts with 
      "t" or "T":
            (Use the logistical operator || and call a method (.startsWith()) on each element 
            in the array.)
        - If true, print the string. 
        - If false, do nothing. 
*/

var words = ["salsa", "taco", "Tuesday", "guacamole"]; 
for (var i = 0; i < words.length; i++) {
    if (words[i].startsWith("T") || words[i].startsWith("t")) {
        console.log(words[i]);
    } 
}

//--> taco 
//--> Tuesday 