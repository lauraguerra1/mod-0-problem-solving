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

/*
Refactor: 
- Declare a variable assigned to an array of strings
  (WE DO NOT NEED TO REDO THIS -- WE WILL REFERENCE LINE 13)
- Declare a fucntion. Within that function:
    - Decalre a variable that stores an empty string to concatenate with later on. 
    - Iterate over the array. Within the for loop: 
        - Declare a variable that stores the changes to be made to each element in the 
          array & make the following changes: 
            - Access each element by the index position [i] from that iteration of the loop
              & call a method (.toLowerCase()) on that element of the array. 
        - Write an if statement and check if the index position does not equal the last index.
            - If true, concatenate the variable that stores an empty string with the variable
              that stores the lower case words followed by a comma (", "). 
            - If false, conctenate the variable that stores an empty string with only the 
              variable that stoes the lower case words. 
*/
function makeLowerCase() {
    var foodList = ``
    for (var i = 0; i < favoriteFoods.length; i++) {
        var newFoods = favoriteFoods[i].toLowerCase();
        if (i !== favoriteFoods.length - 1) {
            foodList += newFoods + ", "
        } else {
            foodList += newFoods
        }
    }
    return foodList
}

console.log(makeLowerCase()); // --> ramen, tacos, chicken parmesan, sushi
