/*
GOALS FOR THE SECTION 

Work with Arrays 
Write Object Literals 
Understand Refernce Types 
Use common Array/Object Methods. 
*/ 

/*
CREATING ARRAYS 

Arrays and Objects are collections of data.

Arrays are a collection of values. 
For example, a list of comments on a facebook post, levels in a game, or songs in a playlist.
Arrays collect data for us to then use. They are an ordered list
*/ 

//to make an empty array 
let students = []; 
//another method to create a new array 
new Array();
//an array of strings 
let colors = ["red", "orange", "yellow"];
//an array of numbers 
let lottoNum = [19,22,56,12,51]; 
//a mixed array - although the data in our arrays is normally similiar.
let stuff = [true, 68, "cat", null];
//another example of an array of strings
let shoppingList = ["cereal", "cheese", "ice"]

/*
ARRAY INDICES 

Just like with strings, arrays are indexed. We can access arrays the same way. For example,

*/

let colours = ["red", "orange", "yellow", "green"]
colours.length //4
colours[0] //red
colours[1] //orange
colours[2] //yellow
colours[3] //green
colours[colours.length-1] //green

/*
MODIFYING ARRAYS 

We can use the same syntax, where we use the index and square brackets 
but we can assign a newvalue, that will change whatever is at that index
Unlike strings, arrays are mutable. 


*/

let stuffForShops = [ "cheese", "milk"]  //array = cheese, milk
stuffForShops[1] = "Whole Milk"; //array = cheese, Whole Milk 
stuffForShops[2] = "Ice Cream"; //array = cheese, Whole Milk, Ice cream

//The problem with this approach is when we don't know how many items are in the array. s
//say data is coming in dynamically from users or a database, we might not know how many items are in the array. 

//We can always add to the end of the array the following way. 

stuffForShops[stuffForShops.length] = "Tomatoes"; //array = cheese, milk, ice cream, tomatoes. 
console.log(stuffForShops);

/*
ARRAY METHODS 

Push = add to end of array 
Pop = remove from end of array 


*/

let topSongs = [
    "first time ever i saw you face",
    "god only knows",
    "a day in the life",
    "life on mars"
];

topSongs.push["Fortunate Son"] //array = "first time ever i saw you face", "god only knows", "a day in the life", "life on mars", "fourtunate son"
//when we use the push method with the array we are actually chamging the data in the array, this is different from strnigs, 
//in which we would have to save the additional data in a new variable. 
//we can add multiple elements in with push, with the same order that we enter them into the array. 

topSongs.pop() //array = "first time ever i saw you face", "god only knows", "a day in the life", "life on mars"
//.pop removes the last item and returns to us the value that we have removed. 
//we can also use .pop to get the value of something out of an array and store in a variable, for example, 
const nextSong = topSongs.pop(); 
console.log(nextSong);//"a day in the life"
console.log(topSongs);//[ 'first time ever i saw you face', 'god only knows' ]

/*
ARRAY METHODS 
 
Shift = remove from start of array //very similar to push, but adds to the beginning of the array and returns the removed element.
Unshift = add to start of array very similar in function to pop.

*/

let dishesToDo = ["big platter"]  //dishToDo =  'big platter', 
dishesToDo.unshift("large plate") //dishtodo = [ 'large plate', 'big platter' ]
dishesToDo.unshift("small plate") //dishtodo = [ 'small plate', 'large plate', 'big platter' ]
dishesToDo.unshift("cereal bowl") //dishToDo = [ 'cereal bowl', 'small plate', 'large plate', 'big platter' ]
//with unshift, we can actually add in more than one element at a time! These are order but the order that we put them into the array. 
console.log(dishesToDo)

//
dishesToDo.shift() //dishesToDo = [ 'small plate', 'large plate', 'big platter' ]
dishesToDo.shift() //dishesToDo = [ 'large plate', 'big platter' ]
dishesToDo.shift() //dishesToDo = [ 'big platter' ]
dishesToDo.shift() //dishesToDo = []
console.log(dishesToDo)


/*
MORE ARRAY METHODS! 

concat - use to merges two or more arrays. 
*/ 

let fruits = ["apple", "banana"];
let veggies = ["asparagus", "brussel sprouts"];
let meats = ["steak", "chicken breast"]

fruits.concat(veggies); //[ 'apple', 'banana', 'asparagus', 'brussel sprouts' ]
veggies.concat(fruits); // [ 'asparagus', 'brussel sprouts', 'apple', 'banana' ]

//however, this does not actually save the changes we have made. 
//To do this, we do the following. 

let allFood = fruits.concat(veggies, meats); // [apple, banana, asparagus, brussel sprouts, steak, chicken breast]

/*
includes - looks for a value, and returns a boolean value. 
indexOf - just like str.indexOf. It will search for a value, and if it finds it will return the index of that value. 
If it doesn't find the value it will return [-1]

These methods are similiar in that they look for values or search through an array.
Although, they return different values. 

*/
//includes looks for a direct match.
let ingredients = ["water", "flour", "cheese", "shrimp"]
console.log(ingredients.includes("fish")); //false
console.log(ingredients.includes("water")) //true 

if(ingredients.includes("flour")) {
    console.log("i can't eat that!") // i can't eat that!"
}

