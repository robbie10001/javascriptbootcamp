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
