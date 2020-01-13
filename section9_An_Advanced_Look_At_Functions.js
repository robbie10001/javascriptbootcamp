/*
FUNCTIONS IN DETAILS 

Important things we should know about functions! 

GOALS 
1. Understand Scope 
2. Write higher order functions.
3. Pass functions as callbacks. 
*/

/*
FUNCTION SCOPE 

Function scope can be seen as variable visibility. 
The location where a variable is defined dictates where we have access to that variable. 
There are multiple different ways in which functions works in javascript. 

The first type of scope is called function scope. 
When we define a variable in a function, it is accessable only within that function. 

*/
function lol() {
    let person = "Tom"; 
    const age = 45; 
    var color = "teal"; 
console.log(person) //Tom
console.log(age) //45 
console.log(color) //teal 
}

lol() //calling the function however we don't have access to the variables inside this function. 
//WE CANNOT ACCESS THIS VARIABLE OUTSIDE THE BOUNDS OF OUR FUNCTION. 
//console.log(person)//not defined 
//console.log(age)//not defined
//console.log(color)//not defined 

let bird = "duck"; 
console.log(bird)//duck 
function birdWatching(){
    let bird = "chicken"
    console.log(bird)//chicken 
}
birdWatching()
console.log(bird);//duck 

/*
BLOCK SCOPE 

Block scope is a very important concept about how variables work in javascript. 
blocks is javascript are denoted by { }, curly braces. 
examples of blocks are if statements, for loops and while loops for example. 
Let and Const have different scoping to var. 
Let and const have block scoping while var only has function scoping. 
let, cost and var are three ways of declaring variables. 
let and const cannot be redelcared. We can change let but not redeclare it. 
Let and const are blocked scoped, var is not! 

*/
//this the behaviour of let and const 
if(true){
    let animal = "eel"
    console.log(animal)//eel 
}
//animal is scope to the block above us. 
//console.log(animal)//animal is not defined! 

if(true){
    var animals = "eel"
    console.log(animals)//eel 
}
//if we use var we can still get access to the value of animals outside of the block scope. 
console.log(animals)//eel 
//let and const have different scoping rules to var. 
//Var is scoped to functions, there is no block scoping for var. 
let mammals = ["bear", "cat", "dog"]
for(var i = 0; i < mammals.length; i++) {
    console.log(i, animals[i])
    //0, "e", 1, "e", 2 "l"
}
console.log(i)//3 
//because we use var, we have access to i after the loop. This could have a number of different consequences which aren't good! 

//[1,3,5]
//[2,6,10]
//we define a function that takes a single argument
function doubleArr(arr){
    //define a new array which is empty 
    //this const is defined in the function so is scoped to the function. 
    const results = [];
    //we have a for loop that goes through for the length of the array 
    for(let num of arr){
        let double = num * 2; 
        //double is scoped to this block of code. 
        results.push(double);
        //we still have access to results. Within a block we have access to variables defined outside the block in this function. 
    }
    //because results is defined with functional scope, we can call it here. 
    console.log(results);
};
doubleArr([1,2,3]);
//this returns 2,4,6 

/*
LEXICAL SCOPE  

Lexical scope is pretty simple and straight forward.
When we have nested functions, we have inner and outer functions. 
a variable defined in one function is available to nested functions within it. 

*/
function outer() {
    //our outer function is a variable called hero. 
    //we don't have access to it outside of the function, 
    //but if have a nested function it still has access to it. 
    //FOR EXAMPLE, OUTER FUNCTION HAS ACCESS TO INNER FUNCTION. 
    //when we have nested functions we have access to the variables declared in the parent function. 
    //IF WE USE REACT THIS IS VERY IMPORTANT! 
    let hero = "black panther";

    function inner() {
        let cryForHelp = `${hero}, please save me!`
        console.log(cryForHelp);
    }
    inner(); 
};

function outer(){
    let films = "Amadeus";

    function inner(){
        let films = "The Shining"
        console.log(films.toUpperCase());
        //when we reference films, we are going to see if there is a films defined within the inner function.
        //if it cannot find one, it moves up to the next function (outer) and looks to see if films is defined within the parent function. 
        //if it is it will use the parent variable. 
    }
    outer()
};
//console.log(outer()); //undefined 
//console.log(inner()); //inner is not defined. 










/*
FUNCTION EXPRESSIONS 



*/


/*
HIGHER ORDER FUNCTIONS



*/


/*
FUNCTIONS AS ARGUMENTS 



*/


/*
FUNCTIONS AS RETURN VALUES  



*/


/*
CALLBACKS 



*/


/*
HOISTING 



*/


/*




*/