let foods = ["water", "flour", "cheese", "shrimp"]; 
console.log(foods.indexOf("cheese")); //2 
console.log(foods.indexOf("bread")); //-1 
//just like with include, we can specify a from index. 
console.log(foods.indexOf("shrimp", 2)); //3 
console.log(foods.indexOf("water", 2)); //-1

/*

reverse - reverses an array in place, it doesn't make a copy. It mutates the original array. 
join - creates a string from an array. It takes an array and spits out a string. 
where it joins all the elements of that array into a single string. 

*/

let letters = ["a", "b", "c", "d", "e"]
letters.reverse();
console.log(letters); //[ 'e', 'd', 'c', 'b', 'a' ]

let lettersJoin = ["a", "b", "c", "d", "e"];
console.log(lettersJoin.join()) //a,b,c,d,e
//the default seperator between the values is commas, however we can change that. 
console.log(lettersJoin.join("&")) //a&b&c&d&e
//we can also combine our methods. 
console.log(lettersJoin.reverse().join(".")) //e.d.c.b.a
//what if we try to join something that is not a string? Well it turns the data into a string. 
let alwaysIntoString = [6, "six", true, [6]]
console.log(alwaysIntoString.join()) //6,six,true,6

/*
slice - takes a portion of an array and makes a new array with it. 
It doesn't modify the original array. It allows us to select or copy a part of an array into a new array.  

*/

let animals = ["sharks", "salmon", "whale", "bear", "lizard", "tortoise"];
let swimmers = animals.slice(0, 3); //[ 'sharks', 'salmon', 'whale' ]
let mammals = animals.slice(2, 4); //[ 'whale', 'bear' ]
let reptiles = animals.slice(4, 6) // [ 'lizard', 'tortoise' ]
//we can also write it differently, by passing in only a single argument. 
let singleArgument = animals.slice(3) //[ 'bear', 'lizard', 'tortoise' ]
//we can also pass in a negative number, this works backwards from the end of the array. 
let backwards = animals.slice(-5) //[ 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ]
//if we just call .slice, we will just copy the original array. 
let copy = animals.slice(); //[ 'sharks', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ]

/*
splice - either removes elements, replaces elements or addes new elements to an array.
if we want to update an array we can use splice. 
The splice method takes three arguements, the start index, how many things we want to delete, and what we want to insert. 
We don't have to insert or delete anything but we can. 
*/

let people = ["robbie", "craig", "caza", "sonia", "bruce", "harry", "sam"];
//people.splice(first argument = where we want to start removing or inserting, second argument how many things i want to delete, third argument what we want to add)
people.splice(1, 0, "max");
//AT THE FIRST ELEMENT OF THE ARRAY, WE ADD, "max"
//splice returned an empty array, this is because we didn't delete anything. 
console.log(people); //[ 'robbie', 'max', 'craig', 'caza', 'sonia', 'bruce', 'harry', 'sam' ]
//we can see that max has been added to the second element of the array. 
let peoples = ["robbie", "craig", "caza", "sonia", "bruce", "harry", "sam"];
peoples.splice(3, 2);
//AT INDEX OF 3, REMOVE TWO ITEMS 
console.log(peoples); //[ 'robbie', 'craig', 'caza', 'sonia', 'bruce', 'harry', 'sam' ]
//sonia and bruce have been removed from the array! 
let peps = ["robbie", "craig", "caza", "sonia", "bruce", "harry", "sam"];
peps.splice(3, 0, "mark", "lyn");
console.log(peps); //we have added mark and lyn to the array after caz. 
//AT THE THIRD ELEMENT OF THE ARRAY, WE ADD, "MARK, LYN"
//We can use splice to replace. 
let homoErectus = ["robbie", "craig", "caza", "sonia", "bruce", "harry", "sam"];
homoErectus.splice(0, 2, "FRANKY", "MATTHEW")
//AT THE FIRST ELEMENT OF THE ARRAY, WE REMOVE TWO ELEMENTS, AND ADD "FRANKY, MATTHEW"
console.log(homoErectus); //we have removed robbie and craig from the array and added FRANKY and MATTHEW

/*
sort - sorts an array. The way sort works is a bit surprising. 

*/

let womensNames = ["Mrs. Robinson", "Angie", "Jolene", "Maggie May", "Roxanne"];
womensNames.sort()
//we can see that the array has been sorted into alphebetical order.
//the array is mutated and the value of the array is also returned. 
console.log(womensNames); //[ 'Angie', 'Jolene', 'Maggie May', 'Mrs. Robinson', 'Roxanne' ]
//it gets tricky when we have an array for example of numbers. 
numbers = [34, 10, 10000, 67, 99];
numbers.sort();
console.log(numbers) //[ 10, 10000, 34, 67, 99 ]
//.sort is not ordering by the numerically value. 
//instead .sort converts all of these numbers into a string. 
// it then compaires each string element by their character codes. 
// this is the default behaviour of the .sort method. Hardly anybody in the community use .sort this way. 
// instead, they pass in a COMPARE FUNCTION.
//You do this by passing in a function that tells .sort how to sort. 

/*
INTRODUCTION TO REFERENCE TYPES  

*/





