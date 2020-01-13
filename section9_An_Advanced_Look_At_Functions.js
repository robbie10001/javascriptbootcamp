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

/*
FUNCTION EXPRESSIONS 
There is another syntax we can use to define our functions. 
This is called a function expression. 
They work just as well as the functions we have been declaring already. 
THERE IS ONE KEY DIFFERENCE, THE FUNCTION IS STORED IN A VARAIBLE. 
THE FUNCTION ITSELF DOESN'T HAVE A NAME. 
WE ARE ABLE TO STORE OUR FUNCTION IN A VARIABLE BECAUSE, FUNCTIONS ARE OBJECTS.     
we can store them in a variable, we can store 10 of them in an array, we can even pass them around as arguments.
We do this all the time. 

*/
//we have a variable called square. 
//it holds a function(an object) an it takes an argument.
const square = function (num) {
    return num * num 
}
//to call it, we use the variable name and an argument. 
//just like any other function. 
console.log(square(6)); //36
console.log(square(7)); //49

function add(x, y) {
    return x + y;
}
//this is the same as 
const sum = function (x,y) {
    return x + y; 
}
console.log(sum(9,3))//12 
console.dir(sum)//function: sum
//we can add in a name for our function 
const product = function multiple(x, y) {
    return x * y 
};
console.log(product(3, 4));//12 


/*
HIGHER ORDER FUNCTIONS

Function are objects, what does this mean? 
We can store a function in a variable or an array for example. 

*/
//function statement 
function add(x, y) {
    return x + y;
}
//function expresion 
const subtract = function(x, y) {
    return x - y; 
}

//function statement
function multiply(x, y) {
    return x * y; 
}
   
//function expression
const divide = function(x, y) {
    return x / y; 
}
//we have created an array which holds our four functions. 
const operations =[add, subtract, multiply, divide];

console.log(operations); //[ [function: add], [function: subtract], [function: multiply], [function:divide]]
console.log(operations[0](100, 4)); //this calls the add function (index 0) of our array, and prints 104. 
console.log(operations[1](100, 4));//this calls the subract function (index 1) and therefore the answer is 96.
console.log(operations[2](100, 4));//this calls the multiply function (index 2) and threfore returns 400.
console.log(operations[3](100, 4));//this calls the divide function and therefore divides 100/4 and logs 25. 

console.log("---------BREAK--------")

//we can do things like loop over our array of functions. 
for(let i of operations){
    let result =i(30, 5);
    console.log(result);//THIS PRINTS OUT 35(addition), 25(subtract), 150(times), 6(divide)
}

//this is creating a method
const thing = {
    doSomething: multiply
}
//we are creating an object which has the key of doSomething for the value of multiply.
console.log(thing.doSomething(50, 2))//100 
//we then call the object with the paramaters 50, 2 which ends up being 50 x 2 = 100





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