//Given a sentence with only lowercase letters, 
//print the same sentence with the first letter of every word capitalized. 
//For example, if you were given "Turing is the best", return "Turing Is The Best" instead!
/*
Restate Goal: Take a sentence with lowercase letters and change the first character of each 
              word to uppercase. 

Breakdown: 
1. Define a variable that contains a string
2. Access each word in the string by breaking the string into an array: 
        Call a method (.split(" ")) to break up the string at every instance of a space, 
        and store the value in a variable that holds an array. 
3. Decalre a new variable that uses the .map method to call other methods on all elements in 
  the array (using the new variable that stores the array). Within the parameters of .map:
        - Call a method (.charAT(0)) to access the character at index position 0 of each 
           element (first letter of each word). 
        - Capitalize the identified character by adjoining the .toUpperCase method. 
        - Add the remainder of each word by calling a function (.slice(1)) to add the 
           remainder of each element in the array beginning with the character at index 
           position 1 for that specific element (the second letter from each word). 
4. Join the elements of the array into the sentence with a space between each element by 
  calling a method (.join(" ")). Remember to declare a variable to store this value.      
5. Log the variable that stores the the new sentence to the console. 
*/

var sentence = "turing is the best";
var words = sentence.split(" ");
// console.log(words); --> [ 'turing', 'is', 'the', 'best' ]
var upperCase = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
// console.log(upperCase); --> [ 'Turing', 'Is', 'The', 'Best' ]
var newSentence = upperCase.join(" ");
console.log(newSentence); // --> Turing Is The Best