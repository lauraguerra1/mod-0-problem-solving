/*Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. For example, if the destination is "New York City", print something like "The next place I want to visit is New York City*/

/*
Restate Goal:Using an array of strings, print the strings into a sentence in alphabetical order.
Breakdown: 
- Declare a variable assigned to an array of strings. 
- Call a method (.sort()) on the method to sort the elements in the array by aplhabetical order. 
- Print the strings to the console using console.log and string interpolation. 
    - When interpolating each element, access it via the index position.
*/
var travel = ["New York City", "Brazil", "Japan"];
travel.sort();
console.log(`First, I'll visit my family in ${travel[0]}, then I'll try the sushi in ${travel[1]}, and when I get back to the U.S., I'll watch a Broadway play in ${travel[2]}!`);

//--> First, I'll visit my family in Brazil, then I'll try the sushi in Japan, and when I get back to the U.S., I'll watch a Broadway play in New York City!