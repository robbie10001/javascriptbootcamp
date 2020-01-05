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


