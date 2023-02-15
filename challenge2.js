// 1. Start with an array of strings with a mix of uppercase and lowercase letters. 
//    Print every word in all lowercase letters.
/* 
Restate goal: Using an array of strings with both lower and uppercase letters, print the
              elements of the array in lower case letters. 
Breakdown: 
- Declare a variable assigned to an array of strings. 
- Decalre a new variable that uses the .map method to convert all elements in the array to 
    lower case by calling the .toLowerCase method on the original variable. 
- Print the array to the console using the new variable.
*/

var favoriteFoods = ["Ramen","Tacos","Chicken Parmesan","Sushi"];
var newFood = favoriteFoods.map(favoriteFood => favoriteFood.toLowerCase());
console.log(newFood);

//--> [ 'ramen', 'tacos', 'chicken parmesan', 'sushi' ]